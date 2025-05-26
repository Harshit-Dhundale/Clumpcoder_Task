import Joi from "joi"

export const validateCategory = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
      "string.min": "Category name must be at least 3 characters long",
      "any.required": "Category name is required",
    }),
  })

  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    })
  }
  next()
}

export const validateQuestion = (req, res, next) => {
  const schema = Joi.object({
    text: Joi.string().min(10).required().messages({
      "string.min": "Question text must be at least 10 characters long",
      "any.required": "Question text is required",
    }),
    category: Joi.string().required().messages({
      "any.required": "Category is required",
    }),
  })

  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    })
  }
  next()
}
