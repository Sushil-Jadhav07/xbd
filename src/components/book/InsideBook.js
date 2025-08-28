'use client'
import React from 'react'

const InsideBook = () => {
  const modules = [
    {
      module: "Rise of Exponentials",
      description: "How AI and convergence reset the growth curve."
    },
    {
      module: "The X Framework",
      description: "A systemic model combining mindset, design, agility, and network effects."
    },
    {
      module: "System thinking for leaders",
      description: "Reduce complexity and act with clarity."
    },
    {
      module: "Emotional influence + value",
      description: "Build trust to unlock new value streams."
    },
    {
      module: "Case studies",
      description: "Real examples from leaders who applied the framework."
    },
    {
      module: "Activation guide",
      description: "Turn insights into action with practical playbooks."
    }
  ]

  const endorsements = [
    {
      quote: "A pragmatic blueprint for leaders navigating AI-driven growth.",
      author: "CXO, enterprise"
    },
    {
      quote: "Cuts through noise. Shows how to run pilots that matter.",
      author: "Product leader"
    },
    {
      quote: "Clear mental models for scale.",
      author: "Transformation head"
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Inside the book: what you'll learn
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized by top publications & executives shaping the future
          </p>
        </div>
        
        {/* Main Content Container */}
        <div className="bg-gray-100 rounded-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Section: Modules and Descriptions */}
            <div className="lg:col-span-2">
             
              
              {/* Table Headers */}
              <div className="bg-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-2 gap-6">
                  <div className="font-bold text-black text-lg">Module</div>
                  <div className="font-bold text-black text-lg">Description</div>
                </div>
              </div>
              
              {/* Modules Table */}
              <div className="space-y-3">
                {modules.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="font-bold text-black text-lg">
                        {item.module}
                      </div>
                      <div className="text-gray-700 text-base leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Section: Endorsements and CTAs */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-black mb-6">Endorsements</h3>
              
              {/* Testimonial Boxes */}
              <div className="space-y-4">
                {endorsements.map((endorsement, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <blockquote className="text-gray-700 text-base mb-3 leading-relaxed">
                      "{endorsement.quote}"
                    </blockquote>
                    <cite className="text-black font-medium text-sm">
                      — {endorsement.author}
                    </cite>
                  </div>
                ))}
              </div>
              
              {/* Call-to-Action Buttons */}
              <div className="gap-3 flex items-center justify-center pt-6">
                <button className="w-full bg-black text-white py-2 px-6 rounded-lg font-medium border-2 border-black hover:bg-gray-800 transition-colors duration-200 text-lg">
                  Get free chapter
                </button>
                <button className="w-full bg-white text-black py-2 px-6 rounded-lg font-medium border-2 border-black hover:bg-gray-50 transition-colors duration-200 text-lg">
                  Join updates
                </button>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default InsideBook
