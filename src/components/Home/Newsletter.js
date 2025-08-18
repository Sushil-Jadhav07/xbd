import React from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'

const Newsletter = () => {
  return (
    <section className="bg-white py-6 md:py-12  border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col justify-start items-start text-start">
              {/* Label */}
              <div className="flex items-left justify-start gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                <HiOutlineSparkles className="text-lg" />
                Newsletter
              </div>
    
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight ">
                Join our monthly newsletter 
              </h2>
    
              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed">
                "join 5,000+ leaders getting practical growth stratergies straight to their inbox."
              </p>
            </div>

            </div>
            </section>
  )
}

export default Newsletter