"use client"

import { useState, useEffect } from "react"
import { useApp } from "../../context/AppContext"
import { questionAPI, categoryAPI } from "../../services/api"
import toast from "react-hot-toast"

const QuestionForm = () => {
  const [text, setText] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const { state, dispatch } = useApp()

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await categoryAPI.getAll()
      if (response.data.success) {
        dispatch({ type: "SET_CATEGORIES", payload: response.data.data })
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!text.trim()) {
      toast.error("Question text is required")
      return
    }

    if (!categoryId) {
      toast.error("Please select a category")
      return
    }

    dispatch({ type: "SET_LOADING", payload: true })

    try {
      const response = await questionAPI.create({
        text: text.trim(),
        category: categoryId,
      })

      if (response.data.success) {
        dispatch({ type: "ADD_QUESTION", payload: response.data.data })
        setText("")
        setCategoryId("")
        toast.success("Question created successfully!")
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to create question"
      dispatch({ type: "SET_ERROR", payload: errorMessage })
      toast.error(errorMessage)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Question</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={state.loading}
          >
            <option value="">Select a category</option>
            {state.categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="questionText" className="block text-sm font-medium text-gray-700 mb-2">
            Question Text
          </label>
          <textarea
            id="questionText"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter question text (minimum 10 characters)"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            disabled={state.loading}
          />
          <p className="text-xs text-gray-500 mt-1">{text.length}/10 characters minimum</p>
        </div>

        <button
          type="submit"
          disabled={state.loading || !text.trim() || !categoryId || text.length < 10}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {state.loading ? "Creating..." : "Create Question"}
        </button>
      </form>
    </div>
  )
}

export default QuestionForm
