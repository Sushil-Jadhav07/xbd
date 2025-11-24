"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import JoinWaitlistForm from '../common/JoinWaitlistForm';

const WhatLearn = ({ whatLearnData }) => {
  // Fallback data
  const fallbackData = {
    sectionTag: "What you'll learn",
    mainHeading: "Short, applied modules that turn experiments into repeatable growth assets.",
    description: "A practical course for leaders who want immediate impact — built from client results that generated measurable growth (examples included inside).",
    featureHighlights: [
      {
        title: "6-week pilot plan",
        description: "Turn insight into action with a decision rule playbook"
      },
      {
        title: "Templates & runbooks",
        description: "Repeatable canvases used by our clients"
      },
      {
        title: "Outcomes not hours",
        description: "Focus on measurable lift and rollouts"
      }
    ],
    modules: [
      {
        number: 1,
        title: "Visualize",
        description: "Industry 5.0 & point-of-origin design"
      },
      {
        number: 2,
        title: "Navigate",
        description: "Converged forces & model mapping"
      },
      {
        number: 3,
        title: "Build",
        description: "Pilot Canvas & experiment templates"
      },
      {
        number: 4,
        title: "Scale",
        description: "Rollout runbooks & governance"
      },
      {
        number: 5,
        title: "Destination",
        description: "Formation of exponential orgs"
      }
    ],
    requestInfoButton: { text: "Request Info", link: "#" },
    sidebarContent: {
      courseRating: {
        title: "Course Rating",
        rating: "5★",
        students: "50K+ students"
      },
      primaryButton: { text: "Join The pre-launch access", link: "#" },
      secondaryButton: { text: "Preview", link: "#" },
      whatYouGain: {
        title: "What you'll gain",
        benefits: [
          "Ready-to-run pilot canvas for first 6 weeks",
          "Decision-rule checklist for rollout & governance",
          "Templates that reduced client time-to-launch by 60%"
        ]
      },
      trustedBy: {
        label: "Trusted by teams at:",
        companies: "Fortune 500 • Scaleups"
      },
      clientResults: {
        results: "Client results: +28% retention • +3x experiment velocity",
        note: "No testimonials? Use anonymized case studies inside."
      },
      pricing: {
        price: "Pricing: From $299 • Money-back guarantee"
      }
    }
  };

  // Merge fallback data with fetched data, ensuring buttons are always available
  const data = whatLearnData ? {
    ...fallbackData,
    ...whatLearnData,
    sidebarContent: {
      ...fallbackData.sidebarContent,
      ...whatLearnData.sidebarContent,
      primaryButton: whatLearnData.sidebarContent?.primaryButton || fallbackData.sidebarContent.primaryButton,
      secondaryButton: whatLearnData.sidebarContent?.secondaryButton || fallbackData.sidebarContent.secondaryButton
    }
  } : fallbackData;

  const [openWaitlist, setOpenWaitlist] = useState(false);

  return (
    <div className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] lg:py-16 py-8 lg:px-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-12 gap-4">
          
          {/* Left Column - Main Content Area */}
          <div className="space-y-4 lg:col-span-4">
            
            {/* Section Tag */}
            <div className="inline-block bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium">
              {data.sectionTag}
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text-5xl font-medium text-black leading-tight">
              {data.mainHeading}
            </h1>

            {/* Description */}
            <p className="lg:text-lg text-sm text-black leading-relaxed">
              {data.description}
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.featureHighlights?.map((feature, index) => (
                <div key={index} className="bg-gray-200 rounded-xl lg:p-4 p-3">
                  <h1 className="font-bold text-black mb-2">{feature.title}</h1>
                  <p className="text-black">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Modules Section */}
            <div>
              <h1 className="text-2xl font-bold text-black mt-12">Modules</h1>
              
              {/* Modules Grid */}
              <div className="flex flex-col gap-4 mt-4 md:flex-row md:flex-nowrap md:gap-4 md:overflow-x-auto md:pb-4 lg:overflow-visible lg:pb-0">
                {data.modules?.map((module, index) => (
                  <div
                    key={index}
                    className="group bg-white/95 border border-[#dedbd6] rounded-2xl px-4 py-5 lg:px-6 lg:py-6 flex flex-col items-center text-center gap-4 shadow-[0_10px_30px_rgba(26,24,22,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(26,24,22,0.12)] w-full md:flex-1 md:min-w-[220px] lg:min-w-[190px]"
                  >
                    <div className="w-12 h-12 bg-gray-200  rounded-full flex items-center justify-center">
                      <span className="text-black font-semibold text-base">{module.number}</span>
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-black font-semibold text-lg">{module.title}</h1>
                      <p className="text-black text-sm leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                ))}

                {data.requestInfoButton && (
                  <button
                    type="button"
                    onClick={() => setOpenWaitlist(true)}
                    className="text-lg md:text-xl font-semibold text-white text-center flex items-center justify-center px-6 py-4 rounded-2xl transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-[#a27538] to-[#caa85d] hover:from-[#b88446] hover:to-[#d9ba69] shadow-[0_12px_35px_rgba(162,117,56,0.35)] hover:-translate-y-1 w-full md:flex-1 md:min-w-[240px] lg:min-w-[200px]"
                  >
                    {data.requestInfoButton.text}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Grey Information Box */}
          <div className="bg-gray-200 rounded-lg lg:p-8 p-3 h-fit lg:col-span-3">
            
            {/* Course Rating */}
            {/* {data.sidebarContent?.courseRating && (
              <div className="text-center bg-gray-100 py-6 px-6 rounded-lg mb-8">
                <h1 className="text-black font-medium mb-3">{data.sidebarContent.courseRating.title}</h1>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-black">Average {data.sidebarContent.courseRating.rating} • {data.sidebarContent.courseRating.students}</p>
              </div>
            )} */}

           

            {/* What you'll gain Section */}
            {data.sidebarContent?.whatYouGain && (
              <div className="mb-12 bg-gray-100 py-7 px-7 rounded-lg">
                <h4 className="text-black md:text-2xl text-xl font-semibold mb-4">{data.sidebarContent.whatYouGain.title}</h4>
                <div className="space-y-3">
                  {data.sidebarContent.whatYouGain.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2.5 h-2.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-black text-base leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call-to-Action Button(s) */}
            <div className="text-center  my-8 space-y-3">
              {data.sidebarContent?.primaryButton ? (
                <button
                  type="button"
                  onClick={() => setOpenWaitlist(true)}
                  className="w-full py-3 px-6 rounded-lg font-medium transition-colors bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-white hover:from-yellow-500 hover:to-yellow-700"
                >
                  {data.sidebarContent.primaryButton.text}
                </button>
              ) : (
                data.sidebarContent?.secondaryButton && (
                  <Link
                    href={data.sidebarContent.secondaryButton.link || '#'}
                    className="w-full py-3 px-6 rounded-lg font-medium transition-colors bg-white text-black hover:bg-gray-50 border border-gray-300"
                  >
                    {data.sidebarContent.secondaryButton.text}
                  </Link>
                )
              )}
            </div>

            <JoinWaitlistForm open={openWaitlist} onClose={() => setOpenWaitlist(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatLearn;
