import React from 'react';

const WhatLearn = () => {
  return (
    <div className="bg-white lg:py-16 py-8 lg:px-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-12 gap-4">
          
          {/* Left Column - Main Content Area */}
          <div className="space-y-4 lg:col-span-4">
            
            {/* "What you'll learn" Tag */}
            <div className="inline-block bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium">
              What you'll learn
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text-5xl font-medium text-black leading-tight">
              Short, applied modules that turn experiments into <strong> repeatable growth assets.</strong>
            </h1>

            {/* Description */}
            <p className="lg:text-lg text-sm text-black leading-relaxed">
              A practical course for leaders who want immediate impact — built from client results that generated measurable growth (examples included inside).
            </p>

            {/* Three Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-200 rounded-xl lg:p-4 p-3">
                <h3 className="font-bold text-black mb-2">6-week pilot plan</h3>
                <p className="text-black">Turn insight into action with a decision rule playbook</p>
              </div>
              <div className="bg-gray-200 rounded-xl lg:p-4 p-3">
                <h3 className="font-bold text-black mb-2">Templates & runbooks</h3>
                <p className="text-black">Repeatable canvases used by our clients</p>
              </div>
              <div className="bg-gray-200 rounded-xl lg:p-4 p-3">
                <h3 className="font-bold text-black mb-2">Outcomes not hours</h3>
                <p className="text-black">Focus on measurable lift and rollouts</p>
              </div>
            </div>

            {/* Modules Section */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Modules</h2>
              
              {/* Five Modules Grid */}
              <div className="space-y-4 ">
                {/* Row 1: Modules 1 & 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-200 rounded-lg lg:p-4 p-3 flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">Visualize</h3>
                      <p className="text-black">Industry 5.0 & point-of-origin design</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-200 rounded-lg lg:p-4 p-3 flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">Navigate</h3>
                      <p className="text-black">Converged forces & model mapping</p>
                    </div>
                  </div>
                </div>

                {/* Row 2: Modules 3 & 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-200 rounded-lg  lg:p-4 p-3 flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">Build</h3>
                      <p className="text-black">Pilot Canvas & experiment templates</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-200 rounded-lg lg:p-4 p-3 flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">Scale</h3>
                      <p className="text-black">Rollout runbooks & governance</p>
                    </div>
                  </div>
                </div>

                {/* Row 3: Module 5 with Request Info Button */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:space-x-4">
                  <div className="bg-gray-200 rounded-lg lg:p-6 p-3 flex items-start space-x-4 lg:flex-1">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">Destination</h3>
                      <p className="text-black">Formation of exponential orgs</p>
                    </div>
                  </div>
                  
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Request Info
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Grey Information Box */}
          <div className="bg-gray-200 rounded-lg lg:p-8 p-3 h-fit lg:col-span-3">
            
            {/* Course Rating */}
            <div className="text-center bg-gray-100 py-6 px-6 rounded-lg mb-8">
              <h3 className="text-black font-medium mb-3">Course Rating</h3>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-black">Average 5★ • 50K+ students</p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="text-center mb-8 space-y-3">
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Watch Intro
              </button>
              <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-300">
                Start 7-day trial
              </button>
            </div>

            {/* What you'll gain Section */}
            <div className="mb-6 bg-gray-100 py-6 px-6 rounded-lg">
              <h4 className="text-black font-medium mb-3">What you'll gain</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-black rounded mt-1 flex-shrink-0"></div>
                  <p className="text-black text-sm">Ready-to-run pilot canvas for first 6 weeks</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-black rounded mt-1 flex-shrink-0"></div>
                  <p className="text-black text-sm">Decision-rule checklist for rollout & governance</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-black rounded mt-1 flex-shrink-0"></div>
                  <p className="text-black text-sm">Templates that reduced client time-to-launch by 60%</p>
                </div>
              </div>
            </div>

            {/* Trusted by teams Section */}
            <div className="mb-6 text-center">
              <p className="text-black text-sm mb-1">Trusted by teams at:</p>
              <p className="text-black font-bold">Fortune 500 • Scaleups</p>
            </div>

            {/* Client results Section */}
            <div className="mb-6 text-center">
              <p className="text-black text-sm mb-1">Client results: +28% retention • +3x experiment velocity</p>
              <p className="text-black text-sm">No testimonials? Use anonymized case studies inside.</p>
            </div>

            {/* Pricing Section */}
            <div>
              <p className="text-black text-center text-sm">
                Pricing: <span className="font-bold">From $299</span> • Money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatLearn;
