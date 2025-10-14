"use client";

import { HiOutlineSparkles } from 'react-icons/hi';
import { useState } from 'react';
import WhyHyperGrowth from "../../asset/whyhypergrowth.png"
import BgImage from "../../asset/pattern-2.png"
import Image from 'next/image';
import LeadFormModal from '../common/LeadFormModal';

const WhyExponentialNow = ({ whyExponentialNowData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Fallback data
  const fallbackData = {
    label: "WHY EXPONENTIAL NOW",
    title: "Why Hyper-Growth Is",
    highlightText: "No Longer Optional",
    subtitle: "Technology, networks, and AI are converging at a speed the world's never seen making exponential growth the new baseline, not the exception.",
    stats: [
      {
        number: "15X",
        title: "Expected Growth",
        description: "Markets won't wait for you competitors are already compounding returns."
      },
      {
        number: "3.5X",
        title: "Faster",
        description: "Every 6 months, the gap widens and it's getting harder to catch up."
      },
      {
        number: "2X",
        title: "Increase in AI Data",
        description: "The intelligence race is doubling in speed annually."
      },
      {
        number: "70%",
        title: "Drop in AI Costs",
        description: "Exponential capabilities are now affordable for your rivals."
      },
      {
        number: "280X",
        title: "Decline in AI Inference Cost",
        description: "What was impossible 18 months ago is now table stakes."
      }
    ],
    ctaButton: { text: "Start Scaling Today" }
  };

  const data = whyExponentialNowData || fallbackData;

  return (
    <>
    <section className="bg-[#f5f1eb] mx-[15px] py-16 md:py-20 lg:py-24  relative overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 opacity-100">
        <Image 
          src={BgImage} 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            {data.label}
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {data.title} <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent">{data.highlightText}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center space-y-12">
          {/* Center Image */}
          <div className="w-full max-w-2xl">
            <div className="flex items-center justify-center relative overflow-hidden">
              <Image src={WhyHyperGrowth} alt="Why Hyper Growth" className="object-contain" />
            </div>
          </div>

          {/* Stats in One Line */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {data.stats?.map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  {/* Number */}
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent ">
                    {stat.number}
                  </div>
                  
                  {/* Title */}
                  <div className="text-sm md:text-base font-bold bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent">
                    {stat.title}
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA Button - centered below stats */}
            {data.ctaButton && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  {data.ctaButton.text}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <LeadFormModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Start Scaling Today"
      onSubmit={async (values) => {
        // TODO: integrate with your API
        console.log('Submitting form:', values);
      }}
    />
    </>
  );
};

export default WhyExponentialNow;