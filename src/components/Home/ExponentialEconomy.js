"use client";

import { HiOutlineSparkles } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';

const ExponentialEconomy = ({ exponentialData }) => {
  if (!exponentialData) return null;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-8">
          <div className="flex-1">
            {/* Label */}
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              <HiOutlineSparkles className="text-lg" />
              {exponentialData.label}
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {exponentialData.title}{" "}
              <span className="font-black">{exponentialData.highlightText}</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              {exponentialData.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
            {exponentialData.primaryButton && (
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
                {exponentialData.primaryButton.text}
              </button>
            )}
            
            {exponentialData.secondaryButton && (
              <button className="text-gray-900 font-semibold hover:text-black transition-colors duration-200 underline decoration-2 underline-offset-4">
                {exponentialData.secondaryButton.text}
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Image (keeping placeholder) */}
          <div className="flex-1 w-full">
            <div className="bg-[#dbdbdb] rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              <div className="bg-gray-400 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                <MdImage className="text-gray-500 text-2xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full space-y-12">
            {/* Converging Forces */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Converging forces
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {exponentialData.convergingForces?.map((force, index) => (
                  <div key={index} className="space-y-3">
                    <div className="bg-gray-300 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                      <HiOutlineSparkles className="text-gray-600 text-lg" />
                    </div>
                    <h4 className="font-bold text-gray-900">
                      {force.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {force.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diverging Forces */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Diverging Forces
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {exponentialData.divergingForces?.map((force, index) => (
                  <div key={index} className="space-y-3">
                    <div className="bg-gray-300 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                      <HiOutlineSparkles className="text-gray-600 text-lg" />
                    </div>
                    <h4 className="font-bold text-gray-900">
                      {force.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {force.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExponentialEconomy;