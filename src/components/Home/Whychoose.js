"use client";

import { HiOutlineSparkles } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';

const Whychoose = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Label */}
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
              <HiOutlineSparkles className="text-lg" />
              WHY EXPONENTIAL DESIGN
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              If You're Still Scaling the Old Way, You're{" "}
              <span className="font-black">Already Behind</span>
            </h2>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              "It's not about doing digital faster. It's about transforming 
              fundamentally with AI-native models, self-scaling platforms, and 
              a network-driven mindset. That's exponential by design."
            </blockquote>

            {/* Author Info */}
            <div className="space-y-1">
              <div className="font-bold text-gray-900 text-lg">
                Anuj Pandey
              </div>
              <div className="text-gray-600">
                Author, Strategist & Founder of XBD
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Discover X Now
              </button>
              
              <button className="text-gray-900 font-semibold hover:text-black transition-colors duration-200 underline decoration-2 underline-offset-4">
                Get the Growth Playbook
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            <div className="bg-[#dbdbdb] rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              {/* Small image placeholder in center */}
              <div className="bg-gray-400 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                <MdImage className="text-gray-500 text-2xl" />
              </div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;