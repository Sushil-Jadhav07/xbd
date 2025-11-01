'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

// Import fallback industry images
import industry1 from '../../asset/industry/1.webp'
import industry2 from '../../asset/industry/2.webp'
import industry3 from '../../asset/industry/3.webp'
import industry4 from '../../asset/industry/4.webp'
import industry5 from '../../asset/industry/5.webp'
import industry6 from '../../asset/industry/6.webp'
import industry7 from '../../asset/industry/7.webp'
import industry8 from '../../asset/industry/8.webp'

const Industries = ({ industriesData }) => {
  // Fallback industry images array
  const fallbackIndustryImages = [
    industry1, industry2, industry3, industry4,
    industry5, industry6, industry7, industry8
  ]

  // Fallback data
  const fallbackData = {
    title: "Industries Engagement",
    mainFocusText: "Industry Focus",
    mainFocusImage: { asset: { url: industry1 } },
    industriesList: [
      { name: "Telecom", fallbackImage: industry1 },
      { name: "Aviation", fallbackImage: industry2 },
      { name: "Fintech", fallbackImage: industry3 },
      { name: "Enterprise", fallbackImage: industry4 },
      { name: "Healthcare", fallbackImage: industry5 },
      { name: "Retail", fallbackImage: industry6 },
      { name: "Education", fallbackImage: industry7 },
      { name: "Government", fallbackImage: industry8 }
    ]
  }

  const data = industriesData || fallbackData

  return (
    <div className="bg-white md:mx-[15px] mx-[5px] py-16 relative overflow-hidden">
      

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
              {data.mainFocusImage?.asset?.url ? (
                <Image 
                  src={data.mainFocusImage.asset.url}
                  alt={data.mainFocusImage.alt || data.mainFocusText}
                  fill
                  className="object-cover"
                />
              ) : data.mainFocusImage?.fallbackImage ? (
                <Image 
                  src={data.mainFocusImage.fallbackImage}
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
                  {industry.icon?.asset?.url ? (
                    <Image 
                      src={industry.icon.asset.url}
                      alt={industry.icon.alt || industry.name}
                      fill
                      className="object-cover"
                    />
                  ) : industry.fallbackImage ? (
                    <Image 
                      src={industry.fallbackImage}
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