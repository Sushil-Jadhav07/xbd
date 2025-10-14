"use client";

import { useState, useRef } from 'react';
import { HiOutlineSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';
import { HiOutlineDocument, HiOutlinePlay, HiOutlinePhone, HiOutlineMicrophone } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import starsBg from '../../asset/testimonial_bg.jpeg';

const Slider = ({ resourcesSliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Fallback data
  const fallbackData = {
    label: "RESOURCES",
    title: "Get the Tools to",
    highlightText: "Accelerate Your Leadership Growth",
    subtitle: "We've distilled decades of growth into four simple starting points.",
    resources: [
      {
        title: "Read the Playbook That's Fueling 15X Growth Stories",
        description: "Complete Return OS framework & implementation guide",
        meta: "212 Pages",
        buttonText: "Get the Book",
        iconType: "document"
      },
      {
        title: "Master the Framework That's Redefining Market Leaders",
        description: "Step-by-step X Framework training with real-world case studies",
        meta: "6 Weeks Live + On-Demand",
        buttonText: "Start Learning",
        iconType: "play"
      },
      {
        title: "Get the Strategy That's Driving Boardroom-Level Breakthroughs",
        description: "Tailored growth roadmaps & leadership advisory for rapid scaling",
        meta: "60-Min Strategy Call",
        buttonText: "Book Your Session",
        iconType: "phone"
      },
      {
        title: "Experience the Talk That's Inspiring Industry Game Changers",
        description: "High-impact leadership sessions for transformation & alignment",
        meta: "45-90 Min Session",
        buttonText: "Book the Keynote",
        iconType: "microphone"
      }
    ]
  };

  const data = resourcesSliderData || fallbackData;

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'document':
        return HiOutlineDocument;
      case 'play':
        return HiOutlinePlay;
      case 'phone':
        return HiOutlinePhone;
      case 'microphone':
        return HiOutlineMicrophone;
      default:
        return HiOutlineDocument;
    }
  };

  const nextSlide = () => {
    if (currentSlide < data.resources.length - getVisibleSlides()) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // sm
    }
    return 4; // default for SSR
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className=" bg-white mx-[10px] py-16 md:py-20 lg:py-24  relative overflow-hidden">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-4 lg:mb-8">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            {data.label}
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {data.title} <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent">{data.highlightText}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-700 max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {/* <div className="hidden md:flex absolute -top-16 right-0 gap-2 z-10">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <HiChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= data.resources.length - getVisibleSlides()}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <HiChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div> */}

          {/* Carousel */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / getVisibleSlides())}%)`
              }}
            >
              {data.resources?.map((resource, index) => {
                const IconComponent = getIcon(resource.iconType);
                return (
                  <div 
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2"
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col">
                      {/* Image Placeholder */}
                      <div className="bg-[#dbdbdb] rounded-xl aspect-[4/3] flex items-center justify-center mb-6 relative overflow-hidden">
                        <div className="bg-gray-400 rounded-lg p-3 w-16 h-12 flex items-center justify-center">
                          <MdImage className="text-gray-500 text-xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col space-y-4">
                        {/* Title */}
                        <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                          {resource.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">
                          {resource.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <IconComponent className="w-4 h-4" />
                          {resource.meta}
                        </div>

                        {/* Button */}
                        <Link 
                          href={resource.buttonLink || '#'}
                          className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors duration-200 w-full mt-4"
                        >
                          {resource.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          {/* <div className="flex justify-center gap-2 mt-8 md:hidden">
            {Array.from({ length: data.resources.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}

          {/* Bottom Navigation Buttons - Visible on all devices */}
          {/* <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide >= data.resources.length - getVisibleSlides()}
              className="bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Slider;