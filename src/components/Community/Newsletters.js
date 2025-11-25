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
    description: "Join 5,000+ leaders getting practical growth strategies straight to their inbox.",
    inputPlaceholder: "Enter your email address",
    buttonText: "Subscribe",
    privacyNote: "No spam, unsubscribe at any time."
  }

  const data = newsletterData || fallbackData

  const handleSubmit = async () => {
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      await submitToMailchimp(email)
      setMessage({
        type: 'success',
        text: 'Successfully subscribed!'
      })
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
      setMessage({
        type: 'error',
        text: error.message || 'Network error. Please try again.'
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

      const callbackName = `communityNewsletterCallback_${Date.now()}`
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
          reject(new Error(data.msg || 'Subscription failed. Please try again.'))
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
    <div className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Top Label with Icon */}
          <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
            <span className="text-sm font-medium text-black uppercase tracking-wide">
              {data.label}
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {data.title}
          </h1>
          
          {/* Subtitle/Description */}
          <p className="text-sm lg:text-base text-black max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
          
          {/* Newsletter Signup Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
          >
            <input 
              type="email" 
              placeholder={data.inputPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="flex-1 w-full sm:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none text-base disabled:cursor-not-allowed disabled:bg-gray-200"
            />
            <button 
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full sm:w-auto bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Subscribing...' : data.buttonText}
            </button>
          </form>

          {message.text && (
            <p className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message.text}
            </p>
          )}
          
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