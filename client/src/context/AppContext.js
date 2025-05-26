"use client"

import { createContext, useContext, useReducer } from "react"

const AppContext = createContext()

const initialState = {
  categories: [],
  questions: [],
  loading: false,
  error: null,
}

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false }
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload, loading: false }
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [action.payload, ...state.categories],
        loading: false,
      }
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload, loading: false }
    case "ADD_QUESTION":
      return {
        ...state,
        questions: [action.payload, ...state.questions],
        loading: false,
      }
    case "CLEAR_ERROR":
      return { ...state, error: null }
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
