import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import categoryRoutes from "./routes/categories.js"
import questionRoutes from "./routes/questions.js"

// Load environment variables
dotenv.config()

// Connect to MongoDB
connectDB()

const app = express()

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? ["https://your-frontend-domain.vercel.app"] : ["http://localhost:3000"],
    credentials: true,
  }),
)
app.use(express.json())

// Routes
app.use("/api/categories", categoryRoutes)
app.use("/api/questions", questionRoutes)

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Certificate Manager API is running",
    timestamp: new Date().toISOString(),
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
