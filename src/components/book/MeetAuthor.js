'use client'
import React from 'react'
import Link from 'next/link'
import { MdPlayArrow } from 'react-icons/md'

const MeetAuthor = ({ meetAuthorData }) => {
  // Fallback data
  const fallbackData = {
    title: "Meet the Author Behind the Framework",
    quote: "I Wrote This Book Not To Add To The Noise, But To Solve For The Signal.",
    authorBio: "Over 2 decades of consulting corporations, An enterprise architect and a design thinker",
    previousBook: "Author of DISRUPTIVE DIGITAL: THE NEW NORMAL (published 2018).",
    primaryButton: { text: "Contact ABC" },
    secondaryButton: { text: "See How It Works" }
  }

  const data = meetAuthorData || fallbackData

  return (
    <div className="bg-white mx-[15px] pb-16 relative overflow-hidden">
      {/* Animated Floating Shapes - Unique Variations */}
     

      <div className="max-w-7xl mx-auto px-2 md:px-0 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {data.title}
          </h2>
        </div>
        
        {/* Main Content Container */}
        <div className="bg-gray-100 rounded-lg p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Quote and Author Info */}
            <div className="space-y-2">
              <div className="text-gray-400 text-6xl lg:text-8xl mt-0">
                "
              </div>
              {/* Quote */}
              <div className="flex items-start gap-2">
                <blockquote className="text-xl md:text-2xl font-bold text-black leading-tight">
                  {data.quote}
                </blockquote>
              </div>
              
              {/* Author Details */}
              <div className="space-y-3">
                <p className="text-xs md:text-sm text-black leading-relaxed">
                  {data.authorBio}
                </p>
                {data.previousBook && (
                  <p className="text-sm md:text-base text-black leading-relaxed">
                    {data.previousBook.includes('DISRUPTIVE DIGITAL') ? (
                      <>
                        Author of <span className="font-semibold">DISRUPTIVE DIGITAL: THE NEW NORMAL</span> (published 2018).
                      </>
                    ) : (
                      data.previousBook
                    )}
                  </p>
                )}
              </div>
              
              {/* CTA Elements */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {data.primaryButton && (
                  <Link
                    href={data.primaryButton.link || '#'}
                    className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base"
                  >
                    {data.primaryButton.text}
                  </Link>
                )}
                {data.secondaryButton && (
                  <Link
                    href={data.secondaryButton.link || '#'}
                    className="text-black font-medium hover:text-gray-700 transition-colors duration-200 flex items-center text-base"
                  >
                    {data.secondaryButton.text}
                  </Link>
                )}
              </div>
            </div>
            
            {/* Right Side - Video Placeholder */}
            <div className="flex justify-center lg:justify-center">
              <div 
                className="bg-gray-300 rounded-full w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200"
                onClick={() => data.videoUrl && window.open(data.videoUrl, '_blank')}
              >
                <MdPlayArrow className="text-white text-4xl lg:text-5xl ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetAuthor