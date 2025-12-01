'use client'
import React from 'react'
import { useState } from 'react'
import { MdImage } from 'react-icons/md'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import LeadFormModal from '../common/LeadFormModal'
import PreviewChapterForm from '../common/PreviewChapterForm'

const BookBanner = ({ bookBannerData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
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
    <>
    <div className="bg-white md:mx-[15px] mx-[5px] py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Book Cover */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg h-80 lg:h-full flex items-center justify-center relative overflow-hidden">
              {data.bookCoverImage ? (
                (() => {
                  // Handle Sanity image structure
                  let imageUrl = null
                  if (typeof data.bookCoverImage === 'string') {
                    imageUrl = data.bookCoverImage
                  } else if (data.bookCoverImage.asset?.url) {
                    imageUrl = data.bookCoverImage.asset.url
                  } else if (data.bookCoverImage.asset) {
                    try {
                      imageUrl = urlFor(data.bookCoverImage).width(2000).height(2000).url()
                    } catch (e) {
                      console.error('Error processing image:', e)
                    }
                  }
                  
                  return imageUrl ? (
                    <Image 
                      src={imageUrl}
                      alt={data.bookCoverImage.alt || "Book Cover"}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  ) : (
                    <>
                      <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                        <MdImage className="text-gray-500 text-3xl" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                    </>
                  )
                })()
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
            <h4 className="inline-block bg-gray-100 text-black text-xs px-4 py-2 rounded-full font-medium">
              {data.categoryTag}
            </h4>
            
            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl  font-medium text-black leading-tight">
                {data.titleLine1}
              </h1>
              <h1 className="text-3xl md:text-4xl  font-medium text-black leading-tight">
                {data.titleLine2}
              </h1>
              <h1 className="text-3xl md:text-4xl  font-bold text-black leading-tight">
                {data.titleLine3}
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-black max-w-4xl leading-relaxed">
              {data.description}
            </p>
            
            {/* Key Features */}
            {data.keyFeatures && (
              <ul className="space-y-3">
                {data.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-black text-lg mt-0">•</span>
                    <span className="text-black text-sm mt-1">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Information Tags */}
            {data.infoTags && (
              <div className="flex flex-wrap gap-3">
                {data.infoTags.map((tag, index) => (
                  <h4 key={index} className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full">
                    {tag}
                  </h4>
                ))}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {data.primaryButton && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200 text-base"
                >
                  {data.primaryButton.text}
                </button>
              )}
              {data.secondaryButton && (
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-white text-black px-8 py-4 rounded-lg text-center md:text-left font-medium border-2 border-black hover:bg-gray-50 transition-colors duration-200 text-base"
                >
                  {data.secondaryButton.text}
                </button>
              )}
            </div>
            
            {/* Trust Indicator */}
            <div className="flex items-center gap-2 pt-4">
              <span className="text-black text-lg">★</span>
              <p   className="text-black text-base">
                {data.trustIndicator}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <LeadFormModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Get Your Copy Now"
    />
    <PreviewChapterForm
      open={isPreviewOpen}
      onClose={() => setIsPreviewOpen(false)}
    />
    </>
  )
}

export default BookBanner