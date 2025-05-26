import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Question text is required"],
    trim: true,
    minlength: [10, "Question text must be at least 10 characters long"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CertificateCategory",
    required: [true, "Category is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("Question", questionSchema)
