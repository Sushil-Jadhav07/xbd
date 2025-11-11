'use client'
import React from 'react'
import { MdPlayArrow, MdAccessTime, MdLanguage, MdDevices } from 'react-icons/md'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import BgImage from "../../asset/pattern-9.png"

const GroupCoaching = ({ groupCoachingData }) => {
  // Fallback data
  const fallbackData = {
    sectionTitle: "Group Coaching Sessions, Keynote & Consultancy",
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
      },
      {
        title: "Consultancy",
        description: "Strategic guidance to transform your organization's growth trajectory.",
        tags: [
          { text: "Custom Duration", iconType: "time" },
          { text: "On Request", iconType: "language" },
          { text: "Flexible Mode", iconType: "device" }
        ],
        footer: "Tailored consulting solutions for sustainable business transformation."
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

  // Function to render media (image or video)
  const renderMedia = (session) => {
    if (session.mediaType === 'video' && session.videoThumbnail?.asset) {
      return (
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden cursor-pointer">
          <Image 
            src={urlFor(session.videoThumbnail).width(200).height(200).url()}
            alt={session.videoThumbnail.alt || session.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <MdPlayArrow className="text-white text-3xl lg:text-4xl ml-1" />
          </div>
        </div>
      );
    } else if (session.mediaType === 'image' && session.image?.asset) {
      return (
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden">
          <Image 
            src={urlFor(session.image).width(200).height(200).url()}
            alt={session.image.alt || session.title}
            fill
            className="object-cover"
          />
        </div>
      );
    } else {
      // No media - return null to display nothing
      return null;
    }
  };

  return (
    <div className="bg-white pb-16 relative overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 opacity-100">
        <Image 
          src={BgImage} 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            {data.sectionTitle}
          </h1>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.sessions?.map((session, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-200">
              
              {/* Media (Image or Video) */}
              {renderMedia(session) && (
                <div className="flex justify-center mb-6">
                  {renderMedia(session)}
                </div>
              )}
              
              {/* Title */}
              <h1 className="text-lg md:text-xl font-bold text-black mb-3 text-center">
                {session.title}
              </h1>
              
              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 mb-6 text-center leading-relaxed">
                {session.description}
              </p>
              
              {/* Options/Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {session.tags?.map((tag, tagIndex) => {
                  const IconComponent = getIcon(tag.iconType)
                  return (
                    <div key={tagIndex} className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <IconComponent className="text-gray-600 text-sm" />
                      <span className="font-medium">{tag.text}</span>
                    </div>
                  )
                })}
              </div>
              
              {/* Footer */}
              <p className="text-sm text-gray-500 text-center">
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