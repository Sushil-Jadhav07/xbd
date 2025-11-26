"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import JoinWaitlistForm from '../common/JoinWaitlistForm';

const IntroductoryClass = ({ introductoryClassData }) => {
  // Fallback data
  const fallbackData = {
    mainHeading: "A Free Introductory Class",
    description: "How to drive Exponential Growth — Discover the 4-step X Framework in a 12-minute preview.",
    ctaButton: { text: "Register Now", link: "#" },
    videoSection: {
      mediaType: "url",
      videoUrl: ""
    }
  };

  const data = introductoryClassData || fallbackData;
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  // Get video data
  const videoSection = data.videoSection || {};
  const videoUrl = videoSection.videoUrl;
  const uploadedVideo = videoSection.uploadedVideo?.asset?.url;
  const videoThumbnail = videoSection.videoThumbnail?.asset?.url;
  const mediaType = videoSection.mediaType || 'url';
  
  // Determine which video to use
  const finalVideoUrl = mediaType === 'upload' ? uploadedVideo : videoUrl;
  const hasVideo = finalVideoUrl && finalVideoUrl.trim() !== '';

  return (
    <div className="bg-white md:mx-[15px] mx-[5px] py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Video Player */}
          <div className="bg-white h-full rounded-lg p-8 flex items-center justify-center">
            {hasVideo ? (
              <div className="w-full h-full relative">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  poster={videoThumbnail}
                >
                  <source src={finalVideoUrl} type="video/mp4" />
                  <source src={finalVideoUrl} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          {/* Right Column - Content and CTA */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
              {data.mainHeading}
            </h2>

            {/* Description */}
            <p className="text-lg text-black leading-relaxed">
              {data.description}
            </p>

            {/* Call-to-Action Button */}
            {data.ctaButton && (
              <button
                type="button"
                onClick={() => setShowWaitlistForm(true)}
                className="bg-black text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors inline-block"
              >
                {data.ctaButton.text}
              </button>
            )}
          </div>
        </div>
      </div>
      <JoinWaitlistForm open={showWaitlistForm} onClose={() => setShowWaitlistForm(false)} />
    </div>
  );
};

export default IntroductoryClass;
