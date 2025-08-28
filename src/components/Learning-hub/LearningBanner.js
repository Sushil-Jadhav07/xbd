import React from 'react';

const LearningBanner = () => {
  return (
    <div className="bg-white lg:py-16 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 lg:h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Top Label */}
            <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              Empower your Growth
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Master the Framework<br />
              and Lead the Change
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-lg text-black leading-relaxed">
              Unlock your potential with structured learning and hands-on pilots designed to drive exponential growth for your organization.
            </p>

            {/* Key Features/Benefits */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-black">Actionable playbooks and templates you can apply this week</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-black">Run a 6-week pilot with measurable KPIs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-black">Peer collaboration and live coaching</p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Enroll Now
              </button>
              <button className="px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Preview Free Class
              </button>
              <button className="px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Program Details
              </button>
            </div>

            {/* Disclaimer/Guarantee */}
            <div className="flex items-center space-x-2 pt-4">
              <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <p className="text-sm text-gray-600">
                Low-risk: Cancel within 14 days for a full refund. Teams discount available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningBanner;
