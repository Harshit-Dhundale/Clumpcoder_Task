const StatsCard = ({ title, value, change, changeType, iconType }) => {
  const isPositive = changeType === "positive"

  const getIcon = () => {
    switch (iconType) {
      case "eye":
        return (
          <div className="p-3 rounded-full bg-blue-50">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        )
      case "cart":
        return (
          <div className="p-3 rounded-full bg-green-50">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 004 16v1a1 1 0 001 1h1m0 0v3a1 1 0 001 1h2a1 1 0 001-1v-3m-6 0h6"
              />
            </svg>
          </div>
        )
      case "bag":
        return (
          <div className="p-3 rounded-full bg-yellow-50">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
              />
            </svg>
          </div>
        )
      case "users":
        return (
          <div className="p-3 rounded-full bg-purple-50">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
          {change && (
            <div className="flex items-center">
              <span className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>{change}</span>
              <span className={`ml-1 ${isPositive ? "text-green-600" : "text-red-600"}`}>{isPositive ? "↗" : "↘"}</span>
            </div>
          )}
        </div>
        <div className="ml-4">{getIcon()}</div>
      </div>
    </div>
  )
}

export default StatsCard
