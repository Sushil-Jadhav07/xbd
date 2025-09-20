'use client'
import React from 'react'
import { MdPlayArrow, MdAccessTime, MdLanguage, MdEvent } from 'react-icons/md'

const Keynotes = ({ keynotesData }) => {
  // Fallback data
  const fallbackData = {
    title: "Keynotes and Moderations at global Forums",
    keynotesList: [
      {
        title: "Digital by Design Travel Ecosystem",
        subtitle: "CAPA Aviation Summit, 2024",
        description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
        duration: "60 hours",
        availability: "On Request",
        mode: "Hybrid Mode",
        trustText: "Trusted by leaders"
      },
      {
        title: "Importance of Design for Airports",
        subtitle: "Airport Modernization Summit, 2024",
        description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
        duration: "60 hours",
        availability: "On Request",
        mode: "Onsite Mode",
        trustText: "Trusted by leaders"
      }
    ]
  }

  const data = keynotesData || fallbackData

  return (
    <div className="bg-white dark:bg-gray-950 py-16 transition-colors">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white">
            {data.title}
          </h2>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {data.keynotesList?.map((keynote, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 lg:p-8 transition-colors">
              
              {/* Video Placeholder */}
              <div className="flex justify-center mb-6">
                <div 
                  className="bg-gray-300 dark:bg-gray-600 rounded-full w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200"
                  onClick={() => keynote.videoUrl && window.open(keynote.videoUrl, '_blank')}
                >
                  <MdPlayArrow className="text-gray-600 dark:text-gray-200 text-3xl lg:text-4xl ml-1" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-2 text-center">
                {keynote.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
                {keynote.subtitle}
              </p>
              
              {/* Tags/Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {keynote.duration && (
                  <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <MdAccessTime className="text-gray-600 dark:text-gray-300 text-base" />
                    <span className="font-medium">{keynote.duration}</span>
                  </div>
                )}
                {keynote.availability && (
                  <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <MdLanguage className="text-gray-600 dark:text-gray-300 text-base" />
                    <span className="font-medium">{keynote.availability}</span>
                  </div>
                )}
                {keynote.mode && (
                  <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <MdEvent className="text-gray-600 dark:text-gray-300 text-base" />
                    <span className="font-medium">{keynote.mode}</span>
                  </div>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-800 dark:text-gray-300 text-base lg:text-lg text-center mb-6 leading-relaxed">
                {keynote.description}
              </p>
              
              {/* Footer */}
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                {keynote.trustText || "Trusted by leaders"}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Keynotes