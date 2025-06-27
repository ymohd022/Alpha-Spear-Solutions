const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const { body, validationResult } = require("express-validator")
const nodemailer = require("nodemailer")
require("dotenv").config()

const db = require("./models")
const contactRoutes = require("./routes/contact")
const quoteRoutes = require("./routes/quote")

const app = express()
const PORT = process.env.PORT || 3000

// Security middleware
app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:4200",
    credentials: true,
  }),
)

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
})
app.use(limiter)

// Body parsing middleware
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Routes
app.use("/api/contact", contactRoutes)
app.use("/api/quote", quoteRoutes)

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: "Something went wrong!",
    message: process.env.NODE_ENV === "development" ? err.message : "Internal server error",
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" })
})

// Database connection and server start
async function startServer() {
  try {
    await db.sequelize.authenticate()
    console.log("Database connection established successfully.")

    // Sync database (create tables if they don't exist)
    await db.sequelize.sync({ alter: true })
    console.log("Database synchronized successfully.")

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`)
    })
  } catch (error) {
    console.error("Unable to start server:", error)
    process.exit(1)
  }
}

startServer()

module.exports = app
