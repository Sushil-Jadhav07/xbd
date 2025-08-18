"use client";

import { MdImage } from 'react-icons/md';

const Banner = () => {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#dbdbdb] rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              {/* Image placeholder icon */}
              <div className="bg-gray-400 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                <MdImage className="text-gray-500 text-2xl" />
              </div>
              
              {/* Optional: Add a subtle pattern or gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Achieve <span className="font-black">3x Growth</span> in Just 12 Months with the{" "}
              <span className="font-black">X Framework</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg">
              Rewire your organization to scale at speed with near-zero marginal cost.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-base hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
                Claim Your 30-Min Growth Strategy Call
              </button>
              
              <button className="text-gray-900 font-semibold text-base hover:text-black transition-colors duration-200 underline decoration-2 underline-offset-4">
                Explore the X Framework
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;