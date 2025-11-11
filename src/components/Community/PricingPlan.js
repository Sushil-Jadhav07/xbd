'use client'
import React, { useState } from 'react'

const PricingPlan = () => {
  const [activeTier, setActiveTier] = useState(0) // First tier (Free Tier) is always open by default

  const toggleTier = (tierIndex) => {
    if (activeTier === tierIndex) {
      setActiveTier(null)
    } else {
      setActiveTier(tierIndex)
    }
  }

  const tiers = [
    {
      title: "Free Tier",
      content: "Community access, articles, podcast, events",
      description: "Quick entry — join weekly digest, attend public events, sample a cohort playbook.",
      tags: ["Open", "No Cost"],
      cta: {
        button: "Get Free Access",
        input: "Your Business Email",
        submit: "Join"
      }
    },
    {
      title: "Pro Tier",
      content: "Workshops, frameworks, templates",
      description: "Access to exclusive workshops, proven frameworks, and ready-to-use templates.",
      tags: ["Popular", "Limited seats"],
      cta: null
    },
    {
      title: "Premium Tier",
      content: "CXO pods, advisory calls, course access",
      description: "Exclusive CXO peer groups, direct advisory calls, and comprehensive course access.",
      tags: ["Invite", "Curated"],
      cta: null
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Pricing Plan
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Community Structure
          </h1>
          
          <p className="text-lg text-black max-w-3xl">
            Clear tiers. Transparent value. Choose by outcome, not features. Low-friction entry and upgrade paths.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Community Tiers */}
          <div className="lg:col-span-2 space-y-4">
            {tiers.map((tier, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                
                {/* Tier Header - Always Visible */}
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => toggleTier(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h1 className="text-xl font-bold text-black mb-2">
                        {tier.title}
                      </h1>
                      <p className="text-black mb-2">
                        {tier.content}
                      </p>
                    </div>
                    
                    {/* Status Tags */}
                    <div className="flex gap-2 ml-4">
                      {tier.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Indicator */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-600">
                      {activeTier === index ? 'Click to collapse' : 'Click to expand'}
                    </span>
                    <div className={`w-5 h-5 transition-transform duration-200 ${activeTier === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                </div>
                
                {/* Collapsible Content */}
                {activeTier === index && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-700 mt-4 mb-6">
                      {tier.description}
                    </p>
                    
                    {/* CTA Section for Free Tier */}
                    {index === 0 && tier.cta && (
                      <div className="space-y-4">
                        <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                          {tier.cta.button}
                        </button>
                        
                        <div className="flex gap-3">
                          <input 
                            type="email" 
                            placeholder={tier.cta.input}
                            className="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none"
                          />
                          <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200">
                            {tier.cta.submit}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            {/* Helper Text */}
            <p className="text-sm text-gray-600 mt-6">
              Need help deciding? Use Quick Match: click a recommended outcome and we'll suggest the right tier.
            </p>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Seats Left / Next Cohort Panel */}
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Seats left</span>
                <span className="text-2xl font-bold text-black">6</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Next cohort starts</span>
                <span className="text-lg font-medium text-black">in 21 days</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Limited cohort size increases accountability and outcomes. Apply now to secure a spot.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                  Request Access
                </button>
                <button className="w-full bg-gray-300 text-black py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors duration-200">
                  Send Nomination
                </button>
              </div>
            </div>
            
            {/* Trusted Outcomes Panel */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-bold text-black mb-4">Trusted outcomes</h3>
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full">Company A</span>
                <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full">Company B</span>
                <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full">Company C</span>
              </div>
              <p className="text-sm text-gray-700">
                1,200+ leaders / 80% pilot success rate
              </p>
            </div>
            
            {/* Quick Match Panel */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-bold text-black mb-4">Quick Match</h3>
              <p className="text-sm text-gray-700 mb-4">
                Pick the outcome you need and we'll recommend the tier.
              </p>
              <div className="space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                <button className="w-full bg-gray-300 text-black py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors duration-200">
                  Run a pilot
                </button>
                <button className="w-full bg-gray-300 text-black py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors duration-200">
                  Scale users
                </button>
                <button className="w-full bg-gray-300 text-black py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors duration-200">
                  Executive advisory
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlan
