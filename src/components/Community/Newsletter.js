'use client'
import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Top Label with Icon */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-sm font-medium text-black uppercase tracking-wide">
              News Letter
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Join our monthly newsletter
          </h2>
          
          {/* Subtitle/Description */}
          <p className="text-lg lg:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Join 5,000+ leaders getting practical growth strategies straight to their inbox.
          </p>
          
          {/* Newsletter Signup Form */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 w-full sm:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none text-base"
            />
            <button className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base">
              Subscribe
            </button>
          </div>
          
          {/* Privacy Note */}
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Newsletter
