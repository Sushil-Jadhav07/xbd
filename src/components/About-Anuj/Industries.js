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
    <div className="bg-white py-16 relative overflow-hidden">
      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle - Top Left */}
        <div className="absolute top-16 left-8 w-40 h-40 rounded-full bg-gradient-to-br from-[#9d7035]/15 to-[#c1a35e]/10 animate-float-slow"></div>
        
        {/* Medium Square - Top Right */}
        <div className="absolute top-24 right-16 w-28 h-28 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 rotate-[20deg] animate-float-medium"></div>
        
        {/* Large Triangle - Bottom Left */}
        <div className="absolute bottom-32 left-[12%] w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[80px] border-b-[#c1a35e]/15 animate-float-slow-reverse"></div>
        
        {/* Medium Circle - Middle Right */}
        <div className="absolute top-1/2 right-24 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400/15 to-amber-400/10 animate-float-medium-reverse"></div>
        
        {/* Small Diamond - Top Center */}
        <div className="absolute top-20 left-1/3 w-20 h-20 bg-gradient-to-br from-[#9d7035]/15 to-amber-500/10 rotate-45 animate-float-fast"></div>
        
        {/* Extra Large Pulsing Circle - Bottom Right */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-amber-300/10 to-transparent animate-pulse-slow"></div>
        
        {/* Small Hexagon - Middle Left */}
        <div className="absolute top-[45%] left-16 w-24 h-24 bg-gradient-to-br from-yellow-500/15 to-[#c1a35e]/10 rotate-[18deg] animate-float-slow"></div>
        
        {/* Medium Square - Bottom Center */}
        <div className="absolute bottom-20 left-[40%] w-26 h-26 bg-gradient-to-br from-amber-500/15 to-yellow-400/10 rotate-[30deg] animate-float-fast-reverse"></div>
        
        {/* Tiny Accent Circle */}
        <div className="absolute top-[35%] right-[30%] w-16 h-16 rounded-full bg-gradient-to-br from-[#9d7035]/15 to-amber-300/10 animate-float-fast"></div>
        
        {/* Large Square - Middle */}
        <div className="absolute top-1/3 left-[20%] w-32 h-32 bg-gradient-to-br from-yellow-300/10 to-amber-300/10 rotate-12 animate-float-medium"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
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