'use client'
import { useState } from 'react';

export default function ToolsFrameworksTimeline() {
  const [activeTimeline, setActiveTimeline] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState(1);

  const timelineSteps = [
    { id: 1, title: "DESIGN PRODUCT" },
    { id: 2, title: "DESIGN EXPERIENCE" },
    { id: 3, title: "DESIGN VALUE" },
    { id: 4, title: "DESIGN SCALE" },
    { id: 5, title: "DESIGN EXPONENTIALITY" }
  ];

  const subTabs = [
    { id: 1, label: "Hyper-converged Product Design Framework" },
    { id: 2, label: "Hyper-Converged Experience Design Framework" },
    { id: 3, label: "Hyper-converged Value Design Framework" },
    { id: 4, label: "Multiplier effects to design Scale" },
    { id: 5, label: "Formation of Exponential Organizations" }
  ];

  const getContent = () => {
    // Show content based on activeSubTab (the actual tab selected)
    switch (activeSubTab) {
      case 1:
        return (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Design product that reach needs at the{' '}
                <span className="text-[#c1a35e] font-semibold">Point of Origin.</span>
              </p>
            </div>
          </div>
        );
      
      case 2:
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  <div className="absolute inset-0 rounded-full border-2 border-white opacity-30"></div>
                  <div className="absolute inset-8 rounded-full border-2 border-white opacity-50"></div>
                  <div className="absolute inset-16 rounded-full border-2 border-white opacity-70"></div>
                  <div className="absolute inset-24 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12 flex items-center justify-center border-l border-gray-700">
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-gray-700">
              <div className="bg-[#c1a35e] text-black font-bold text-center py-3 sm:py-4 text-sm sm:text-base">
                IVR
              </div>
              <div className="bg-[#c1a35e] text-black font-bold text-center py-3 sm:py-4 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-yellow-700">
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12 flex items-center justify-center">
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12 flex items-center justify-center border-l border-gray-700">
                <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
                  <svg width="300" height="300" viewBox="0 0 300 300" className="w-full h-full max-w-xs sm:max-w-sm">
                    <path d="M 150 50 L 250 150 L 150 250 L 50 150 Z" fill="white" opacity="0.1" stroke="white" strokeWidth="2"/>
                    <circle cx="150" cy="150" r="30" fill="#4B5563" stroke="white" strokeWidth="2"/>
                    <circle cx="150" cy="80" r="25" fill="#4B5563" stroke="white" strokeWidth="2"/>
                    <circle cx="150" cy="220" r="25" fill="#4B5563" stroke="white" strokeWidth="2"/>
                    <circle cx="80" cy="150" r="25" fill="#4B5563" stroke="white" strokeWidth="2"/>
                    <circle cx="220" cy="150" r="25" fill="#4B5563" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-gray-700">
              <div className="bg-[#c1a35e] text-black font-bold text-center py-3 sm:py-4 text-sm sm:text-base">
              </div>
              <div className="bg-[#c1a35e] text-black font-bold text-center py-3 sm:py-4 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-yellow-700">
                REACH Interconnect
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                Design systems that scale with{' '}
                <span className="text-[#c1a35e] font-semibold">Multiplier Effects.</span>
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                <span className="text-[#c1a35e] font-semibold">Formation</span> of Exponential Organizations
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px]">
            <div className="text-gray-500 text-lg">
              Content for Tab {activeSubTab}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen mx-[15px] bg-[#f5f1eb] text-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Understand the Tools and Frameworks for
        </h1>

        {/* Timeline Navigation */}
        <div className="mb-8 sm:mb-12">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className="text-xs font-semibold mb-2 text-gray-400 text-center px-2">
                    {step.title}
                  </div>
                  <button
                    onClick={() => {
                      setActiveTimeline(step.id);
                      setActiveSubTab(step.id);
                    }}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      activeTimeline === step.id && activeSubTab === step.id
                        ? 'bg-[#c1a35e] border-[#c1a35e] text-black scale-110'
                        : 'bg-black border-white text-white hover:border-[#c1a35e]'
                    }`}
                  >
                    {step.id}
                  </button>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden overflow-x-auto pb-4">
            <div className="flex items-center min-w-max">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="text-xs font-semibold mb-2 text-gray-400 text-center w-24">
                      {step.title}
                    </div>
                    <button
                      onClick={() => {
                        setActiveTimeline(step.id);
                        setActiveSubTab(step.id);
                      }}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300 ${
                        activeTimeline === step.id && activeSubTab === step.id
                          ? 'bg-[#c1a35e] border-yellow-400 text-black scale-110'
                          : 'bg-black border-white text-white'
                      }`}
                    >
                      {step.id}
                    </button>
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-16 h-0.5 bg-gray-600 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Tab Headers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 mb-0 border-t border-l border-r border-gray-700">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id);
                setActiveTimeline(tab.id);
              }}
              className={`p-3 sm:p-4 text-xs md:text-xs font-bold border-b border-r border-gray-700 transition-all duration-300 text-center ${
                activeSubTab === tab.id && activeTimeline === tab.id
                  ? 'bg-[#c1a35e] text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              <div className="leading-tight">
                {tab.id === 5 ? (
                  <>
                    <span className="text-[#c1a35e]">Formation</span> of Exponential Organizations
                  </>
                ) : (
                  tab.label
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gray-900 border-l border-r border-b border-gray-700 overflow-hidden">
          {getContent()}
        </div>
      </div>
    </div>
  );
}