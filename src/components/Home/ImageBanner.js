"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import FeatureImageOne from "../../asset/feature1.png"
import FeatureImageTwo from "../../asset/feature2.png"

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
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-6 lg:mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {data.title}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg aspect-[16/9] md:aspect-[21/9]">
            {/* Slides Container */}
            <div 
              className="flex w-full transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 relative h-full"
                >
                  {slide.image && (
                    typeof slide.image === 'string' ? (
                      <Image 
                        className='w-full h-full object-cover' 
                        src={slide.image} 
                        alt={slide.alt || `Banner ${index + 1}`}
                        fill
                      />
                    ) : (
                      <Image 
                        className='w-full h-full object-cover' 
                        src={slide.image} 
                        alt={slide.alt || `Banner ${index + 1}`}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
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