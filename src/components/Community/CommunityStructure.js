export default function CommunityStructure() {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Community Structure Table */}
            <div className="space-y-6 sm:space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Community Structure
                </h1>
                <p className="text-base sm:text-lg text-gray-400 italic">
                  Gain the opportunity to enter into the exclusive playing field of the Exponentials
                </p>
              </div>
  
              {/* Pricing Table */}
              <div className="space-y-0 overflow-hidden rounded-sm border border-gray-700">
                {/* Header Row */}
                <div className="grid grid-cols-2 bg-black border-b border-gray-700">
                  <div className="p-4 sm:p-6 border-r border-gray-700">
                    <h3 className="text-lg sm:text-xl font-bold text-white">Stream</h3>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white">Value</h3>
                  </div>
                </div>
  
                {/* Free Tier Row */}
                <div className="grid grid-cols-2 bg-gray-900 border-b border-gray-700">
                  <div className="p-4 sm:p-6 border-r border-gray-700">
                    <h4 className="text-base sm:text-lg font-bold text-white">Free Tier</h4>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-300">
                      Community access, articles, podcast, events
                    </p>
                  </div>
                </div>
  
                {/* Pro Tier Row */}
                <div className="grid grid-cols-2 bg-gradient-to-r from-yellow-700 to-yellow-600 border-b border-yellow-500">
                  <div className="p-4 sm:p-6 border-r border-yellow-500">
                    <h4 className="text-base sm:text-lg font-bold text-white">Pro Tier</h4>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-white">
                      Workshops, frameworks, templates
                    </p>
                  </div>
                </div>
  
                {/* Premium Tier Row */}
                <div className="grid grid-cols-2 bg-gradient-to-r from-yellow-700 to-yellow-600">
                  <div className="p-4 sm:p-6 border-r border-yellow-500">
                    <h4 className="text-base sm:text-lg font-bold text-white">Premium Tier</h4>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-white">
                      CXO pods, advisory calls, course access
                    </p>
                  </div>
                </div>
              </div>
  
              {/* CTA Button */}
              <div>
                <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                  Send your Nominations
                </button>
              </div>
            </div>
  
            {/* Right Side - Coming Soon Box */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="border-2 border-gray-700 rounded-sm p-12 sm:p-16 lg:p-20 transform hover:border-yellow-600 transition-all duration-300">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white transform -rotate-12 text-center">
                  COMING SOON
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }