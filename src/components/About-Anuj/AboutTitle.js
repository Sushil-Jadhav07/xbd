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
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Image */}
          <div className="">
            <div className="bg-gray-200 rounded-lg w-80 h-96 lg:w-full lg:h-full flex items-center justify-center overflow-hidden relative">
              {data.profileImage?.asset ? (
                <Image 
                  src={urlFor(data.profileImage).width(800).height(600).url()}
                  alt={data.profileImage.alt || data.mainHeading}
                  fill
                  className="object-cover"
                />
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
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                {data.mainHeading}
              </h1>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">
                {data.subHeading}
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl">
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
                  className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200 text-lg"
                >
                  {data.primaryButton.text}
                </button>
              )}
              {data.secondaryButton && (
                <Link
                  href={data.secondaryButton.link || '#'}
                  className="bg-gray-100 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-lg"
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
      onSubmit={async (values) => {
        // TODO: integrate with your API
        console.log('Submitting form:', values);
      }}
    />
    </>
  )
}

export default AboutTitle