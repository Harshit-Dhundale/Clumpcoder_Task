import express from "express"
import CertificateCategory from "../models/CertificateCategory.js"
import { validateCategory } from "../middleware/validation.js"

const router = express.Router()

// GET /api/categories - Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await CertificateCategory.find().sort({ createdAt: -1 })
    res.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching categories",
      error: error.message,
    })
  }
})

// POST /api/categories - Create new category
router.post("/", validateCategory, async (req, res) => {
  try {
    const { name } = req.body

    // Check if category already exists
    const existingCategory = await CertificateCategory.findOne({
      name: { $regex: new RegExp(`^${name}$`, "i") },
    })

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category with this name already exists",
      })
    }

    const category = new CertificateCategory({ name })
    await category.save()

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while creating category",
      error: error.message,
    })
  }
})

export default router
