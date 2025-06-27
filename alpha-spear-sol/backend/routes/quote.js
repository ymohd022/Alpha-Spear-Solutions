const express = require("express")
const { body, validationResult } = require("express-validator")
const rateLimit = require("express-rate-limit")
const db = require("../models")
const emailService = require("../services/emailService")
const router = express.Router()

// Rate limiting for quote requests
const quoteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 quote requests per windowMs
  message: "Too many quote requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
})

// Validation rules
const quoteValidation = [
  body("firstName")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("First name is required and must be less than 100 characters"),
  body("lastName")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("Last name is required and must be less than 100 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email address"),
  body("phone").optional().isMobilePhone().withMessage("Please provide a valid phone number"),
  body("company")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage("Company name is required and must be less than 255 characters"),
  body("projectType")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("Project type is required and must be less than 100 characters"),
  body("projectDescription")
    .trim()
    .isLength({ min: 1, max: 5000 })
    .withMessage("Project description is required and must be less than 5000 characters"),
  body("requirements")
    .optional()
    .trim()
    .isLength({ max: 5000 })
    .withMessage("Requirements must be less than 5000 characters"),
  body("budget").optional().trim().isLength({ max: 50 }).withMessage("Budget must be less than 50 characters"),
  body("timeline").optional().trim().isLength({ max: 50 }).withMessage("Timeline must be less than 50 characters"),
  body("additionalInfo")
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage("Additional info must be less than 2000 characters"),
]

// POST /api/quote
router.post("/", quoteLimiter, quoteValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: "Validation failed",
        details: errors.array(),
      })
    }

    // Extract client information
    const ipAddress = req.ip || req.connection.remoteAddress
    const userAgent = req.get("User-Agent")

    // Determine priority based on budget and timeline
    let priority = "medium"
    if (req.body.budget && (req.body.budget.includes("$500,000+") || req.body.budget.includes("$250,000 - $500,000"))) {
      priority = "high"
    } else if (req.body.timeline === "ASAP") {
      priority = "urgent"
    }

    // Create quote record
    const quoteData = {
      ...req.body,
      priority,
      ipAddress,
      userAgent,
      source: "website",
    }

    const quote = await db.Quote.create(quoteData)

    // Send notification emails
    try {
      // Send confirmation email to user
      await emailService.sendQuoteConfirmation({
        to: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        projectType: req.body.projectType,
      })

      // Send notification email to admin
      await emailService.sendQuoteNotification({
        quote: quoteData,
        quoteId: quote.id,
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Don't fail the quote form if email sending fails
    }

    res.status(201).json({
      success: true,
      message: "Quote request submitted successfully",
      quoteId: quote.id,
    })
  } catch (error) {
    console.error("Quote request error:", error)
    res.status(500).json({
      error: "Failed to submit quote request",
      message: "Please try again later",
    })
  }
})

// GET /api/quote (for admin use)
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, status, priority, search } = req.query
    const offset = (page - 1) * limit

    const whereClause = {}
    if (status) {
      whereClause.status = status
    }
    if (priority) {
      whereClause.priority = priority
    }
    if (search) {
      whereClause[db.Sequelize.Op.or] = [
        { firstName: { [db.Sequelize.Op.like]: `%${search}%` } },
        { lastName: { [db.Sequelize.Op.like]: `%${search}%` } },
        { email: { [db.Sequelize.Op.like]: `%${search}%` } },
        { company: { [db.Sequelize.Op.like]: `%${search}%` } },
      ]
    }

    const { count, rows } = await db.Quote.findAndCountAll({
      where: whereClause,
      limit: Number.parseInt(limit),
      offset: Number.parseInt(offset),
      order: [["created_at", "DESC"]],
    })

    res.json({
      quotes: rows,
      pagination: {
        total: count,
        page: Number.parseInt(page),
        limit: Number.parseInt(limit),
        totalPages: Math.ceil(count / limit),
      },
    })
  } catch (error) {
    console.error("Get quotes error:", error)
    res.status(500).json({
      error: "Failed to retrieve quotes",
    })
  }
})

// PUT /api/quote/:id/status (for admin use)
router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params
    const { status, estimatedCost, estimatedHours, validUntil } = req.body

    if (!["new", "reviewing", "quoted", "accepted", "rejected", "completed"].includes(status)) {
      return res.status(400).json({
        error: "Invalid status value",
      })
    }

    const quote = await db.Quote.findByPk(id)
    if (!quote) {
      return res.status(404).json({
        error: "Quote not found",
      })
    }

    const updateData = { status }
    if (status === "quoted") {
      updateData.quotedAt = new Date()
      if (estimatedCost) updateData.estimatedCost = estimatedCost
      if (estimatedHours) updateData.estimatedHours = estimatedHours
      if (validUntil) updateData.validUntil = validUntil
    }

    await quote.update(updateData)

    res.json({
      success: true,
      message: "Quote status updated successfully",
      quote,
    })
  } catch (error) {
    console.error("Update quote status error:", error)
    res.status(500).json({
      error: "Failed to update quote status",
    })
  }
})

module.exports = router
