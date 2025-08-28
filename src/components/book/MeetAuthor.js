'use client'
import React from 'react'
import { MdPlayArrow } from 'react-icons/md'

const MeetAuthor = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Meet the Author Behind the Framework
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
              {/* Quote Icon and Text */}
              <div className="flex items-start gap-2">
               
                <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">
                  I Wrote This Book Not To Add To The Noise, But To Solve For The Signal.
                </blockquote>
              </div>
              
              {/* Author Details */}
              <div className="space-y-3 ">
                <p className="text-base lg:text-lg text-black leading-relaxed">
                  Over 2 decades of consulting corporations, An enterprise architect and a design thinker
                </p>
                <p className="text-base lg:text-lg text-black leading-relaxed">
                  Author of <span className="font-semibold">DISRUPTIVE DIGITAL: THE NEW NORMAL</span> (published 2018).
                </p>
              </div>
              
              {/* Call-to-Action Elements */}
              <div className="flex flex-col sm:flex-row gap-4  pt-4">
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg">
                  Contact ABC
                </button>
                <a href="#" className="text-black font-medium hover:text-gray-700 transition-colors duration-200 flex items-center text-lg">
                  See How It Works
                </a>
              </div>
              
            </div>
            
            {/* Right Side - Video Placeholder */}
            <div className="flex justify-center lg:justify-center">
              <div className="bg-gray-300 rounded-full w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200">
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
