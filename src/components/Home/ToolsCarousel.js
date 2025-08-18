"use client";

import { useState, useRef, useEffect } from 'react';
import { HiOutlineSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';

const ToolsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const carouselRef = useRef(null);

  const tools = [
    {
      title: "X-treme Reach",
      description: "Expand your audience faster than your competitors.",
      buttonText: "Boost My Reach"
    },
    {
      title: "X-tract Emotions",
      description: "Win customers by inspiring action, not just attention.",
      buttonText: "Amplify Influence"
    },
    {
      title: "X-tend Value",
      description: "Turn your expertise into market-leading impact.",
      buttonText: "Maximize Value"
    },
    // Additional slides for demonstration
    {
      title: "X-celerate Growth",
      description: "Scale your operations with exponential efficiency.",
      buttonText: "Scale Faster"
    },
    {
      title: "X-pand Networks",
      description: "Build connections that multiply your influence.",
      buttonText: "Grow Network"
    }
  ];

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
    if (currentSlide < tools.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    const maxSlide = tools.length - visibleSlides;
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const slideWidth = 100 / visibleSlides;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24  border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            RESOURCES
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Get the Tools to Accelerate Your <span className="font-black">Leadership Growth</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl">
            We've distilled decades of growth into four simple starting points.
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
              disabled={currentSlide >= tools.length - visibleSlides}
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
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className="h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="bg-[#dbdbdb] rounded-2xl aspect-[4/3] flex items-center justify-center mb-8 relative overflow-hidden">
                      <div className="bg-gray-400 rounded-lg p-3 w-16 h-12 flex items-center justify-center">
                        <MdImage className="text-gray-500 text-xl" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
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
                      <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 w-full mt-6">
                        {tool.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          {/* <div className="flex justify-center gap-2 mt-8 md:hidden">
            {Array.from({ length: Math.ceil(tools.length / visibleSlides) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * visibleSlides)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  Math.floor(currentSlide / visibleSlides) === index ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div> */}

          {/* Desktop Navigation Dots */}
          {/* <div className="hidden md:flex justify-center gap-2 mt-8 lg:mt-12">
            {Array.from({ length: tools.length - visibleSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-black' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;