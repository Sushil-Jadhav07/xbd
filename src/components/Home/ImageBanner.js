"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import FeatureImageOne from "../../asset/feature1.png"
import FeatureImageTwo from "../../asset/feature2.png"
import BgImage from "../../asset/pattern-10.png"

const ImageBannerCarousel = ({ imageBannerData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fallback data
  const fallbackData = {
    title: "Featured Banner",
    slides: [
      { id: 1, image: FeatureImageOne, alt: "Banner Image 1" },
      { id: 2, image: FeatureImageTwo, alt: "Banner Image 2" },
    ]
  };

  const data = imageBannerData || fallbackData;
  const slides = data.slides || fallbackData.slides;

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
    
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-medium {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes spin-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-medium { animation: spin-medium 5s linear infinite; }
        .animate-spin-fast { animation: spin-fast 3s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-bounce-medium { animation: bounce-medium 3s ease-in-out infinite; }
      `}</style>
      
      <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-gray-200 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-70">
        <Image 
          src={BgImage} 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Floating Moving Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-14 h-14 bg-blue-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-32 left-16 w-30 h-30 bg-green-400/25 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-20 right-12 w-50 h-50 bg-orange-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-pink-400/35 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-cyan-400/20 rounded-full animate-float-fast"></div>

        {/* Floating Squares */}
        <div className="absolute top-32 right-1/3 w-30 h-30 bg-indigo-400/25 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-60 left-1/4 w-4 h-4 bg-red-400/30 rotate-45 animate-spin-medium"></div>
        <div className="absolute top-80 right-16 w-10 h-10 bg-yellow-400/35 rotate-45 animate-spin-slow"></div>

        {/* Floating Triangles */}
        <div className="absolute top-48 left-1/2 w-30 h-30 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-blue-400/25 animate-bounce-slow"></div>
        <div className="absolute bottom-48 right-1/2 w-20 h-20 border-l-3 border-r-3 border-b-5 border-l-transparent border-r-transparent border-b-purple-400/30 animate-bounce-medium"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-6 lg:mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {data.title}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg aspect-[16/9] md:aspect-[21/9] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            {/* Slides Container */}
            <div 
              className="flex w-full transition-all duration-700 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`w-full flex-shrink-0 relative h-full transition-all duration-500 ${
                    index === currentSlide ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
                  }`}
                >
                  {/* Slide Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 z-10"></div>
                  
                  {slide.image && (
                    typeof slide.image === 'string' ? (
                      <Image 
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          index === currentSlide ? 'scale-105' : 'scale-100'
                        }`}
                        src={slide.image} 
                        alt={slide.alt || `Banner ${index + 1}`}
                        fill
                      />
                    ) : (
                      <Image 
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          index === currentSlide ? 'scale-105' : 'scale-100'
                        }`}
                        src={slide.image} 
                        alt={slide.alt || `Banner ${index + 1}`}
                      />
                    )
                  )}
                  
                  {/* Slide Number Indicator */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                    {index + 1} / {slides.length}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Bottom Left */}
          <div className="absolute bottom-6 left-6 flex gap-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full transform hover:scale-110 ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-black shadow-lg animate-pulse' 
                    : 'w-3 h-3 bg-black/40 hover:bg-black/60 hover:animate-pulse'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-30 hover:scale-110 hover:shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-30 hover:scale-110 hover:shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Touch Navigation Instructions */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-500 animate-pulse">
            Swipe left or right to navigate
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default ImageBannerCarousel;