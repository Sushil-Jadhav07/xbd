import React from 'react'

const Topbar = () => {
  return (
    <div className="bg-white py-4 lg:py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-lg px-4 py-3 gap-3 flex items-center justify-between">
          {/* Left side with "New" badge and text */}
          <div className="flex items-center space-x-3">
            <span className="bg-gray-300 text-black text-xs font-medium px-2.5 py-1 rounded-full">
              New
            </span>
            <span className="text-black lg:text-sm text-xs font-medium">
              Cohort applications open — next cohort starts in 3 weeks.
            </span>
          </div>
          
          {/* Right side with Register button */}
          <button className="bg-black text-white lg:text-sm text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
