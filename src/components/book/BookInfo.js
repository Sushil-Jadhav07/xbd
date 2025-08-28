'use client'
import React from 'react'
import { MdImage } from 'react-icons/md'

const BookInfo = () => {
  const metrics = [
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
  ]

  const companyLogos = [
    { name: "NY TIMES", icon: "📰" },
    { name: "FORBES", icon: "💼" },
    { name: "MICROSOFT", icon: "🪟" }
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Left Side - Large Image Placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg h-96 lg:h-[600px] flex items-center justify-center relative overflow-hidden">
              {/* Image placeholder icon */}
              <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                <MdImage className="text-gray-500 text-3xl" />
              </div>
              
              {/* Optional: Add a subtle pattern or gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
            </div>
            <div className="mt-8">
          <div className="space-y-6">
            
            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-black">
              Understanding Framework
            </h2>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl">
              This hyperconverged setup needs a different mindset. It rewires organisational DNA for exponential thinking. Frameworks here are distilled from studying leaders at NVIDIA, Amazon, Google and OpenAI to give you practical tools and templates to implement.
            </p>
            
            {/* Company Logos/Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {companyLogos.map((company, index) => (
                <div key={index} className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                  <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-black font-medium text-sm">{company.name}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
          </div>
          
          {/* Right Side - Content Block */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Top Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-black uppercase tracking-wide">
                Why Every Transformation Leader Needs Exponential By Design
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-tight">
              Make decisions that move measurable outcomes <strong> not opinions</strong>
            </h1>
            
            {/* Limited Launch Badge */}
            <div className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium">
              Limited launch edition available
            </div>
            
            {/* Value Proposition Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4">
                  <div className="text-3xl lg:text-4xl font-bold text-black mb-1">
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
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg">
                Explore Framework Playbook
              </button>
              <a href="#" className="text-black font-medium hover:text-gray-700 transition-colors duration-200 flex items-center text-lg">
                Download summary (PDF)
              </a>
            </div>
            
            {/* Trust Indicator */}
            <p className="text-sm text-gray-600 pt-4">
              Trusted by 1,200+ leaders • Limited launch edition
            </p>
            
          </div>
        </div>
        
        {/* Supporting Content Section - Bottom Left */}
       
        
      </div>
    </div>
  )
}

export default BookInfo
