"use client";

import { useState, useEffect } from 'react';
import { MdImage } from 'react-icons/md';

const ImageBannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample slides - you can replace with actual images
  const slides = [
    { id: 1, alt: "Banner Image 1" },
    { id: 2, alt: "Banner Image 2" },
    { id: 3, alt: "Banner Image 3" },
    { id: 4, alt: "Banner Image 4" }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16">
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Featured Banner
          </h2>

          {/* Subtitle */}
          {/* <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how leading organizations transformed their growth trajectory with our proven frameworks and strategies.
          </p> */}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-300 aspect-[16/9] md:aspect-[21/9]">
            {/* Slides Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className="w-full flex-shrink-0 relative h-full"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-[#dbdbdb] flex items-center justify-center relative">
                    {/* Centered Image Icon */}
                      <MdImage className="text-gray-500 text-[4rem]" />
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Hidden on mobile, visible on larger screens) */}
            {/* <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-lg transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-lg transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}
          </div>

          {/* Pagination Dots - Bottom Left */}
          <div className="absolute bottom-6 left-6 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-black' 
                    : 'w-3 h-3 bg-black/40 hover:bg-black/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Touch Navigation Instructions */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-500">
            Swipe left or right to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageBannerCarousel;