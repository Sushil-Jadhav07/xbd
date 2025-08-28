import React from 'react';

const IntroductoryClass = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Video Player Placeholder */}
          <div className="bg-white h-full rounded-lg p-8 flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
              <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Right Column - Content and CTA */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
              A Free Introductory Class
            </h2>

            {/* Description */}
            <p className="text-lg text-black leading-relaxed">
              How to drive exponential growth — Discover the 4-step X Framework in a 12-minute preview.
            </p>

            {/* Call-to-Action Button */}
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductoryClass;
