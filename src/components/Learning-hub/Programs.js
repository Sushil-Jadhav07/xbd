import React from 'react';

const Programs = () => {
  return (
    <div className="bg-[#f5f1eb] mx-[15px] lg:py-16 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-medium text-black  lg:mb-16 mb-8">
          Programs &<strong> Offerings</strong> 
        </h2>

        {/* Three Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4">
          
          {/* Card 1: Self-Paced Exponential by Design Mastery */}
          <div className="bg-gray-100 rounded-lg lg:p-6 p-3 relative">
            {/* Popular Tag */}
            <div className='grid grid-cols-3 grid-flow-row  lg:gap-4 gap-2'>
            <div className="lg:mb-4 mb-2 col-span-2">
              <div className="text-sm text-gray-600 mb-1">Self-Paced</div>
              <h3 className="lg:text-xl text-lg font-bold text-black">Exponential by Design Mastery</h3>
            </div>
            <div className="col-span-1 px-3 py-2 lg:h-[70px] h-[65px] rounded-lg bg-gray-200  ">
              <div className=" text-gray-700  py-1 rounded lg:text-sm text-xs font-medium ">
                Most Popular
              </div>
              <div className="text-[0.9rem] font-bold text-black">Rs: 1999/-</div>
            </div>
            </div>
            {/* Header */}
          


            {/* Description */}
            <p className="text-gray-700 mb-6">
              Learn at your own speed, anytime. Flexible modules + templates
            </p>

            {/* Key Features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">60 hours of content</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">Templates & playbooks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">Certificate on completion</span>
              </div>
            </div>

            {/* Attribute Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700">60 hours</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700">Anywhere</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-gray-700">Hybrid Mode</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Buy Now
              </button>
              <button className="flex-1 border border-gray-300 text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Preview
              </button>
            </div>

            {/* Footer */}
            <div className="text-center flex items-center justify-between">
              <div className="flex items-center justify-center space-x-1 ">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">5.0</span>
                <span className="text-sm text-gray-600">50k learners</span>
              </div>
              <div className="text-xs text-gray-600">30-day money-back guarantee</div>
            </div>
          </div>

          {/* Card 2: 5-Day Onsite Masterclass Workshops */}
          <div className="bg-gray-100 rounded-lg lg:p-6 p-3 relative">
            {/* Cohorted Tag */}
            <div className='grid  items-start grid-cols-3 grid-flow-row  gap-4'>
            <div className='col-span-2'>
            <h3 className="lg:text-xl text-lg font-bold text-black mb-4">5-Day Onsite Masterclass Workshops</h3>
            </div>
            <div className="bg-gray-200 col-span-1 rounded-lg px-3 text-left py-2 h-[55px]">
              <div className=" text-gray-700   rounded lg:text-sm text-xs font-medium  ">
                Cohorted
              </div>
              <div className="lg:text-[0.9rem] text-[0.8rem] font-bold text-black">On request</div>
            </div>

            {/* Header */}
            
            </div>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Interactive sessions for hands-on mastery with your team. Cohorted
            </p>

            {/* Key Features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">Hands-on activation labs — convert learnings to pilots</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">Custom playbook built for your org</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">Facilitator-led cohort with peer benchmarking</span>
              </div>
            </div>

            {/* Attribute Tags */}
            <div className="flex flex-wrap lg:gap-2 gap-1 mb-6">
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700">40 hours</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 000-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700">On request</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700">Onsite mode</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Request Info
              </button>
              <button className="flex-1 border border-gray-300 text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Apply
              </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-center">
              <div className="text-sm font-medium text-gray-700 ">Avg cohort rating 4.9★</div>
              <div className="text-xs text-gray-600">Limited seats</div>
            </div>
          </div>

          {/* Card 3: Coaching & Mentorship */}
          <div className="bg-gray-100 rounded-lg lg:p-6 p-3 relative">
            {/* Beginners Tag */}
            <div className='grid grid-cols-3 grid-flow-row  gap-4'>
            <div className='col-span-2'>
            <h3 className="lg:text-xl text-lg font-bold text-black mb-4">Coaching & <br className='lg:hidden block' /> Mentorship</h3>
            </div>
            <div className="  bg-gray-200 px-3 py-2 h-[55px] rounded-lg">
              <div className=" text-gray-700  rounded lg:text-sm text-xs font-medium ">
                Beginners
              </div>
              <div className="text-[.9rem] font-bold text-black">Custom</div>
            </div>

            {/* Header */}
            
            </div>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Executive coaching, cohort mentorship and activation support.
            </p>

            {/* Key Features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">1:1 coaching</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">Practitioner cohorts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span className="lg:text-sm text-xs text-gray-700">Implementation support</span>
              </div>
            </div>

            {/* Attribute Tags */}
            <div className="flex flex-wrap lg:gap-2 gap-1 mb-6">
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700">2 hours</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700">Anywhere</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-gray-700">Hybrid Mode</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Book Consult
              </button>
              <button className="flex-1 border border-gray-300 text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Preview
              </button>
            </div>

            {/* Footer */}
            <div className="text-center flex items-center justify-between">
              <div className="flex items-center justify-center space-x-1 ">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">5.0</span>
                <span className="text-sm text-gray-600">50k learners</span>
              </div>
              <div className="text-xs text-gray-600">30-day money-back guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
