'use client'
import React, { useState } from 'react'

const Newsletters = ({ newsletterData }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // Fallback data
  const fallbackData = {
    label: "News Letter",
    title: "Join our monthly newsletter",
    description: "Join the leaders getting practical growth strategies straight to their inbox.",
    inputPlaceholder: "Enter your email address",
    buttonText: "Subscribe",
    privacyNote: "No spam, unsubscribe at any time."
  }

  const data = newsletterData || fallbackData

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: result.message || 'Successfully subscribed!' 
        })
        setEmail('') // Clear input on success
      } else {
        setMessage({ 
          type: 'error', 
          text: result.error || 'Something went wrong. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center">
        {/* Top Label with Icon */}
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-4">
          {/* <span className="text-lg">📧</span> */}
          <span>{data.label}</span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h2>

        {/* Subtitle/Description */}
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          {data.description}
        </p>

        {/* Newsletter Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={data.inputPlaceholder}
            required
            disabled={loading}
            className="flex-1 px-4 py-3 border border-gray-600 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed transition-all placeholder-gray-600"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-3 cursor-pointer bg-black text-white font-medium rounded-lg  transition-all"
          >
            {loading ? 'Subscribing...' : data.buttonText}
          </button>
        </form>

        {/* Status Message */}
        {message.text && (
          <div className={`max-w-md mx-auto mb-4 p-4 rounded-lg text-sm font-medium ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        {/* Privacy Note */}
        <p className="text-sm text-gray-500 mt-4">
          {data.privacyNote}
        </p>
      </div>
    </div>
  )
}

export default Newsletters