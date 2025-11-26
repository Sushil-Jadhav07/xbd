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
      await submitToMailchimp(email)
      setMessage({ 
        type: 'success', 
        text: 'Successfully subscribed!' 
      })
      setEmail('') // Clear input on success
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage({ 
        type: 'error', 
        text: error.message || 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setLoading(false)
    }
  }

  const submitToMailchimp = (emailAddress) => {
    return new Promise((resolve, reject) => {
      const MAILCHIMP_URL = 'https://xbd.us11.list-manage.com/subscribe/post-json'
      const u = '279a02443a57a9821b4e42c23'
      const id = 'c8c278b85a'

      const params = new URLSearchParams({
        u,
        id,
        f_id: '00642fe1f0',
        EMAIL: emailAddress,
        'b_279a02443a57a9821b4e42c23_c8c278b85a': ''
      })

      const callbackName = `newsletterCallback_${Date.now()}`
      const script = document.createElement('script')
      script.src = `${MAILCHIMP_URL}?${params.toString()}&c=${callbackName}`

      window[callbackName] = (data) => {
        delete window[callbackName]
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }

        if (data.result === 'success' || (data.msg && data.msg.includes('already subscribed'))) {
          resolve(data)
        } else {
          reject(new Error(data.msg || 'Something went wrong. Please try again.'))
        }
      }

      script.onerror = () => {
        delete window[callbackName]
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
        reject(new Error('Network error. Please try again.'))
      }

      document.body.appendChild(script)

      setTimeout(() => {
        if (window[callbackName]) {
          delete window[callbackName]
          if (script.parentNode) {
            script.parentNode.removeChild(script)
          }
          reject(new Error('Request timeout. Please try again.'))
        }
      }, 10000)
    })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center">
        {/* Top Label with Icon */}
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-4">
          {/* <span className="text-lg">📧</span> */}
          <h4>{data.label}</h4>
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
            className="flex-1 text-gray-700 px-4 py-3 border border-gray-600 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed transition-all placeholder-gray-600"
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