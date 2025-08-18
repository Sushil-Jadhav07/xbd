"use client";

import { useState, useEffect } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';

const QuoteCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample slides for the carousel
  const slides = [
    { id: 1, alt: "Growth Image 1" },
    { id: 2, alt: "Growth Image 2" },
    { id: 3, alt: "Growth Image 3" },
    { id: 4, alt: "Growth Image 4" }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24  border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Label */}
          {/* <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            TRANSFORMATION
          </div> */}

          {/* Title */}
          {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Ready to Transform Your <span className="font-black">Business Growth?</span>
          </h2> */}

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join thousands of leaders who've accelerated their growth with our proven framework.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-[#dbdbdb] rounded-3xl relative overflow-hidden">
          {/* Large Quote Mark */}
          <div className="absolute top-8 left-8 text-gray-400 text-8xl md:text-9xl font-serif leading-none opacity-50 z-10">
            ❝
          </div>

          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] md:min-h-[600px]">
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20">
              <div className="space-y-8">
                {/* Quote Text */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  The Only Thing That's Changed In The World Is Everything
                </h3>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                    Start My Growth
                  </button>
                  
                  <button className="text-gray-900 font-semibold hover:text-black transition-colors duration-200 underline decoration-2 underline-offset-4">
                    See How It Works
                  </button>
                </div>
              </div>
            </div>

            {/* Right Carousel - Edge to Edge */}
            <div className="flex-1 relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden h-full bg-[#dbdbdb] lg:rounded-r-3xl">
                {/* Slides */}
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
                          <MdImage className="text-gray-500 text-5xl" />
                        
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 opacity-30"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows (Hidden on mobile) */}
                <button
                  onClick={prevSlide}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-lg transition-colors duration-200 z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-lg transition-colors duration-200 z-10"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Pagination Dots - Positioned at bottom of image */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide 
                          ? 'w-8 h-3 bg-white' 
                          : 'w-3 h-3 bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;