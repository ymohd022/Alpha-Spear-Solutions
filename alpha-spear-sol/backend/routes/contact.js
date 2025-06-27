const express = require("express")
const { body, validationResult } = require("express-validator")
const rateLimit = require("express-rate-limit")
const db = require("../models")
const emailService = require("../services/emailService")
const router = express.Router()

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 contact form submissions per windowMs
  message: "Too many contact form submissions, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
})

// Validation rules
const contactValidation = [
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
  body("company").optional().trim().isLength({ max: 255 }).withMessage("Company name must be less than 255 characters"),
  body("jobTitle").optional().trim().isLength({ max: 255 }).withMessage("Job title must be less than 255 characters"),
  body("industry").optional().trim().isLength({ max: 100 }).withMessage("Industry must be less than 100 characters"),
  body("projectType")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Project type must be less than 100 characters"),
  body("budget").optional().trim().isLength({ max: 50 }).withMessage("Budget must be less than 50 characters"),
  body("timeline").optional().trim().isLength({ max: 50 }).withMessage("Timeline must be less than 50 characters"),
  body("message")
    .trim()
    .isLength({ min: 1, max: 5000 })
    .withMessage("Message is required and must be less than 5000 characters"),
  body("preferredContact").isIn(["email", "phone"]).withMessage("Preferred contact method must be email or phone"),
  body("newsletter").isBoolean().withMessage("Newsletter subscription must be true or false"),
]

// POST /api/contact
router.post("/", contactLimiter, contactValidation, async (req, res) => {
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

    // Create contact record
    const contactData = {
      ...req.body,
      ipAddress,
      userAgent,
      source: "website",
    }

    const contact = await db.Contact.create(contactData)

    // Handle newsletter subscription
    if (req.body.newsletter) {
      try {
        await db.Newsletter.findOrCreate({
          where: { email: req.body.email },
          defaults: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            source: "contact_form",
            ipAddress,
          },
        })
      } catch (newsletterError) {
        console.error("Newsletter subscription error:", newsletterError)
        // Don't fail the contact form if newsletter subscription fails
      }
    }

    // Send notification emails
    try {
      // Send confirmation email to user
      await emailService.sendContactConfirmation({
        to: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      })

      // Send notification email to admin
      await emailService.sendContactNotification({
        contact: contactData,
        contactId: contact.id,
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Don't fail the contact form if email sending fails
    }

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      contactId: contact.id,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    res.status(500).json({
      error: "Failed to submit contact form",
      message: "Please try again later",
    })
  }
})

// GET /api/contact (for admin use)
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query
    const offset = (page - 1) * limit

    const whereClause = {}
    if (status) {
      whereClause.status = status
    }
    if (search) {
      whereClause[db.Sequelize.Op.or] = [
        { firstName: { [db.Sequelize.Op.like]: `%${search}%` } },
        { lastName: { [db.Sequelize.Op.like]: `%${search}%` } },
        { email: { [db.Sequelize.Op.like]: `%${search}%` } },
        { company: { [db.Sequelize.Op.like]: `%${search}%` } },
      ]
    }

    const { count, rows } = await db.Contact.findAndCountAll({
      where: whereClause,
      limit: Number.parseInt(limit),
      offset: Number.parseInt(offset),
      order: [["created_at", "DESC"]],
    })

    res.json({
      contacts: rows,
      pagination: {
        total: count,
        page: Number.parseInt(page),
        limit: Number.parseInt(limit),
        totalPages: Math.ceil(count / limit),
      },
    })
  } catch (error) {
    console.error("Get contacts error:", error)
    res.status(500).json({
      error: "Failed to retrieve contacts",
    })
  }
})

// PUT /api/contact/:id/status (for admin use)
router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    if (!["new", "contacted", "in_progress", "completed", "closed"].includes(status)) {
      return res.status(400).json({
        error: "Invalid status value",
      })
    }

    const contact = await db.Contact.findByPk(id)
    if (!contact) {
      return res.status(404).json({
        error: "Contact not found",
      })
    }

    await contact.update({ status })

    res.json({
      success: true,
      message: "Contact status updated successfully",
      contact,
    })
  } catch (error) {
    console.error("Update contact status error:", error)
    res.status(500).json({
      error: "Failed to update contact status",
    })
  }
})

module.exports = router
