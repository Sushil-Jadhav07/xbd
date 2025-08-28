'use client'
import React from 'react'
import { MdImage } from 'react-icons/md'

const AboutTitle = () => {
  const skills = [
    "Pilot-ready playbooks",
    "Deployment runbooks & governance",
    "Case-study driven learning"
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          
          {/* Left Column - Image Placeholder */}
          <div className="">
            <div className="bg-gray-200 rounded-lg w-80 h-96 lg:w-full lg:h-full flex items-center justify-center overflow-hidden">
              {/* Image placeholder icon */}
              <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                <MdImage className="text-gray-500 text-3xl" />
              </div>
              
              {/* Optional: Add a subtle pattern or gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
            </div>
          </div>
          
          {/* Right Column - Text Content and Interactive Elements */}
          <div className="space-y-6">
            
            {/* Role/Title Tag */}
            <div className="inline-block bg-gray-100 text-black text-sm px-4 py-2 rounded-full font-medium">
              Author • Strategist • Advisor
            </div>
            
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                Hi, I'm Anuj
              </h1>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">
                I help leaders unlock exponential growth in an AI-driven world.
              </h2>
            </div>
            
            {/* Description Paragraph */}
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Author and advisor. Frameworks and playbooks that turn experiments into repeatable growth assets — used by telecom, aviation, fintech and enterprise teams.
            </p>
            
            {/* Skill/Topic Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg">
                Request a free 15-minute discovery
              </button>
              <button className="bg-gray-100 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-lg">
                Explore Book
              </button>
            </div>
            
            {/* Client Results/Footer Text */}
            <p className="text-sm text-gray-600 pt-4">
              Client results: +28% retention • 3x experiment velocity — anonymized case studies below.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTitle
