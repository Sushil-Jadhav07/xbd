import React from 'react'
import { MdImage } from 'react-icons/md';

const CommunityBanner = () => {
  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="max-w-ful mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-8 lg:gap-12">
          
          {/* Left Section - Image Placeholder */}
          <div className="">
          <div className="bg-[#dbdbdb] rounded-2xl lg:h-full h-[400px]  flex items-center justify-center relative overflow-hidden">
              {/* Image placeholder icon */}
              <div className="bg-gray-400 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                <MdImage className="text-gray-500 text-2xl" />
              </div>
              
              {/* Optional: Add a subtle pattern or gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
            </div>
          </div>
          
          {/* Right Section - Content */}
          <div className=" space-y-6">
            
            {/* Top Tag */}
            <h1 className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
              Framework • Community • Labs
            </h1>
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-medium text-black leading-tight">
                <span className="  pb-1">Become X-ponential:</span>
              </h1>
              <h1 className="text-4xl lg:text-6xl font-medium text-black leading-tight">
                <span className=" pb-1">Apply the framework</span>
              </h1>
              <h1 className="text-4xl lg:text-6xl font-medium text-black leading-tight">
                <span className="  pb-1">that <strong>scales leaders</strong> </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg text-black max-w-xl">
              Short, proven playbooks plus peer cohorts and hands-on labs to deliver measurable business results.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                Join the Community
              </button>
              <a href="#" className="text-black font-medium hover:text-gray-700 transition-colors duration-200 flex items-center">
                Request a Call
              </a>
            </div>
            
            {/* Informational Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-black font-medium">1,200+ leaders</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-black font-medium">Cohorts: ongoing</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-black font-medium">Pilot-ready frameworks</p>
              </div>
            </div>
            
            {/* Disclaimer */}
            <p className="text-sm text-black pt-4">
              Free trial access available. No credit card required.
            </p>
            
            {/* Floating Widget */}
          
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityBanner
