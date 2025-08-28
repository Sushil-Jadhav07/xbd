'use client'
import React from 'react'
import { MdPlayArrow, MdAccessTime, MdLanguage, MdEvent } from 'react-icons/md'

const Keynotes = () => {
  const keynotes = [
    {
      title: "Digital by Design Travel Ecosystem",
      subtitle: "CAPA Aviation Summit, 2024",
      description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
      tags: [
        { text: "60 hours", icon: MdAccessTime },
        { text: "On Request", icon: MdLanguage },
        { text: "Hybrid Mode", icon: MdEvent }
      ]
    },
    {
      title: "Importance of Design for Airports",
      subtitle: "Airport Modernization Summit, 2024",
      description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
      tags: [
        { text: "60 hours", icon: MdAccessTime },
        { text: "On Request", icon: MdLanguage },
        { text: "Onsite Mode", icon: MdEvent }
      ]
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Keynotes and Moderations at global Forums
          </h2>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {keynotes.map((keynote, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 lg:p-8">
              
              {/* Video Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-300 rounded-full w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200">
                  <MdPlayArrow className="text-gray-600 text-3xl lg:text-4xl ml-1" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-black mb-2 text-center">
                {keynote.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-base lg:text-lg text-black mb-4 text-center">
                {keynote.subtitle}
              </p>
              
              {/* Tags/Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {keynote.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="bg-gray-200 text-black text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <tag.icon className="text-gray-600 text-base" />
                    <span className="font-medium">{tag.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-black text-base lg:text-lg text-center mb-6 leading-relaxed">
                {keynote.description}
              </p>
              
              {/* Footer */}
              <p className="text-sm text-black text-center">
                Trusted by leaders
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Keynotes
