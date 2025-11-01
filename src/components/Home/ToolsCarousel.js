"use client";

import { useRef } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';
import XtremeReach from "../../asset/x-tremereach.png"
import XtractEmotions from "../../asset/X-tract Emotions.png"
import XtendValue from "../../asset/X-tend Value.png"
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ToolsCarousel = ({ toolsCarouselData }) => {
  const videoRefs = useRef([]);

  // Fallback data
  const fallbackData = {
    label: "RESOURCES",
    title: "Get the Tools to Accelerate Your",
    highlightText: "Leadership Growth",
    subtitle: "We've distilled decades of growth into four simple starting points.",
    tools: [
      {
        title: "X-treme Reach",
        description: "Expand your audience faster than your competitors.",
        buttonText: "Boost My Reach",
        mediaType: "video",
        videoUrl: 'https://res.cloudinary.com/dbjtwrdxo/video/upload/v1757166895/3_wo8ltt.mp4'
      },
      {
        title: "X-tract Emotions",
        description: "Win customers by inspiring action, not just attention.",
        buttonText: "Amplify Influence",
        mediaType: "video",
        // videoUrl: 'https://res.cloudinary.com/dbjtwrdxo/video/upload/v1757166895/1_tjzu6w.mp4'
      },
      {
        title: "X-tend Value",
        description: "Turn your expertise into market-leading impact.",
        buttonText: "Maximize Value",
        mediaType: "video",
        videoUrl: 'https://res.cloudinary.com/dbjtwrdxo/video/upload/v1757166895/2_zt4ive.mp4'
      }
    ]
  };

  const data = toolsCarouselData || fallbackData;

  const handleHoverPlay = (index) => {
    const vid = videoRefs.current[index];
    if (!vid) return;
    // Pause others
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        try { v.pause(); } catch {}
      }
    });
    try {
      vid.play();
    } catch {}
  };

  const handleHoverPause = (index) => {
    const vid = videoRefs.current[index];
    if (!vid) return;
    try {
      vid.pause();
      vid.currentTime = 0;
    } catch {}
  };

  const renderMedia = (tool, index) => {
    // Get video source - prioritize uploaded file over URL
    const videoSource = tool.videoFile?.asset?.url || tool.videoUrl;
    
    if (tool.mediaType === 'video' && videoSource) {
      return (
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
          poster={tool.thumbnail?.asset?.url}
        >
          <source src={videoSource} type="video/mp4" />
        </video>
      );
    } else if (tool.mediaType === 'image' && tool.image) {
      return (
        <Image 
          src={tool.image.asset.url} 
          alt={tool.title} 
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
      );
    } else {
      // Fallback to static images or placeholder
      const staticImages = [XtremeReach, XtractEmotions, XtendValue];
      if (staticImages[index]) {
        return <Image src={staticImages[index]} alt={tool.title} className="w-full h-full object-cover" />;
      }
      return (
        <div className="bg-gray-300 rounded-lg p-3 w-16 h-12 flex items-center justify-center">
          <MdImage className="text-gray-500 text-xl" />
        </div>
      );
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-tools .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-tools .swiper-pagination-bullet-active {
          background: linear-gradient(to bottom right, #9d7035, #c1a35e);
          width: 24px;
          border-radius: 5px;
        }
      `}} />
      <section className="dark:bg-white bg-white md:mx-[15px] mx-[5px] pt-0 md:pt-12 relative overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={starsBg}
          alt="Stars background"
          fill
          className="object-cover"
          priority
        />
      </div> */}
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-12 md:px-6  relative z-10">
        {/* Header */}
        <div className="mb-4 lg:mb-8">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            {data.label}
          </div>

          {/* Headline */}
          <h2 className="text-3xl  lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
            {data.title} <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent">{data.highlightText}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-700 max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-tools',
              prevEl: '.swiper-button-prev-tools',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-tools',
              dynamicBullets: true,
              type: 'bullets',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="pb-4"
          >
            {data.tools?.map((tool, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex flex-col px-3">
                  {/* Media */}
                  <div 
                    className="bg-[#dbdbdb] rounded-2xl aspect-[4/3] w-full flex items-center justify-center mb-8 relative overflow-hidden"
                    onMouseEnter={() => tool.mediaType === 'video' && handleHoverPlay(index)}
                    onMouseLeave={() => tool.mediaType === 'video' && handleHoverPause(index)}
                  >
                    {renderMedia(tool, index)}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20 pointer-events-none"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col space-y-4">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tool.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed flex-1">
                      "{tool.description}"
                    </p>

                    {/* Button */}
                    <Link
                      href={tool.buttonLink || '#'}
                      className="text-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 w-full mt-6"
                    >
                      {tool.buttonText}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Navigation Arrow */}
          <button 
            className="swiper-button-prev-tools absolute left-0 md:-left-[50px] top-[30%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            className="swiper-button-next-tools absolute right-0 md:right-[-50px] top-[30%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination - Absolutely Centered at Bottom */}
          <div className="swiper-pagination-tools absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ToolsCarousel;