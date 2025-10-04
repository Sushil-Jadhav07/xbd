'use client'
import { useState } from 'react';

export default function XponentialCommunity() {
  const [heroImage, setHeroImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-full bg-black text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-8xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content Box */}
          <div className="relative">
            {/* Golden border frame */}
            <div className="border-2 border-yellow-600 rounded-sm shadow-2xl overflow-hidden">
              <div className="relative bg-black aspect-[4/3] flex flex-col items-center justify-between p-6 sm:p-8 lg:p-12">
                {/* Top instruction text */}
                <div className="text-left w-full">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    <span className="font-semibold">A strong hero image or looping video</span> with black-and-gold premium aesthetic. Show a boardroom of leaders, digital transformation elements (AI, network effects).
                  </p>
                </div>

                {/* Main Content - Centered */}
                <div className="text-center flex-1 flex flex-col items-center justify-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-3 sm:mb-4 flex items-center justify-center flex-wrap">
                    <span className="text-white italic">Become</span>
                    <span className="text-yellow-500 mx-2 sm:mx-3 not-italic">X</span>
                    <span className="text-white">-ponential</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                    Join the Community
                  </p>
                </div>

                {/* Bottom Navigation */}
                <div className="w-full">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base text-gray-300">
                    <span className="hover:text-yellow-500 transition-colors cursor-pointer">Insights</span>
                    <span className="text-gray-600">|</span>
                    <span className="hover:text-yellow-500 transition-colors cursor-pointer">Peer Collaboration</span>
                    <span className="text-gray-600">|</span>
                    <span className="hover:text-yellow-500 transition-colors cursor-pointer">Activation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="italic">Join the community of 'X'-PONENTIALS that challenge the norms and strive for exponentiality.</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed italic">
                A private community for CXOs, transformation leaders, and innovators designing the future of growth
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                Join the revolution
              </button>
              <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}