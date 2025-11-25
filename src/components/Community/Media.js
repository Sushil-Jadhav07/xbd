'use client'
import React from 'react'

const Media = () => {
  const mediaItems = [
    {
      type: "Vlog: Exponential Mindset",
      details: "12m • VLOG • Quick tactics to test this week",
      tags: ["12 Min", "Demo", "Pilot +14%"],
      primaryButton: "Watch",
      secondaryButton: "Share"
    },
    {
      type: "Podcast: Scaling Networks",
      details: "PODCAST • Interviews with transformation leads",
      tags: ["38 Min", "Deep-dive", "Avg lift +9%"],
      primaryButton: "Watch",
      secondaryButton: "Share"
    },
    {
      type: "Case: Activation Lab",
      details: "Report Outcome: revenue or activation lift",
      tags: ["6 pages", "Metric +22%"],
      primaryButton: "Download case",
      secondaryButton: "Preview",
      tertiaryButton: "Share"
    }
  ]

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Media & Case Study
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Media & Case Highlights
          </h2>
          
          <p className="text-lg text-black max-w-3xl mx-auto">
            Short-form media and outcome-driven case content. Watch, listen, or download the playbook that matches your goal.
          </p>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mediaItems.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              
              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {item.type}
              </h3>
              
              {/* Details */}
              <p className="text-black mb-4">
                {item.details}
              </p>
              
              {/* Tags/Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-300 text-black text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Call-to-Action Buttons */}
              <div className="lg:space-y-2 flex flex-row flex-wrap gap-2">
                <button className="w-[120px] h-full text-[0.7rem] bg-black text-white py-2 px-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  {item.primaryButton}
                </button>
                
                <div className="flex  gap-2 h-full">
                  <button className=" bg-gray-300 w-[120px] text-[0.7rem] text-black py-2 px-3 rounded-lg  font-medium hover:bg-gray-400 transition-colors duration-200">
                    {item.secondaryButton}
                  </button>
                  
                  {/* Third button for Case Study */}
                  
                </div>
                {item.tertiaryButton && (
                    <button className="text-[0.7rem] w-[120px] h-full bg-gray-300 text-black py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors duration-200">
                      {item.tertiaryButton}
                    </button>
                  )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Media
