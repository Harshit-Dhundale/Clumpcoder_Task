"use client"

import { useState } from "react"
import { useApp } from "../../context/AppContext"
import { categoryAPI } from "../../services/api"
import toast from "react-hot-toast"

const CategoryForm = () => {
  const [name, setName] = useState("")
  const { state, dispatch } = useApp()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim()) {
      toast.error("Category name is required")
      return
    }

    dispatch({ type: "SET_LOADING", payload: true })

    try {
      const response = await categoryAPI.create({ name: name.trim() })

      if (response.data.success) {
        dispatch({ type: "ADD_CATEGORY", payload: response.data.data })
        setName("")
        toast.success("Category created successfully!")
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to create category"
      dispatch({ type: "SET_ERROR", payload: errorMessage })
      toast.error(errorMessage)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Category</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 mb-2">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={state.loading}
          />
        </div>

        <button
          type="submit"
          disabled={state.loading || !name.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {state.loading ? "Creating..." : "Create Category"}
        </button>
      </form>
    </div>
  )
}

export default CategoryForm
