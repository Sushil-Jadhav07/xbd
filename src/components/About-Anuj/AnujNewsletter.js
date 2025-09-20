'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AnujNewsletter = ({ anujNewsletterData }) => {
  const [email, setEmail] = useState('')

  // Fallback data
  const fallbackData = {
    badgeText: "NEWS LETTER",
    mainHeading: "Unlock Your Organization's Exponential Potential",
    subtitle: "We combine consulting, hands-on workshops and tailored learning paths to help executive teams move from experiments to sustained growth.",
    features: [
      {
        title: "Expert Consulting",
        description: "Tailored strategies to create lasting change."
      },
      {
        title: "Courses & Workshops",
        description: "Practical frameworks for leaders to scale growth."
      },
      {
        title: "Measured Outcomes",
        description: "Rollouts focused on measurable lift and velocity."
      }
    ],
    newsletterPlaceholder: "Subscribe for short leadership insights",
    subscribeButtonText: "Subscribe",
    ctaButtons: {
      primaryButtonText: "Work with Anuj",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Order Book",
      secondaryButtonLink: "/book"
    }
  }

  const data = anujNewsletterData || fallbackData

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-4 py-12 transition-colors">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3 transition-colors">
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider">
            {data.badgeText}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 max-w-4xl">
          {data.mainHeading}
        </h1>
        
        <p className="text-lg text-black dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Feature Section - Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl w-full">
        {data.features?.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
              {feature.icon ? (
                <div className="relative w-8 h-8">
                  <Image 
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <svg className="w-8 h-8 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              )}
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-black dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Newsletter Signup Section */}
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={data.newsletterPlaceholder}
          className="flex-1 px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-colors"
          required
        />
        <button 
          type="submit"
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          {data.subscribeButtonText}
        </button>
      </form>

      {/* Footer CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={data.ctaButtons?.primaryButtonLink || '#'}>
          <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            {data.ctaButtons?.primaryButtonText}
          </button>
        </Link>
        <Link href={data.ctaButtons?.secondaryButtonLink || '#'}>
          <button className="px-8 py-3 bg-white dark:bg-gray-950 text-black dark:text-white border-2 border-black dark:border-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            {data.ctaButtons?.secondaryButtonText}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AnujNewsletter