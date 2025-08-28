import React from 'react';

const AnujNewsletter = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-600 tracking-wider">NEWS LETTER</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 max-w-4xl">
          Unlock Your Organization's Exponential Potential
        </h1>
        
        <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
          We combine consulting, hands-on workshops and tailored learning paths to help executive teams move from experiments to sustained growth.
        </p>
      </div>

      {/* Feature Section - Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl w-full">
        {/* Expert Consulting */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Expert Consulting</h3>
          <p className="text-black">Tailored strategies to create lasting change.</p>
        </div>

        {/* Courses & Workshops */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Courses & Workshops</h3>
          <p className="text-black">Practical frameworks for leaders to scale growth.</p>
        </div>

        {/* Measured Outcomes */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-black mb-2">Measured Outcomes</h3>
          <p className="text-black">Rollouts focused on measurable lift and velocity.</p>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-md w-full">
        <input
          type="email"
          placeholder="Subscribe for short leadership insights"
          className="flex-1 px-4 py-3 bg-gray-200 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Subscribe
        </button>
      </div>

      {/* Footer CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Work with Anuj
        </button>
        <button className="px-8 py-3 bg-white text-black border-2 border-black rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          Order Book
        </button>
      </div>
    </div>
  );
};

export default AnujNewsletter;
