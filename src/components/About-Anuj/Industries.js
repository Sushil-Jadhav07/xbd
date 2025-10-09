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
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {data.title}
          </h2>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          
          {/* Left Column - Large Rectangle */}
          <div className="lg:col-span-2">
            <div className="bg-gray-200 rounded-lg h-96 md:h-[400px] flex items-center justify-center relative overflow-hidden">
              {data.mainFocusImage ? (
                <Image 
                  src={data.mainFocusImage}
                  alt={data.mainFocusText}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-gray-500 text-2xl font-medium">
                  {data.mainFocusText}
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Two Rows of Rectangles */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
              {data.industriesList?.map((industry, index) => (
                <div key={index} className="bg-gray-200 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center relative overflow-hidden">
                  {industry.icon ? (
                    <Image 
                      src={industry.icon}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm font-medium text-center px-2">
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