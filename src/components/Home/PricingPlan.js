"use client";

import { useState, useEffect } from 'react';
import { HiOutlineSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdImage, MdSecurity, MdFlashOn, MdVerifiedUser } from 'react-icons/md';

const PricingPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const plans = [
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
  ];

  const features = [
    {
      icon: MdSecurity,
      text: "Secure Payment"
    },
    {
      icon: MdFlashOn,
      text: "Instant Access"
    },
    {
      icon: MdVerifiedUser,
      text: "Expert-Led"
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
    if (currentSlide < plans.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    const maxSlide = plans.length - visibleSlides;
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const slideWidth = 100 / visibleSlides;

  return (
    <section className="bg-[#dbdbdb] py-16 md:py-20  border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            PRICING PLAN
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Start Your Exponential <span className="font-black">Growth Journey Today</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Choose your path Practitioner, Implementor, or Reflector and unlock proven tools for transformation.
          </p>
        </div>

        {/* White Container */}
        <div className="bg-white rounded-3xl p-8 md:p-10">
          {/* Carousel Container */}
          <div className="relative ">
            {/* Navigation Buttons */}
            <div className="hidden md:flex absolute -top-22 right-0 gap-2 z-10">
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
                disabled={currentSlide >= plans.length - visibleSlides}
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
                {plans.map((plan, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-4"
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
                      <div className="flex-1 flex flex-col space-y-6">
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 text-center">
                          {plan.title}
                        </h3>

                        {/* Button */}
                        <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 w-full">
                          {plan.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
              {Array.from({ length: Math.ceil(plans.length / visibleSlides) }).map((_, index) => (
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
            {/* Main CTA Button */}
            <button className="bg-black text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200">
              Start Foundation Stage – ₹49,000
            </button>

            {/* CTA Text */}
            <div className="space-y-2">
              <p className="text-xl font-semibold text-gray-900">
                Get instant access & start learning today
              </p>
              <p className="text-gray-600">
                Trusted by 1,000+ leaders worldwide
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <feature.icon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default PricingPlan;