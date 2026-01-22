"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LeadFormModal from '../common/LeadFormModal';
import ShopModal from '../common/ShopModal';
import { urlFor } from '@/lib/sanity';
import HomeMainBanner from "../../asset/homeBanner.png";
import FeatureImageOne from "../../asset/feature1.png";
import FeatureImageTwo from "../../asset/feature2.png";
import ExponentialGrowth from "../../asset/exponential-growth2.png";
import WhyHyperGrowth from "../../asset/whyhypergrowth.png";

const Slideshow = ({ slideshowData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [isInIndia, setIsInIndia] = useState(false);
  const [isCheckingLocation, setIsCheckingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // Fallback slides data - 5 slides with different images
  const fallbackSlides = [
    {
      id: 1,
      image: HomeMainBanner,
      alt: "Transform Your Business",
      title: "Transform Your Business",
      highlightText: "With Exponential Growth",
      titleafter: "Strategies",
      subtitle: "Discover how leading enterprises achieve 15X growth through intelligent design and strategic frameworks.",
      primaryButton: { text: "Assess your Readiness", link: "https://assessment-xbd.replit.app/" },
      secondaryButton: { text: "Learn More", link: "/" }
    },
    {
      id: 2,
      image: FeatureImageOne,
      alt: "Design Intelligent Products",
      title: "Design Intelligent Products",
      highlightText: "That Evolve",
      titleafter: "With Your Customers",
      subtitle: "Build products that sense, learn, and adapt before your customers even articulate their needs.",
      primaryButton: { text: "Explore Framework" },
      secondaryButton: { text: "View Case Studies", link: "/case-studies" }
    },
    {
      id: 3,
      image: FeatureImageTwo,
      alt: "The Playbook",
      title: "Create Adaptive Experiences",
      highlightText: "The Playbook",
      titleafter: "for Leaders Designing the Next Decade",
      subtitle: "Exponential by Design distills how today's most valuable enterprises engineer scale, influence, and adaptability - before competitors react.",
      primaryButton: { text: "Order Now to start your journey" },
      secondaryButton: { text: "Order Now to start your journey", link: "/book" }
    },
    {
      id: 4,
      image: ExponentialGrowth,
      alt: "Build Value Networks",
      title: "Build Value Networks",
      highlightText: "That Multiply",
      titleafter: "Exponentially",
      subtitle: "Co-create value through participatory ecosystems where every participant amplifies collective returns.",
      primaryButton: { text: "Join Network" },
      secondaryButton: { text: "Read Guide", link: "/guide" }
    },
    {
      id: 5,
      image: WhyHyperGrowth,
      alt: "Scale Without Limits",
      title: "Scale Without Limits",
      highlightText: "Through Exponential",
      titleafter: "Organizations",
      subtitle: "Design organizations that self-scale and self-evolve with AI, data, and network-driven growth.",
      primaryButton: { text: "Transform Now" },
      secondaryButton: { text: "Book Strategy Call", link: "/strategy" }
    }
  ];

  // Helper function to get image URL from Sanity or fallback
  const getImageUrl = (imageData) => {
    if (!imageData) return HomeMainBanner;
    if (typeof imageData === 'string') return imageData;
    if (imageData.asset?.url) return imageData.asset.url;
    if (imageData.asset) {
      try {
        return urlFor(imageData).width(1200).height(800).url();
      } catch (e) {
        console.error('Error processing image:', e);
        return HomeMainBanner;
      }
    }
    return imageData;
  };

  // Process Sanity data or use fallback
  const slides = slideshowData?.slides && slideshowData.slides.length > 0
    ? slideshowData.slides.map((slide, index) => ({
        id: index + 1,
        index: index,
        image: getImageUrl(slide.image),
        alt: slide.alt || `Slide ${index + 1}`,
        title: slide.title || '',
        highlightText: slide.highlightText || '',
        titleafter: slide.titleafter || '',
        subtitle: slide.subtitle || '',
        primaryButton: slide.primaryButton || { text: 'Get Started' },
        secondaryButton: slide.secondaryButton || { text: 'Learn More', link: '#' }
      }))
    : fallbackSlides.map((slide, index) => ({
        ...slide,
        index: index
      }));

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Fallback: Get country from IP address
  const getCountryFromIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return data.country_code || null;
    } catch (error) {
      console.error('Error getting country from IP:', error);
      return null;
    }
  };

  // Function to get country from coordinates using reverse geocoding
  const getCountryFromCoordinates = async (latitude, longitude) => {
    try {
      // Using OpenStreetMap Nominatim API (free, no API key required)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            'User-Agent': 'XBD Book Store' // Required by Nominatim
          }
        }
      );
      const geoData = await response.json();
      return geoData.address?.country_code?.toUpperCase() || null;
    } catch (error) {
      console.error('Error getting country from coordinates:', error);
      // Fallback to IP-based geolocation
      return await getCountryFromIP();
    }
  };

  // Check if location services are available and enabled
  const checkLocationPermission = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      return Promise.reject(new Error('Geolocation is not supported by your browser'));
    }
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        reject,
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 300000 // Cache for 5 minutes
        }
      );
    });
  };

  // Main function to check location and determine if user is in India
  const handlePreOrderClick = async () => {
    setIsCheckingLocation(true);
    setLocationError(null);

    try {
      // First, try to get precise location
      const position = await checkLocationPermission();
      const { latitude, longitude } = position.coords;
      const countryCode = await getCountryFromCoordinates(latitude, longitude);
      
      if (countryCode === 'IN') {
        setIsInIndia(true);
      } else {
        setIsInIndia(false);
      }
      setIsShopModalOpen(true);
    } catch (error) {
      console.error('Location error:', error);
      
      // If user denied location or error occurred, try IP-based detection
      try {
        const countryCode = await getCountryFromIP();
        if (countryCode === 'IN') {
          setIsInIndia(true);
        } else {
          setIsInIndia(false);
        }
        setIsShopModalOpen(true);
      } catch (ipError) {
        console.error('IP geolocation error:', ipError);
        setLocationError('Unable to determine your location. Showing default options.');
        // Default to showing both options if we can't determine location
        setIsInIndia(true);
        setIsShopModalOpen(true);
      }
    } finally {
      setIsCheckingLocation(false);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .slide-image-enter {
          animation: zoomIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-title-enter {
          animation: fadeInUp 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
        }
        .slide-subtitle-enter {
          animation: fadeInUp 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
        }
        .slide-buttons-enter {
          animation: fadeInUp 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
        }
      `}</style>
      <section className="!bg-black md:mx-[15px] mx-[5px] py-8 md:py-12 relative md:h-[46rem] h-[50rem] overflow-hidden">
        <div className="max-w-8xl mx-auto py-6 md:py-12 px-6 lg:px-8 relative">
          {/* Slideshow Container */}
          <div className="relative">
            {/* Slide Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[400px] md:min-h-[500px]">
              {/* Left side - Image */}
              <div className="order-1 lg:order-1">
                <div className="flex items-center justify-center relative overflow-hidden">
                  <div 
                    key={`image-${currentSlide}`}
                    className="slide-image-enter w-full"
                  >
                    <Image 
                      src={currentSlideData.image} 
                      alt={currentSlideData.alt || `Slide ${currentSlide + 1} Banner`}
                      className="w-full h-auto"
                      width={1200}
                      height={800}
                      priority={currentSlide === 0}
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="order-2 lg:order-2 space-y-4 md:space-y-6">
                {/* Headline */}
                <h1 
                  key={`title-${currentSlide}`}
                  className="slide-title-enter text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
                >
                  {currentSlideData.title}{" "}
                  <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent inline">
                    {currentSlideData.highlightText}
                  </span>{" "}
                  {currentSlideData.titleafter}
                </h1>

                {/* Subheadline */}
                <p 
                  key={`subtitle-${currentSlide}`}
                  className="slide-subtitle-enter text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-lg"
                >
                  {currentSlideData.subtitle}
                </p>

                {/* CTA Buttons */}
                <div 
                  key={`buttons-${currentSlide}`}
                  className="slide-buttons-enter flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2 md:pt-4"
                >
                  {currentSlideData.primaryButton && (
                    // Priority 1: If link exists (from Sanity or fallback), always use it
                    currentSlideData.primaryButton.link ? (
                      currentSlideData.primaryButton.link.startsWith('http://') || currentSlideData.primaryButton.link.startsWith('https://') ? (
                        <a
                          href={currentSlideData.primaryButton.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-4 sm:px-5 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap w-full sm:w-auto inline-block text-center"
                        >
                          {currentSlideData.primaryButton.text}
                        </a>
                      ) : (
                        <Link
                          href={currentSlideData.primaryButton.link}
                          className="bg-black text-white px-4 sm:px-5 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap w-full sm:w-auto inline-block text-center"
                        >
                          {currentSlideData.primaryButton.text}
                        </Link>
                      )
                    ) : (currentSlideData.id === 2 || currentSlideData.index === 1) ? (
                      // Priority 2: Slide id:2 without link - Scroll to ExponentialEconomy section
                      <button
                        id="explore-framework-btn"
                        type="button"
                        onClick={() => {
                          const element = document.getElementById('exponential-economy');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="bg-black text-white px-4 sm:px-5 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap w-full sm:w-auto"
                      >
                        {currentSlideData.primaryButton.text}
                      </button>
                    ) : (currentSlideData.id === 1 || currentSlideData.index === 0) ? (
                      // Priority 3: Slide id:1 without link - Use fallback link
                      <a
                        href="https://assessment-xbd.replit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-4 sm:px-5 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap w-full sm:w-auto inline-block text-center"
                      >
                        {currentSlideData.primaryButton.text}
                      </a>
                    ) : currentSlideData.primaryButton.text === 'Pre - Order to start your journey' ? (
                      // Priority 4: Order button - Check location and open shop modal
                      <button
                        type="button"
                        onClick={handlePreOrderClick}
                        disabled={isCheckingLocation}
                        className="bg-black text-white px-4 sm:px-5 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isCheckingLocation ? 'Checking location...' : currentSlideData.primaryButton.text}
                      </button>
                    ) : (
                      // Priority 5: Other slides without link - Open modal
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="bg-black text-white px-4 sm:px-5 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap w-full sm:w-auto"
                      >
                        {currentSlideData.primaryButton.text}
                      </button>
                    )
                  )}
                  
                  {/* {currentSlideData.secondaryButton && (
                    <Link
                      href={currentSlideData.secondaryButton.link || '#'}
                      className="text-white font-semibold text-sm sm:text-base hover:text-[#c1a35e] transition-colors duration-200 underline decoration-2 underline-offset-4 text-center sm:text-left w-full sm:w-auto"
                    >
                      {currentSlideData.secondaryButton.text}
                    </Link>
                  )} */}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 md:top-1/2 top-1/4 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c1a35e] shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 md:top-1/2 top-1/4 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c1a35e] shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators/Dots */}
            {/* <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c1a35e] ${
                    index === currentSlide
                      ? 'w-8 sm:w-10 h-2 sm:h-3 bg-[#c1a35e]'
                      : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </section>
      <LeadFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Strategy Call"
      />
      <ShopModal
        open={isShopModalOpen}
        onClose={() => {
          setIsShopModalOpen(false);
          setLocationError(null);
        }}
        isInIndia={isInIndia}
      />
      {locationError && (
        <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm">
          <p className="text-sm">{locationError}</p>
        </div>
      )}
    </>
  );
};

export default Slideshow;

