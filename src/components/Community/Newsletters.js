'use client'
import React from 'react'

const Newsletters = ({ newsletterData }) => {
  // Fallback data
  const fallbackData = {
    label: "News Letter",
    title: "Join our monthly newsletter",
    description: "Join 5,000+ leaders getting practical growth strategies straight to their inbox.",
    inputPlaceholder: "Enter your email address",
    buttonText: "Subscribe",
    privacyNote: "No spam, unsubscribe at any time."
  }

  const data = newsletterData || fallbackData

  return (
    <div className="bg-[#f5f1eb] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Top Label with Icon */}
          <div className="flex items-center justify-center gap-2 mb-4">
            
            <span className="text-sm font-medium text-black uppercase tracking-wide">
              {data.label}
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {data.title}
          </h2>
          
          {/* Subtitle/Description */}
          <p className="text-sm lg:text-base text-black max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
          
          {/* Newsletter Signup Form */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder={data.inputPlaceholder}
              className="flex-1 w-full sm:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none text-base"
            />
            <button className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base">
              {data.buttonText}
            </button>
          </div>
          
          {/* Privacy Note */}
          <p className="text-sm text-gray-500 mt-4">
            {data.privacyNote}
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Newsletters