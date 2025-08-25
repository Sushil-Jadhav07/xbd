import React from 'react'

const WhatGain = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            What You'll Gain
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Gain the opportunity to enter the exclusive playing field of the Exponentials.
          </p>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Executive INSIGHTS */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-300 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-black rounded-sm relative">
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-black transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-black mb-3">
              Executive <span className="uppercase">INSIGHTS</span>
            </h3>
            
            <p className="text-black mb-4 leading-relaxed">
              Exclusive frameworks, case studies, and short reports you can pilot this quarter.
            </p>
            
            <a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 inline-flex items-center">
              Discover our insights →
            </a>
          </div>
          
          {/* Card 2: Peer to Peer LEARNING */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-300 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-black rounded-sm relative">
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-black transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-black mb-3">
              Peer to Peer <span className="uppercase">LEARNING</span>
            </h3>
            
            <p className="text-black mb-4 leading-relaxed">
              Collaborate with fellow CXOs & C-suite leaders in curated cohorts.
            </p>
            
            <a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 inline-flex items-center">
              Join a cohort →
            </a>
          </div>
          
          {/* Card 3: Activation LABS */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-gray-300 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-black rounded-sm relative">
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-black transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-black mb-3">
              Activation <span className="uppercase">LABS</span>
            </h3>
            
            <p className="text-black mb-4 leading-relaxed">
              Hands-on cohorts applying the XBD methodology to real business challenges.
            </p>
            
            <a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 inline-flex items-center">
              Apply for a lab →
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhatGain
