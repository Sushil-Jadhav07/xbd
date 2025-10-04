"use client";

import { useState, useRef, useEffect } from 'react';
import { HiOutlineSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';
import XtremeReach from "../../asset/x-tremereach.png"
import XtractEmotions from "../../asset/X-tract Emotions.png"
import XtendValue from "../../asset/X-tend Value.png"
import Image from 'next/image';
import Link from 'next/link';

const ToolsCarousel = ({ toolsCarouselData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const carouselRef = useRef(null);
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
        videoUrl: 'https://res.cloudinary.com/dbjtwrdxo/video/upload/v1757166895/1_tjzu6w.mp4'
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

  // Update visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setVisibleSlides(3); // lg: show 3
        } else if (window.innerWidth >= 768) {
          setVisibleSlides(2); // md: show 2
        } else {
          setVisibleSlides(1); // sm: show 1
        }
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const nextSlide = () => {
    if (currentSlide < data.tools.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    const maxSlide = data.tools.length - visibleSlides;
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const slideWidth = 100 / visibleSlides;

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

  // Safety: pause all when slide index changes
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      try { v.pause(); } catch {}
    });
  }, [currentSlide]);

  const renderMedia = (tool, index) => {
    if (tool.mediaType === 'video' && tool.videoUrl) {
      return (
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
        >
          <source src={tool.videoUrl} type="video/mp4" />
        </video>
      );
    } else if (tool.mediaType === 'image' && tool.image) {
      return (
        <Image 
          src={urlFor(tool.image).url()} 
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
    <section className="bg-white py-16 md:pt-24 md:pb-0 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            {data.label}
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {data.title} <span className="font-black">{data.highlightText}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute -top-16 right-0 gap-2 z-10">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Previous slide"
            >
              <HiChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= data.tools.length - visibleSlides}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Next slide"
            >
              <HiChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * slideWidth}%)`
              }}
            >
              {data.tools?.map((tool, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className="h-full flex flex-col">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;