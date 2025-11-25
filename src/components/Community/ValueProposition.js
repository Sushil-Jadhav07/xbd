export default function ValueProposition() {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Value Cards */}
            <div className="w-full">
              {/* Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  What You'll Gain (Value Proposition)
                </h1>
                <p className="text-base sm:text-lg text-gray-400 italic">
                  Gain the opportunity to enter into the exclusive playing field of the Exponentials
                </p>
              </div>
  
              {/* Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {/* Card 1 - Executive Insights */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-sm border border-gray-700 hover:border-yellow-600 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-2">
                    Executive
                  </h3>
                  <p className="text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                    INSIGHTS
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Exclusive frameworks, case studies, and reports.
                  </p>
                </div>
  
                {/* Card 2 - Peer to Peer Learning */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-sm border border-gray-700 hover:border-yellow-600 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-2">
                    Peer to Peer
                  </h3>
                  <p className="text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                    LEARNING
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Collaborate with fellow CXOs & CIOs in curated groups.
                  </p>
                </div>
  
                {/* Card 3 - Activation Labs */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-sm border border-gray-700 hover:border-yellow-600 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-2">
                    Activation
                  </h3>
                  <p className="text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                    LABS
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Hands-on cohorts applying the XBD methodology to real challenges.
                  </p>
                </div>
              </div>
  
              {/* CTA Button */}
              <div>
                <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                  Discover Our Programs
                </button>
              </div>
            </div>
  
            {/* Right Side - Supporting Text */}
            <div className="flex items-center justify-center lg:justify-center">
              <div className="text-center lg:text-left max-w-md">
                <h2 className="text-3xl  md:text-5xl font-bold leading-tight">
                  Whether you want quick insights or deep collaboration, we have a circle for you.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }