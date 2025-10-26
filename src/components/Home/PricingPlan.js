"use client";

import { useState, useEffect } from 'react';
import { HiOutlineSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdImage, MdSecurity, MdFlashOn, MdVerifiedUser } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import BgImage from "../../asset/pattern-9.png";

const PricingPlan = ({ pricingPlanData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Fallback data
  const fallbackData = {
    label: "PRICING PLAN",
    title: "Start Your Exponential",
    highlightText: "Growth Journey Today",
    subtitle: "Choose your path Practitioner, Implementor, or Reflector and unlock proven tools for transformation.",
    plans: [
      {
        title: "Practitioner",
        buttonText: "Boost My Reach"
      },
      {
        title: "Implementor", 
        buttonText: "Amplify Influence"
      },
      {
        title: "Reflector",
        buttonText: "Maximize Value"
      }
    ],
    mainCtaButton: { text: "Start Foundation Stage – ₹49,000" },
    ctaTitle: "Get instant access & start learning today",
    ctaSubtext: "Trusted by 1,000+ leaders worldwide",
    features: [
      { text: "Secure Payment", iconType: "security" },
      { text: "Instant Access", iconType: "flash" },
      { text: "Expert-Led", iconType: "verified" }
    ]
  };

  const data = pricingPlanData || fallbackData;

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'security':
        return MdSecurity;
      case 'flash':
        return MdFlashOn;
      case 'verified':
        return MdVerifiedUser;
      default:
        return MdSecurity;
    }
  };

  // Update visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setVisibleSlides(3);
        } else if (window.innerWidth >= 768) {
          setVisibleSlides(2);
        } else {
          setVisibleSlides(1);
        }
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const nextSlide = () => {
    if (currentSlide < data.plans.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    const maxSlide = data.plans.length - visibleSlides;
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const slideWidth = 100 / visibleSlides;

  return (
    <section className="bg-gray-100 py-16 md:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-100">
        <Image 
          src={BgImage} 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-0">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            {data.label}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {data.title} <span className="font-black">{data.highlightText}</span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* White Container */}
        <div className="bg-white rounded-3xl p-8 md:p-10">
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="hidden md:flex absolute -top-20 right-0 gap-2 z-10">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 rounded-lg border bg-white border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                aria-label="Previous slide"
              >
                <HiChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= data.plans.length - visibleSlides}
                className="p-2 rounded-lg border bg-white border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                aria-label="Next slide"
              >
                <HiChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * slideWidth}%)`
                }}
              >
                {data.plans?.map((plan, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${slideWidth}%` }}
                  >
                    <div className="h-full flex flex-col">
                      {/* Image */}
                      <div className="bg-[#dbdbdb] rounded-2xl aspect-[4/3] flex items-center justify-center mb-8 relative overflow-hidden">
                        {plan.image ? (
                          <Image 
                            src={plan.image}
                            alt={plan.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="bg-gray-400 rounded-lg p-3 w-16 h-12 flex items-center justify-center">
                            <MdImage className="text-gray-500 text-xl" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col space-y-6">
                        <h3 className="text-xl font-bold text-gray-900 text-center">
                          {plan.title}
                        </h3>

                        <Link
                          href={plan.buttonLink || '#'}
                          className="block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 w-full text-center"
                        >
                          {plan.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
              {Array.from({ length: Math.ceil(data.plans.length / visibleSlides) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * visibleSlides)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    Math.floor(currentSlide / visibleSlides) === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center space-y-6 md:pt-12 pt-6">
          {data.mainCtaButton && (
            <Link
              href={data.mainCtaButton.link || '#'}
              className="inline-block bg-black text-white px-12 py-4 rounded-lg font-semibold text-base hover:bg-gray-800 transition-colors duration-200 text-center"
            >
              {data.mainCtaButton.text}
            </Link>
          )}

          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-900">
              {data.ctaTitle}
            </p>
            <p className="text-gray-600">
              {data.ctaSubtext}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-6">
            {data.features?.map((feature, index) => {
              const IconComponent = getIcon(feature.iconType);
              return (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <IconComponent className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;