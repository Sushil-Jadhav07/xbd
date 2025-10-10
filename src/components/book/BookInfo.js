'use client'
import React from 'react'
import { MdImage } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import BgImage from "../../asset/pattern-11.png"

const BookInfo = ({ bookInfoData }) => {
  // Fallback data
  const fallbackData = {
    topLabel: "Why Every Transformation Leader Needs Exponential By Design",
    headline: "Make decisions that move measurable outcomes",
    headlineBold: "not opinions",
    limitedEditionBadge: "Limited launch edition available",
    metrics: [
      {
        value: "7x",
        title: "Revenue & capital",
        description: "Higher revenue and capital efficiency."
      },
      {
        value: "2x",
        title: "Intangible assets",
        description: "Faster IP, software and brand value."
      },
      {
        value: "20x",
        title: "Sales uplift",
        description: "Network-aligned launches produce outsized adoption."
      },
      {
        value: "5x",
        title: "R&D ROI",
        description: "Focused experiments increase returns."
      }
    ],
    primaryButton: { text: "Explore Framework Playbook" },
    secondaryButton: { text: "Download summary (PDF)" },
    trustIndicator: "Trusted by 1,200+ leaders • Limited launch edition",
    supportingTitle: "Understanding Framework",
    supportingDescription: "This hyperconverged setup needs a different mindset. It rewires organisational DNA for exponential thinking. Frameworks here are distilled from studying leaders at NVIDIA, Amazon, Google and OpenAI to give you practical tools and templates to implement.",
    companyLogos: [
      { name: "NY TIMES" },
      { name: "FORBES" },
      { name: "MICROSOFT" }
    ]
  }

  const data = bookInfoData || fallbackData

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src={BgImage} 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Left Side - Large Image */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg h-96 lg:h-[600px] flex items-center justify-center relative overflow-hidden">
              {data.mainImage ? (
                <Image 
                  src={data.mainImage}
                  alt="Book Info"
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                    <MdImage className="text-gray-500 text-3xl" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                </>
              )}
            </div>

            <div className="mt-8">
              <div className="space-y-6">
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-black">
                  {data.supportingTitle}
                </h2>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl">
                  {data.supportingDescription}
                </p>
                
                {/* Company Logos/Badges */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {data.companyLogos?.map((company, index) => (
                    <div key={index} className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                      {company.logo ? (
                        <div className="w-4 h-4 relative">
                          <Image 
                            src={company.logo}
                            alt={company.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-sm"></div>
                        </div>
                      )}
                      <span className="text-black font-medium text-sm">{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Top Label */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl md:text-3xl font-medium text-black uppercase tracking-wide">
                {data.topLabel}
              </h2>
            </div>
            
            {/* Headline */}
            <h1 className="text-base md:text-lg font-medium text-black leading-tight">
              {data.headline} <strong>{data.headlineBold}</strong>
            </h1>
            
            {/* Limited Launch Badge */}
            <div className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium">
              {data.limitedEditionBadge}
            </div>
            
            {/* Value Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {data.metrics?.map((metric, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4">
                  <div className="text-2xl lg:text-3xl font-bold text-black mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-black mb-2">
                    {metric.title}
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {data.primaryButton && (
                <Link
                  href={data.primaryButton.link || '#'}
                  className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base"
                >
                  {data.primaryButton.text}
                </Link>
              )}
              {data.secondaryButton && (
                <Link
                  href={data.secondaryButton.link || '#'}
                  className="text-black font-medium hover:text-gray-700 transition-colors duration-200 flex items-center text-base"
                >
                  {data.secondaryButton.text}
                </Link>
              )}
            </div>
            
            {/* Trust Indicator */}
            <p className="text-sm text-gray-600 pt-0">
              {data.trustIndicator}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookInfo