'use client'
import React from 'react'
import { MdPlayArrow, MdAccessTime, MdLanguage, MdDevices } from 'react-icons/md'
import Image from 'next/image'

const GroupCoaching = ({ groupCoachingData }) => {
  // Fallback data
  const fallbackData = {
    sectionTitle: "Group Coaching Sessions & Keynote",
    sessions: [
      {
        title: "Group X Sessions",
        description: "Learn at your own speed — tailored modules, hybrid delivery.",
        tags: [
          { text: "1 hour", iconType: "time" },
          { text: "On Request", iconType: "language" },
          { text: "Hybrid Mode", iconType: "device" }
        ],
        footer: "Trusted by leaders"
      },
      {
        title: "Inspire X (Keynote)",
        description: "Interactive sessions for hands-on mastery.",
        tags: [
          { text: "40 hours", iconType: "time" },
          { text: "On Request", iconType: "language" },
          { text: "Onsite Mode", iconType: "device" }
        ],
        footer: "Applied a pilot canvas and sequencing plan across customer lifecycle."
      }
    ]
  }

  const data = groupCoachingData || fallbackData

  // Icon mapping
  const getIcon = (iconType) => {
    const icons = {
      time: MdAccessTime,
      language: MdLanguage,
      device: MdDevices
    }
    return icons[iconType] || MdAccessTime
  }

  return (
    <div className="bg-white dark:bg-gray-950 py-16 transition-colors">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white">
            {data.sectionTitle}
          </h2>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {data.sessions?.map((session, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-200">
              
              {/* Video Placeholder */}
              <div className="flex justify-center mb-6">
                {session.videoThumbnail ? (
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden cursor-pointer">
                    <Image 
                      src={session.videoThumbnail}
                      alt={session.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <MdPlayArrow className="text-white text-3xl lg:text-4xl ml-1" />
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-300 dark:bg-gray-600 rounded-full w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200">
                    <MdPlayArrow className="text-gray-600 dark:text-gray-200 text-3xl lg:text-4xl ml-1" />
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-3 text-center">
                {session.title}
              </h3>
              
              {/* Description */}
              <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 text-center leading-relaxed">
                {session.description}
              </p>
              
              {/* Options/Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {session.tags?.map((tag, tagIndex) => {
                  const IconComponent = getIcon(tag.iconType)
                  return (
                    <div key={tagIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <IconComponent className="text-gray-600 dark:text-gray-300 text-base" />
                      <span className="font-medium">{tag.text}</span>
                    </div>
                  )
                })}
              </div>
              
              {/* Footer */}
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {session.footer}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default GroupCoaching