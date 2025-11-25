'use client'
import React from 'react'
import { useState } from 'react'
import { MdImage } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import LeadFormModal from '../common/LeadFormModal'
import { urlFor } from '@/lib/sanity'

const AboutTitle = ({ aboutTitleData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Fallback data
  const fallbackData = {
    roleTag: "Author • Strategist • Advisor",
    mainHeading: "Hi, I'm Anuj",
    subHeading: "I help leaders unlock exponential growth in an AI-driven world.",
    description: "Author and advisor. Frameworks and playbooks that turn experiments into repeatable growth assets — used by telecom, aviation, fintech and enterprise teams.",
    skills: [
      "Pilot-ready playbooks",
      "Deployment runbooks & governance",
      "Case-study driven learning"
    ],
    primaryButton: { text: "Request a free 15-minute discovery" },
    secondaryButton: { text: "Explore Book" },
    clientResults: "Client results: +28% retention • 3x experiment velocity — anonymized case studies below."
  }

  const data = aboutTitleData || fallbackData

  return (
    <>
    <div className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          
          {/* Left Column - Image */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 rounded-lg w-full max-w-md h-auto flex items-center justify-center overflow-hidden relative">
              {data.profileImage?.asset ? (
                <div className="relative w-full h-auto">
                  <Image 
                    src={urlFor(data.profileImage).width(1800).height(2100).url()}
                    alt={data.profileImage.alt || data.mainHeading}
                    width={6000}
                    height={7000}
                    className="object-contain w-full h-auto rounded-lg"
                  />
                </div>
              ) : (
                <>
                  <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                    <MdImage className="text-gray-500 text-3xl" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                </>
              )}
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-6">
            
            {/* Role Tag */}
            <div className="inline-block bg-gray-100 text-black text-sm px-4 py-2 rounded-full font-medium">
              {data.roleTag}
            </div>
            
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                {data.mainHeading}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                {data.subHeading}
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl">
              {data.description}
            </p>
            
            {/* Skill Tags */}
            {data.skills && (
              <div className="flex flex-wrap gap-3 pt-2">
                {data.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {data.primaryButton && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200 text-base"
                >
                  {data.primaryButton.text}
                </button>
              )}
              {data.secondaryButton && (
                <Link
                  href={data.secondaryButton.link || '#'}
                  className="bg-gray-100 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-base"
                >
                  {data.secondaryButton.text}
                </Link>
              )}
            </div>
            
            {/* Client Results */}
            <p className="text-sm text-gray-600 pt-4">
              {data.clientResults}
            </p>
            
          </div>
        </div>
      </div>
    </div>
    <LeadFormModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Request a free 15-minute discovery"
    />
    </>
  )
}

export default AboutTitle