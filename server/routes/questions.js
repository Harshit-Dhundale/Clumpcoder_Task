import express from "express"
import Question from "../models/Question.js"
import CertificateCategory from "../models/CertificateCategory.js"
import { validateQuestion } from "../middleware/validation.js"

const router = express.Router()

// GET /api/questions - Get all questions with category data
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().populate("category", "name").sort({ createdAt: -1 })

    res.json({
      success: true,
      data: questions,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching questions",
      error: error.message,
    })
  }
})

// POST /api/questions - Create new question
router.post("/", validateQuestion, async (req, res) => {
  try {
    const { text, category } = req.body

    // Verify category exists
    const categoryExists = await CertificateCategory.findById(category)
    if (!categoryExists) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      })
    }

    const question = new Question({ text, category })
    await question.save()

    // Populate category data before sending response
    await question.populate("category", "name")

    res.status(201).json({
      success: true,
      message: "Question created successfully",
      data: question,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while creating question",
      error: error.message,
    })
  }
})

export default router
