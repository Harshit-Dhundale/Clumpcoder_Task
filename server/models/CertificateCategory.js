import mongoose from "mongoose"

const certificateCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
    trim: true,
    minlength: [3, "Category name must be at least 3 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("CertificateCategory", certificateCategorySchema)
