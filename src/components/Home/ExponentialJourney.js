"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MountainImage from '../../asset/mountainimg.png';

export default function ExponentialJourney() {
  const [activeTab, setActiveTab] = useState('leaders');
  const [activeStage, setActiveStage] = useState('foundation');

  // Stage data with content for each stage
  const stageData = {
    foundation: {
      stageNumber: 1,
      title: 'FOUNDATION',
      promise: 'Learn the why and what of exponential growth',
      features: ['Book', 'Access to Tools & Resources', '60+ hours of Online Learning'],
      price: '₹49,000'
    },
    reflection: {
      stageNumber: 2,
      title: 'REFLECTION',
      promise: 'Reflect on your current state and identify growth opportunities',
      features: ['Assessment Tools', 'Personal Reflection Guide', 'Growth Opportunity Analysis'],
      price: '₹75,000'
    },
    implementor: {
      stageNumber: 3,
      title: 'IMPLEMENTOR',
      promise: 'Implement exponential strategies in your organization',
      features: ['Implementation Framework', 'Strategy Templates', 'Change Management Tools'],
      price: '₹1,25,000'
    },
    practitioner: {
      stageNumber: 4,
      title: 'PRACTITIONER',
      promise: 'Master the art of exponential thinking and execution',
      features: ['Advanced Certification', 'Mentorship Program', 'Exclusive Community Access'],
      price: '₹2,00,000'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white mx-[15px] pb-12 md:pb-16">
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
              <span className="text-[#c1a35e] font-semibold">Design</span> your <span className="text-[#c1a35e] font-semibold">Exponential</span> journey now
            </h1>
            <p className="text-gray-100 text-xs md:text-base max-w-3xl mx-auto">
              Whether you're leading a transformation, preparing for AI, or scaling innovation, we have a path for you.
            </p>
          </div>

          {/* Journey Points */}
          {/* Foundation Point */}
          <div className="absolute md:left-[2%] left-[2%] md:bottom-[0%] bottom-[0%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-[#9d7035]  flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-[#c1a35e]"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Foundation</span>
          </div>

          {/* Reflector Point */}
          <div className="absolute md:left-[20%] left-[18%] md:bottom-[8%] bottom-[8%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Reflector</span>
          </div>

          {/* Implementor Point */}
          <div className="absolute md:left-[35%] left-[30%] md:top-[57%] top-[50%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Implementor</span>
          </div>

          {/* Practitioner Point */}
          <div className="absolute left-[49%] top-[37%] flex items-center space-x-3">
            <div className="relative">
              <div className="md:w-10 md:h-10  w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-800">
                <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <span className="text-white text-sm font-medium">Practitioner</span>
          </div>
        </div>

        {/* Book Button */}
        <div className="absolute md:left-[13%] left-[30%] md:bottom-[0%] bottom-[0%]">
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
                ? 'bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            For X-ponential Leaders
          </button>
          <button
            onClick={() => setActiveTab('organisations')}
            className={`w-full md:w-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium transition-colors ${
              activeTab === 'organisations'
                ? 'bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            For X-ponential Organisations
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-0 border border-gray-200 rounded-lg overflow-hidden">
          {/* Left Column - Stage Info - 30% */}
          <div className="w-full lg:w-[30%] bg-transparent p-4 md:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-700">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#9d7035] flex items-center justify-center mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c1a35e]"></div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">STAGE {stageData[activeStage].stageNumber}</p>
            <h3 className="text-[#c1a35e] text-xl md:text-2xl font-semibold">{stageData[activeStage].title}</h3>
          </div>

          {/* Middle Column - Journey Stages - 20% */}
          <div className="w-full lg:w-[20%] bg-transparent border-b lg:border-b-0 lg:border-r border-gray-700 flex items-center justify-center">
            <div className="w-full">
              <div 
                className={`p-3 md:p-6 border-b border-gray-700 cursor-pointer transition-all duration-200 hover:bg-gray-800 ${
                  activeStage === 'practitioner' ? 'bg-gray-800' : ''
                }`}
                onClick={() => setActiveStage('practitioner')}
              >
                <h4 className={`text-base md:text-lg font-medium text-center transition-colors duration-200 ${
                  activeStage === 'practitioner' ? 'text-[#c1a35e]' : 'text-white'
                }`}>PRACTITIONER</h4>
              </div>
              <div 
                className={`p-3 md:p-6 border-b border-gray-700 cursor-pointer transition-all duration-200 hover:bg-gray-800 ${
                  activeStage === 'implementor' ? 'bg-gray-800' : ''
                }`}
                onClick={() => setActiveStage('implementor')}
              >
                <h4 className={`text-base md:text-lg font-medium text-center transition-colors duration-200 ${
                  activeStage === 'implementor' ? 'text-[#c1a35e]' : 'text-white'
                }`}>IMPLEMENTOR</h4>
              </div>
              <div 
                className={`p-3 md:p-6 border-b border-gray-700 cursor-pointer transition-all duration-200 hover:bg-gray-800 ${
                  activeStage === 'reflection' ? 'bg-gray-800' : ''
                }`}
                onClick={() => setActiveStage('reflection')}
              >
                <h4 className={`text-base md:text-lg font-medium text-center transition-colors duration-200 ${
                  activeStage === 'reflection' ? 'text-[#c1a35e]' : 'text-white'
                }`}>REFLECTION</h4>
              </div>
              <div 
                className={`p-3 md:p-6 cursor-pointer transition-all duration-200 hover:bg-gray-800 ${
                  activeStage === 'foundation' ? 'bg-gray-800' : ''
                }`}
                onClick={() => setActiveStage('foundation')}
              >
                <h4 className={`text-base md:text-lg font-medium text-center transition-colors duration-200 ${
                  activeStage === 'foundation' ? 'text-[#c1a35e]' : 'text-white'
                }`}>FOUNDATION</h4>
              </div>
            </div>
          </div>

          {/* Right Column - Details - 50% */}
          <div className="w-full lg:w-[50%] bg-transparent p-4 md:p-8">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">Promise</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
              {stageData[activeStage].promise}
            </p>

            <h4 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4">What you get</h4>
            <ul className="space-y-2 mb-8 md:mb-12">
              {stageData[activeStage].features.map((feature, index) => (
                <li key={index} className="text-gray-300 text-sm md:text-base flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-2xl md:text-4xl font-bold text-white">{stageData[activeStage].price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}