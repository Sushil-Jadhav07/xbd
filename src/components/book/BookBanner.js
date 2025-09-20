'use client'
import React from 'react'
import { MdImage } from 'react-icons/md'
import Image from 'next/image'

const BookBanner = ({ bookBannerData }) => {
  // Fallback data
  const fallbackData = {
    categoryTag: "Book",
    titleLine1: "Unlock Exponential",
    titleLine2: "Growth Lead Smarter,",
    titleLine3: "Scale Faster",
    description: "A strategic playbook for leaders who want to harness AI, design, and systems thinking to stay ahead of disruption.",
    keyFeatures: [
      "See the X Framework in action",
      "Run a 6-week pilot with templates",
      "Make confident decisions with peer-tested playbooks"
    ],
    infoTags: ["Hardcover & eBook", "For CXOs and transformation leaders"],
    primaryButton: { text: "Get Your Copy Now" },
    secondaryButton: { text: "Preview Free Chapter" },
    trustIndicator: "Trusted by 5,000+ leaders and endorsed by global experts."
  };

  const data = bookBannerData || fallbackData;

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Book Cover */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg h-96 lg:h-full flex items-center justify-center relative">
              {data.bookCoverImage ? (
                <Image 
                  src={data.bookCoverImage}
                  alt="Book Cover"
                  fill
                  className="object-cover rounded-lg"
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
          
          {/* Right Column - Book Details */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Category Tag */}
            <div className="inline-block bg-gray-100 text-black text-sm px-4 py-2 rounded-full font-medium">
              {data.categoryTag}
            </div>
            
            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-tight">
                {data.titleLine1}
              </h1>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-tight">
                {data.titleLine2}
              </h1>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                {data.titleLine3}
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-black max-w-2xl leading-relaxed">
              {data.description}
            </p>
            
            {/* Key Features */}
            {data.keyFeatures && (
              <ul className="space-y-3">
                {data.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-black text-lg mt-1">•</span>
                    <span className="text-black text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Information Tags */}
            {data.infoTags && (
              <div className="flex flex-wrap gap-3">
                {data.infoTags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {data.primaryButton && (
                <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg">
                  {data.primaryButton.text}
                </button>
              )}
              {data.secondaryButton && (
                <button className="bg-white text-black px-8 py-4 rounded-lg font-medium border-2 border-black hover:bg-gray-50 transition-colors duration-200 text-lg">
                  {data.secondaryButton.text}
                </button>
              )}
            </div>
            
            {/* Trust Indicator */}
            <div className="flex items-center gap-2 pt-4">
              <span className="text-black text-lg">★</span>
              <span className="text-black text-base">
                {data.trustIndicator}
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookBanner