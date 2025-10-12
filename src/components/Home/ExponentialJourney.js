"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MountainImage from '../../asset/mountainimg.png';

export default function ExponentialJourney() {
  const [activeTab, setActiveTab] = useState('leaders');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Mountain Background */}
      <div className="relative md:h-[800px] h-[300px] bg-gradient-to-b from-gray-800 to-black">
        {/* Mountain Silhouette with Journey Points */}
        <div className="absolute bottom-0 left-0 right-0 h-[100%]">
          <Image
            src={MountainImage}
            alt="Mountain Background"
            fill
            className="object-cover"
            priority
          />

          {/* Header Text Overlay on Mountain */}
          <div className="absolute top-4 md:top-8 left-0 right-0 text-center px-4 z-10">
            <h1 className="text-lg md:text-4xl font-light mb-0 md:mb-4">
              <span className="text-yellow-500 font-semibold">Design</span> your <span className="text-yellow-500 font-semibold">Exponential</span> journey now
            </h1>
            <p className="text-gray-100 text-xs md:text-base max-w-3xl mx-auto">
              Whether you're leading a transformation, preparing for AI, or scaling innovation, we have a path for you.
            </p>
          </div>

          {/* Journey Points */}
          {/* Foundation Point */}
          <div className="absolute md:left-[2%] left-[2%] md:bottom-[5%] bottom-[10%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-yellow-600"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Foundation</span>
          </div>

          {/* Reflector Point */}
          <div className="absolute md:left-[20%] left-[18%] md:bottom-[15%] bottom-[20%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Reflector</span>
          </div>

          {/* Implementor Point */}
          <div className="absolute md:left-[35%] left-[30%] md:top-[50%] top-[50%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Implementor</span>
          </div>

          {/* Practitioner Point */}
          <div className="absolute left-[49%] top-[30%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Practitioner</span>
          </div>
        </div>

        {/* Book Button */}
        <div className="absolute md:left-[13%] left-[30%] md:bottom-[5%] bottom-[2%]">
          <input
            type="text"
            placeholder="Book"
            className="bg-gray-800 border border-gray-600 text-gray-400 md:px-4 px-2 md:py-2 py-1 rounded md:w-64 w-32 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row mb-8 gap-2 md:gap-0">
          <button
            onClick={() => setActiveTab('leaders')}
            className={`w-full md:w-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium transition-colors ${
              activeTab === 'leaders'
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            For X-ponential Leaders
          </button>
          <button
            onClick={() => setActiveTab('organisations')}
            className={`w-full md:w-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium transition-colors ${
              activeTab === 'organisations'
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            For X-ponential Organisations
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-0 border border-gray-200 rounded-lg overflow-hidden">
          {/* Stage 1 Foundation - 30% */}
          <div className="w-full lg:w-[30%] bg-transparent p-4 md:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-700">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-600"></div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">STAGE 1</p>
            <h3 className="text-yellow-500 text-xl md:text-2xl font-semibold">FOUNDATION</h3>
          </div>

          {/* Middle Column - Journey Stages - 20% */}
          <div className="w-full lg:w-[20%] bg-transparent border-b lg:border-b-0 lg:border-r border-gray-700 flex items-center justify-center">
            <div className="w-full">
              <div className="p-3 md:p-6 border-b border-gray-700">
                <h4 className="text-white text-base md:text-lg font-medium text-center">PRACTITIONER</h4>
              </div>
              <div className="p-3 md:p-6 border-b border-gray-700">
                <h4 className="text-white text-base md:text-lg font-medium text-center">IMPLEMENTOR</h4>
              </div>
              <div className="p-3 md:p-6 border-b border-gray-700">
                <h4 className="text-white text-base md:text-lg font-medium text-center">REFLECTION</h4>
              </div>
              <div className="p-3 md:p-6">
                <h4 className="text-yellow-500 text-base md:text-lg font-medium text-center">FOUNDATION</h4>
              </div>
            </div>
          </div>

          {/* Right Column - Details - 50% */}
          <div className="w-full lg:w-[50%] bg-transparent p-4 md:p-8">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">Promise</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
              Learn the <span className="italic">why</span> and <span className="italic">what</span> of exponential growth
            </p>

            <h4 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4">What you get</h4>
            <ul className="space-y-2 mb-8 md:mb-12">
              <li className="text-gray-300 text-sm md:text-base flex items-start">
                <span className="mr-2">•</span>
                <span>Book</span>
              </li>
              <li className="text-gray-300 text-sm md:text-base flex items-start">
                <span className="mr-2">•</span>
                <span>Access to Tools & Resources</span>
              </li>
              <li className="text-gray-300 text-sm md:text-base flex items-start">
                <span className="mr-2">•</span>
                <span>60+ hours of Online Learning</span>
              </li>
            </ul>

            <div className="text-2xl md:text-4xl font-bold text-white">₹49,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}