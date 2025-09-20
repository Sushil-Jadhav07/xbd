'use client'
import React from 'react'
import Image from 'next/image'

const Industries = ({ industriesData }) => {
  // Fallback data
  const fallbackData = {
    title: "Industries Engagement",
    mainFocusText: "Industry Focus",
    industriesList: [
      { name: "Telecom" },
      { name: "Aviation" },
      { name: "Fintech" },
      { name: "Enterprise" },
      { name: "Healthcare" },
      { name: "Retail" },
      { name: "Education" },
      { name: "Government" }
    ]
  }

  const data = industriesData || fallbackData

  return (
    <div className="bg-white dark:bg-gray-950 py-16 transition-colors">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white">
            {data.title}
          </h2>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Left Column - Large Rectangle */}
          <div className="lg:col-span-2">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 lg:h-[400px] flex items-center justify-center transition-colors relative overflow-hidden">
              {data.mainFocusImage ? (
                <Image 
                  src={data.mainFocusImage}
                  alt={data.mainFocusText}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-gray-500 dark:text-gray-200 text-2xl font-medium">
                  {data.mainFocusText}
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Two Rows of Rectangles */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {data.industriesList?.map((industry, index) => (
                <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors relative overflow-hidden">
                  {industry.icon ? (
                    <Image 
                      src={industry.icon}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                      {industry.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Industries