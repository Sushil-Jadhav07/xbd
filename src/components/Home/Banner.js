"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LeadFormModal from '../common/LeadFormModal';
import HomeMainBanner from "../../asset/homeBanner.png"; // Keep your existing image

const Banner = ({ bannerData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!bannerData) return null;

  return (
    <>
    <section className="!bg-black md:mx-[15px] mx-[5px] py-12 md:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image (keeping your existing image) */}
          <div className="order-1">
            <div className={`flex items-center justify-center rounded-4xl relative overflow-hidden transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              <Image src={HomeMainBanner} alt="Home Main Banner" />
              <div className="absolute inset-0 from-gray-200 to-gray-400 opacity-20"></div>
            </div>
          </div>

          {/* Right side - Content (now dynamic) */}
          <div className="order-2 space-y-6">
            {/* Headline */}
            <h1 className={`text-3xl md:text-4xl font-bold text-white leading-tight transition-all duration-1000 ease-out delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              {bannerData.title}{" "}
              <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent inline">
                {bannerData.highlightText}
              </span>{" "}
              {bannerData.titleafter}
            </h1>

            {/* Subheadline */}
            <p className={`text-sm md:text-base text-white leading-relaxed max-w-lg transition-all duration-1000 ease-out delay-400 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              {bannerData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 pt-4 transition-all duration-1000 ease-out delay-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              {bannerData.primaryButton && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black text-white px-5 lg:px-8 py-4 rounded-lg font-semibold text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
                >
                  {bannerData.primaryButton.text}
                </button>
              )}
              
              {bannerData.secondaryButton && (
                <Link
                  href={bannerData.secondaryButton.link || '#'}
                  className="text-white font-semibold text-base hover:text-white transition-colors duration-200 underline decoration-2 underline-offset-4"
                >
                  {bannerData.secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    <LeadFormModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Book a Strategy Call"
    />
    </>
  );
};

export default Banner;