import React from 'react';

const IndustryFocus = () => {
  return (
    <div className="bg-white mx-[15px] lg:py-16 py-8 lg:px-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 grid-flow-row lg:gap-12 gap-4">
          
          {/* Left Column */}
          <div className="space-y-8 order-2 lg:order-1 lg:col-span-3">
            
            {/* Video Player */}
            <div className='bg-gray-200 rounded-lg p-4'>
            <div className="bg-white rounded-lg h-80 relative overflow-hidden">
              <video 
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                muted
                loop
                preload="metadata"
              >
                <source src="/Video3_programme-summary-final.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Meet the Instructor Section */}
            <div>
              <h3 className="text-xl font-bold text-black mt-3 mb-3">Meet the Instructor</h3>
              <p className="text-gray-700 mb-2">
                Short 60-90s: why this curriculum matters and the outcomes you can expect.
              </p>
              <p className="text-sm text-gray-500">Trusted by leaders</p>
            </div>
            </div>
            {/* Learning Options Section */}
            <div className='bg-gray-200 rounded-lg lg:p-6 p-3'>
              <h3 className="text-xl font-bold text-black mb-4">Learning Options</h3>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-300 rounded-lg p-4 text-center">
                  <div className="lg:text-2xl text-base font-bold text-black">50K+</div>
                  <div className="lg:text-sm text-xs text-gray-600">Students</div>
                </div>
                <div className="bg-gray-300 rounded-lg p-4 text-center">
                  <div className="lg:text-2xl text-base font-bold text-black">5★</div>
                  <div className="lg:text-sm text-xs text-gray-600">Rating</div>
                </div>
                <div className="bg-gray-300 rounded-lg p-4 text-center">
                  <div className="lg:text-2xl text-base font-bold text-black">6 weeks</div>
                  <div className="lg:text-sm text-xs text-gray-600">Pilot</div>
                </div>
              </div>
            <h6 className='text-black text-base  font-semibold'>Format</h6>
              <p className="text-gray-700">
                Self-paced modules + live workshops + cohort activation lab
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 order-1 lg:order-2 lg:col-span-4">
            
            {/* Focus Label */}
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
                Instructor-Led Focus
              </span>
            </div>

            {/* Main Course Title */}
            <div className="mb-4">
              <h1 className="text-2xl md:text-5xl font-medium text-black leading-tight mb-2">
                Product • Experience • Value
              </h1>
              <h2 className="text-2xl md:text-5xl font-medium text-black">
                Practical templates and <strong> live coaching</strong>
              </h2>
            </div>

            {/* Course Overview */}
            <p className="lg:text-lg text-sm text-gray-700 leading-relaxed mb-6">
              Short, outcome-first modules. Each module includes a template you can run as a 1-week micro-pilot. Clear decision rules and rollouts to scale wins.
            </p>

            {/* Three Feature Sections */}
            <div className="space-y-4 mb-8">
              
              {/* Product Section */}
              <div className="bg-gray-200 rounded-lg lg:p-6 p-3">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Product
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-lg text-base font-semibold text-black mb-2">
                      Design — Frameworks & Tools
                    </h3>
                    <p className="lg:text-sm text-xs text-gray-700">
                      Blueprints to design products that meet needs at the point of origin and convert quickly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="bg-gray-200 rounded-lg lg:p-6 p-3">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Experience
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-lg text-base font-semibold text-black mb-2">
                      Design — Community & Sessions
                    </h3>
                    <p className="lg:text-sm text-xs text-gray-700">
                      Live cohort sessions for rapid feedback and peer learning to reduce time-to-insight.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value Section */}
              <div className="bg-gray-200 rounded-lg lg:p-6 p-3">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Value
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-lg text-base font-semibold text-black mb-2">
                      Design — Activation & Live Labs
                    </h3>
                    <p className="lg:text-sm text-xs text-gray-700">
                      Actionable activation labs that turn experiments into reusable assets and measurable revenue streams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-Action and Additional Information */}
            <div className="space-y-4">
              <div className="flex flex-row lg:gap-4 gap-2 items-center">
                <button className="bg-black text-sm lg:text-base text-white lg:px-8 px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Apply to Cohort
                </button>
                <a href="#" className="text-black text-sm lg:text-base underline hover:text-gray-700 transition-colors">
                  Download summary (PDF)
                </a>
              </div>
              
              <p className="text-sm text-gray-600">
                6-week pilot template included. Limited seats per cohort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryFocus;
