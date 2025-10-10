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
    <div className="bg-white py-16 relative overflow-hidden">
      {/* Animated Floating Shapes - Unique Variations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Extra Large Circle - Top Right */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/5 animate-pulse-slow"></div>
        
        {/* Large Floating Square */}
        <div className="absolute top-20 left-[8%] w-36 h-36 bg-gradient-to-br from-indigo-400/15 to-blue-400/10 rotate-[25deg] animate-float-slow"></div>
        
        {/* Medium Circle - Left Side */}
        <div className="absolute top-1/2 left-16 w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/15 to-teal-400/10 animate-float-medium"></div>
        
        {/* Large Triangle - Bottom Left */}
        <div className="absolute bottom-24 left-[15%] w-0 h-0 border-l-[55px] border-l-transparent border-r-[55px] border-r-transparent border-b-[90px] border-b-indigo-400/15 animate-float-slow-reverse"></div>
        
        {/* Medium Diamond Shape */}
        <div className="absolute top-32 right-[20%] w-26 h-26 bg-gradient-to-br from-purple-400/15 to-pink-400/10 rotate-45 animate-float-medium-reverse"></div>
        
        {/* Small Accent Circle - Top */}
        <div className="absolute top-16 left-1/3 w-18 h-18 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-400/10 animate-float-fast"></div>
        
        {/* Large Hexagon-like shape - Bottom Right */}
        <div className="absolute bottom-16 right-[12%] w-32 h-32 bg-gradient-to-br from-teal-400/10 to-cyan-300/10 rotate-[15deg] animate-float-slow"></div>
        
        {/* Small Square - Middle Right */}
        <div className="absolute top-[95%] right-24 w-20 h-20 bg-gradient-to-br from-indigo-500/15 to-purple-400/10 rotate-[35deg] animate-float-fast-reverse"></div>
        
        {/* Medium Circle - Bottom Center */}
        <div className="absolute bottom-10 left-[45%] w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/15 to-indigo-400/10 animate-float-medium"></div>
        
        {/* Tiny Accent Dot */}
        <div className="absolute top-[90%] left-[20%] w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-400/10 animate-float-fast"></div>
      </div>

      <div className="max-w-full mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {data.title}
          </h2>
        </div>
        
        {/* Main Content Container */}
        <div className="bg-gray-100 rounded-lg p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Quote and Author Info */}
            <div className="space-y-2">
              <div className="text-gray-400 text-6xl lg:text-8xl mt-2">
                "
              </div>
              {/* Quote */}
              <div className="flex items-start gap-2">
                <blockquote className="text-2xl md:text-3xl font-bold text-black leading-tight">
                  {data.quote}
                </blockquote>
              </div>
              
              {/* Author Details */}
              <div className="space-y-3">
                <p className="text-sm md:text-base text-black leading-relaxed">
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