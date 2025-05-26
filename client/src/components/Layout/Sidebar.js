"use client"

import { useState } from "react"

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    dashboard: true,
    task: false,
    forms: true,
    tables: false,
    pages: false,
    chart: false,
    uiElements: false,
    authentication: false,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-slate-800 text-white overflow-y-auto">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-600 rounded-xs"></div>
            </div>
          </div>
          <span className="text-xl font-bold">TailAdmin</span>
        </div>
      </div>

      <nav className="mt-2 pb-8">
        {/* MENU Section */}
        <div className="px-6 mb-4">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">MENU</h3>
        </div>

        {/* Dashboard */}
        <div>
          <button
            onClick={() => toggleSection("dashboard")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Dashboard
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.dashboard ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openSections.dashboard && (
            <div className="bg-slate-700">
              <a href="#" className="block px-12 py-2 text-sm text-gray-300 hover:text-white">
                eCommerce
              </a>
              <a href="#" className="block px-12 py-2 text-sm text-gray-300 hover:text-white">
                Analytics
              </a>
              <a href="#" className="block px-12 py-2 text-sm text-gray-300 hover:text-white">
                Marketing
              </a>
              <a href="#" className="block px-12 py-2 text-sm text-gray-300 hover:text-white">
                CRM
              </a>
              <a href="#" className="block px-12 py-2 text-sm text-gray-300 hover:text-white">
                Stocks
              </a>
            </div>
          )}
        </div>

        {/* Calendar */}
        <a
          href="#"
          className="flex items-center px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Calendar
        </a>

        {/* Profile */}
        <a
          href="#"
          className="flex items-center px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Profile
        </a>

        {/* Task */}
        <div>
          <button
            onClick={() => toggleSection("task")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              Task
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.task ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Forms */}
        <div>
          <button
            onClick={() => toggleSection("forms")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Forms
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.forms ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openSections.forms && (
            <div className="bg-slate-700">
              <a href="#" className="block px-12 py-2 text-sm text-gray-300 hover:text-white">
                Form Elements
              </a>
              <div className="flex items-center justify-between px-12 py-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Pro Form Elements
                </a>
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">Pro</span>
              </div>
              <a href="#" className="block px-12 py-2 text-sm text-gray-300 hover:text-white">
                Form Layout
              </a>
              <div className="flex items-center justify-between px-12 py-2">
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Pro Form Layout
                </a>
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">Pro</span>
              </div>
            </div>
          )}
        </div>

        {/* Tables */}
        <div>
          <button
            onClick={() => toggleSection("tables")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Tables
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.tables ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Pages */}
        <div>
          <button
            onClick={() => toggleSection("pages")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Pages
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.pages ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* SUPPORT Section */}
        <div className="px-6 mb-4 mt-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">SUPPORT</h3>
        </div>

        {/* Messages */}
        <div className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Messages
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">5</span>
            <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">Pro</span>
          </div>
        </div>

        {/* Inbox */}
        <div className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            Inbox
          </div>
          <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">Pro</span>
        </div>

        {/* Invoice */}
        <div className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Invoice
          </div>
          <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">Pro</span>
        </div>

        {/* OTHERS Section */}
        <div className="px-6 mb-4 mt-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">OTHERS</h3>
        </div>

        {/* Chart */}
        <div>
          <button
            onClick={() => toggleSection("chart")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Chart
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.chart ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* UI Elements */}
        <div>
          <button
            onClick={() => toggleSection("uiElements")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
              UI Elements
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.uiElements ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Authentication */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection("authentication")}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Authentication
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openSections.authentication ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
