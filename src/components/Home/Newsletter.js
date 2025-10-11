'use client'
import React, { useState } from 'react'

const Newsletter = ({newsletterData}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fallback data
  const fallbackData = {
    label: "NEWS LETTER",
    title: "Join our monthly newsletter",
    description: "Join 5,000+ leaders getting practical growth strategies straight to their inbox.",
    inputPlaceholder: "Enter your email address",
    buttonText: "Subscribe",
    privacyNote: "No spam, unsubscribe at any time."
  };

  const data = newsletterData || fallbackData;

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // TODO: Implement actual newsletter subscription logic
    console.log('Newsletter subscription:', email)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      alert('Thank you for subscribing!')
    }, 1000)
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Top Label */}
          <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              {data.label}
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            {data.description}
          </p>
          
          {/* Newsletter Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={data.inputPlaceholder}
              className="flex-1 w-full sm:w-auto bg-gray-100 text-gray-900 placeholder-gray-500 px-6 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-gray-400 text-base"
              required
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : data.buttonText}
            </button>
          </form>
          
          {/* Privacy Note */}
          <p className="text-sm text-gray-500 mt-4">
            {data.privacyNote}
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Newsletter