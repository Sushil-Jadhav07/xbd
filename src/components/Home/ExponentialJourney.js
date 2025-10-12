"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MountainImage from '../../asset/mountainimg.png';

export default function ExponentialJourney() {
  const [activeTab, setActiveTab] = useState('leaders');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Mountain Background */}
      <div className="relative h-[800px] bg-gradient-to-b from-gray-800 to-black">
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
          <div className="absolute top-8 left-0 right-0 text-center px-4 z-10">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              <span className="text-yellow-500 font-semibold">Design</span> your <span className="text-yellow-500 font-semibold">Exponential</span> journey now
            </h1>
            <p className="text-white text-sm md:text-base max-w-3xl mx-auto">
              Whether you're leading a transformation, preparing for AI, or scaling innovation, we have a path for you.
            </p>
          </div>

          {/* Journey Points */}
          {/* Foundation Point */}
          <div className="absolute left-[2%] bottom-[5%] flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center border-4 border-gray-800">
                <div className="w-4 h-4 rounded-full bg-yellow-600"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Foundation</span>
          </div>

          {/* Reflector Point */}
          <div className="absolute left-[20%] bottom-[15%] flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Reflector</span>
          </div>

          {/* Implementor Point */}
          <div className="absolute left-[35%] top-[50%] flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Implementor</span>
          </div>

          {/* Practitioner Point */}
          <div className="absolute left-[49%] top-[30%] flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Practitioner</span>
          </div>
        </div>

        {/* Book Button */}
        <div className="absolute left-[13%] bottom-[5%]">
          <input
            type="text"
            placeholder="Book"
            className="bg-gray-800 border border-gray-600 text-gray-400 px-4 py-2 rounded w-64 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab('leaders')}
            className={`px-8 py-3 font-medium transition-colors ${
              activeTab === 'leaders'
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            For X-ponential Leaders
          </button>
          <button
            onClick={() => setActiveTab('organisations')}
            className={`px-8 py-3 font-medium transition-colors ${
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
          <div className="w-full lg:w-[30%] bg-transparent p-8 flex flex-col items-center justify-center border-r border-gray-700">
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-600"></div>
            </div>
            <p className="text-gray-400 text-sm mb-2">STAGE 1</p>
            <h3 className="text-yellow-500 text-2xl font-semibold">FOUNDATION</h3>
          </div>

          {/* Middle Column - Journey Stages - 20% */}
          <div className="w-full lg:w-[20%] bg-transparent border-r border-gray-700 flex items-center justify-center">
            <div className="w-full">
              <div className="p-6 border-b border-gray-700">
                <h4 className="text-white text-lg font-medium text-center">PRACTITIONER</h4>
              </div>
              <div className="p-6 border-b border-gray-700">
                <h4 className="text-white text-lg font-medium text-center">IMPLEMENTOR</h4>
              </div>
              <div className="p-6 border-b border-gray-700">
                <h4 className="text-white text-lg font-medium text-center">REFLECTION</h4>
              </div>
              <div className="p-6">
                <h4 className="text-yellow-500 text-lg font-medium text-center">FOUNDATION</h4>
              </div>
            </div>
          </div>

          {/* Right Column - Details - 50% */}
          <div className="w-full lg:w-[50%] bg-transparent p-8">
            <h3 className="text-white text-xl font-semibold mb-4">Promise</h3>
            <p className="text-gray-300 mb-8">
              Learn the <span className="italic">why</span> and <span className="italic">what</span> of exponential growth
            </p>

            <h4 className="text-white text-lg font-semibold mb-4">What you get</h4>
            <ul className="space-y-2 mb-12">
              <li className="text-gray-300 flex items-start">
                <span className="mr-2">•</span>
                <span>Book</span>
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="mr-2">•</span>
                <span>Access to Tools & Resources</span>
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="mr-2">•</span>
                <span>60+ hours of Online Learning</span>
              </li>
            </ul>

            <div className="text-4xl font-bold text-white">₹49,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}