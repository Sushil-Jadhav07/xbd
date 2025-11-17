"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import MountainImage from '../../asset/mountainimg.png';
import { urlFor } from '../../lib/sanity';
import EnquireNowModal from '../common/EnquireNowModal';

export default function ExponentialJourney({ journeyData }) {
  // Default data if Sanity data is not available
  const defaultTabs = [
    { id: 'leaders', label: 'For X-ponential Leaders' },
    { id: 'organisations', label: 'For X-ponential Organisations' }
  ];

  const defaultStages = [
    {
      id: 'foundation',
      stageNumber: 1,
      title: 'FOUNDATION',
      promise: 'Learn the why and what of exponential growth',
      features: ['Book', 'Access to Tools & Resources', '60+ hours of Online Learning'],
      price: '₹49,000'
    },
    {
      id: 'reflection',
      stageNumber: 2,
      title: 'REFLECTION',
      promise: 'Reflect on your current state and identify growth opportunities',
      features: ['Assessment Tools', 'Personal Reflection Guide', 'Growth Opportunity Analysis'],
      price: '₹75,000'
    },
    {
      id: 'implementor',
      stageNumber: 3,
      title: 'IMPLEMENTOR',
      promise: 'Implement exponential strategies in your organization',
      features: ['Implementation Framework', 'Strategy Templates', 'Change Management Tools'],
      price: '₹1,25,000'
    },
    {
      id: 'practitioner',
      stageNumber: 4,
      title: 'PRACTITIONER',
      promise: 'Master the art of exponential thinking and execution',
      features: ['Advanced Certification', 'Mentorship Program', 'Exclusive Community Access'],
      price: '₹2,00,000'
    }
  ];

  const tabs = journeyData?.tabs || defaultTabs;
  // Fix duplicate stage numbers by ensuring unique stage numbers
  const stages = (journeyData?.stages || defaultStages).map((stage, index) => ({
    ...stage,
    stageNumber: stage.stageNumber !== undefined ? stage.stageNumber : index + 1
  }));
  
  // Ensure unique stage numbers by renumbering duplicates
  const fixedStages = stages.map((stage, index) => {
    const prevStages = stages.slice(0, index);
    const duplicateStageNumber = prevStages.find(prev => prev.stageNumber === stage.stageNumber);
    return {
      ...stage,
      stageNumber: duplicateStageNumber ? index + 1 : stage.stageNumber
    };
  });
  
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'leaders');
  const [activeStage, setActiveStage] = useState(fixedStages[0]?.id || 'foundation');
  const [hoveredStage, setHoveredStage] = useState(null);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedStageForEnquiry, setSelectedStageForEnquiry] = useState('');
  const activeTabData = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) || null,
    [tabs, activeTab]
  );
  const isOrganisationsTab = activeTabData?.label
    ?.toLowerCase()
    ?.includes('organisations');
  const shouldShowPrice = !isOrganisationsTab;

  // Convert stages array to object for easier lookup
  const stageData = useMemo(() => {
    return fixedStages.reduce((acc, stage) => {
      acc[stage.id] = stage;
      return acc;
    }, {});
  }, [fixedStages]);


  // Safeguard: If active stage doesn't exist in data, reset to first stage
  React.useEffect(() => {
    if (!stageData[activeStage] && fixedStages.length > 0) {
      setActiveStage(fixedStages[0].id);
    }
  }, [activeStage, stageData, fixedStages]);

  // Helper function to check if a stage exists
  const isValidStage = (stageId) => {
    return stageData.hasOwnProperty(stageId);
  };

  // Safe stage setter that validates the stage exists
  const setStageIfValid = (stageId) => {
    if (isValidStage(stageId)) {
      setActiveStage(stageId);
    }
  };

  // Get hero section data
  const titleStart = journeyData?.heroSection?.titleStart || 'Design your';
  const highlightText = journeyData?.heroSection?.highlightText || 'Exponential journey';
  const titleEnd = journeyData?.heroSection?.titleEnd || 'now';
  const heroSubtitle = journeyData?.heroSection?.subtitle || "Whether you're leading a transformation, preparing for AI, or scaling innovation, we have a path for you.";
  const mountainImageUrl = journeyData?.heroSection?.mountainImage?.asset?.url;
  const journeyPoints = journeyData?.heroSection?.journeyPoints || [];

  // Define visual point positions for each stage (by stage number)
  const visualPointPositions = {
    1: { left: '2%', bottom: '0%', leftMobile: '2%', bottomMobile: '10%', label: 'Foundation' },
    2: { left: '20%', bottom: '8%', leftMobile: '20%', bottomMobile: '22%', label: 'Reflector' },
    3: { left: '35%', top: '57%', leftMobile: '33%', topMobile: '50%', label: 'Implementor' },
    4: { left: '49%', top: '37%', leftMobile: '49%', topMobile: '37%', label: 'Practitioner' }
  };

  return (
    <div className="min-h-screen bg-black text-white md:mx-[15px] mx-[5px] pb-12 md:pb-16">
      {/* Hero Section with Mountain Background */}
      <div className="relative md:h-[800px] h-[300px] bg-gradient-to-b from-gray-800 to-black overflow-visible">
        {/* Mountain Silhouette with Journey Points */}
        <div className="absolute bottom-0 left-0 right-0 h-[100%] overflow-visible">
          <Image
            src={mountainImageUrl || MountainImage}
            alt={journeyData?.heroSection?.mountainImage?.alt || "Mountain Background"}
            fill
            className="object-cover"
            priority
          />

          {/* Header Text Overlay on Mountain */}
          <div className="absolute top-4 md:top-8 left-0 right-0 text-center px-4 z-10">
            <h1 className="text-lg md:text-4xl font-light mb-0 md:mb-4">
              {titleStart} <span className="text-[#c1a35e] font-semibold">{highlightText}</span> {titleEnd}
            </h1>
            <p className="text-gray-100 text-xs md:text-base max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </div>

          {/* Journey Points - Dynamically rendered based on actual stages */}
          {fixedStages.map((stage) => {
            const position = visualPointPositions[stage.stageNumber];
            if (!position) return null;

            return (
              <>
                {/* Mobile version */}
                <div 
                  key={`${stage.id}-mobile`}
                  className={`md:hidden absolute flex items-center space-x-3 cursor-pointer transition-transform hover:scale-110 isolate ${
                    hoveredStage === stage.id ? 'z-[100]' : 'z-10'
                  }`}
                  style={position.topMobile 
                    ? { left: position.leftMobile, top: position.topMobile }
                    : { left: position.leftMobile, bottom: position.bottomMobile }
                  }
                  onClick={() => setActiveStage(stage.id)}
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    setHoveredStage(stage.id);
                  }}
                  onMouseLeave={(e) => {
                    e.stopPropagation();
                    setHoveredStage(null);
                  }}
                >
                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center border-4 border-gray-800 transition-colors ${
                      activeStage === stage.id ? 'bg-[#9d7035]' : 'bg-gray-700'
                    }`}>
                      <div className={`w-2 h-2 rounded-full transition-colors ${
                        activeStage === stage.id ? 'bg-[#c1a35e]' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    {/* Mobile Hover Tooltip */}
                    {hoveredStage === stage.id && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-72 bg-black/95 backdrop-blur-sm border border-[#c1a35e]/30 rounded-lg shadow-2xl p-4 z-[200] pointer-events-none">
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-[#c1a35e]/30 border-r-8 border-r-transparent"></div>
                        <div className="space-y-3">
                          {/* Promise Section */}
                          <div>
                            <h3 className="text-[#c1a35e] text-xs font-semibold mb-1.5 uppercase tracking-wide">Promise</h3>
                            <p className="text-white text-xs leading-relaxed">{stage.promise}</p>
                          </div>
                          
                          {/* What you get Section */}
                          <div>
                            <h3 className="text-[#c1a35e] text-xs font-semibold mb-1.5 uppercase tracking-wide">What you get</h3>
                            <ul className="space-y-1">
                              {stage.features?.map((feature, index) => (
                                <li key={index} className="text-gray-300 text-xs flex items-start">
                                  <span className="text-[#c1a35e] mr-1.5">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Price Section */}
                          {shouldShowPrice && (
                            <div className="pt-1.5 border-t border-gray-700">
                              <div className="text-xl font-bold text-white">{stage.price}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium relative z-10">{stage.title}</span>
                </div>

                {/* Desktop version */}
                <div 
                  key={`${stage.id}-desktop`}
                  className={`hidden md:flex absolute items-center space-x-3 cursor-pointer transition-transform hover:scale-110 isolate ${
                    hoveredStage === stage.id ? 'z-[100]' : 'z-10'
                  }`}
                  style={position.top 
                    ? { left: position.left, top: position.top }
                    : { left: position.left, bottom: position.bottom }
                  }
                  onClick={() => setActiveStage(stage.id)}
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    setHoveredStage(stage.id);
                  }}
                  onMouseLeave={(e) => {
                    e.stopPropagation();
                    setHoveredStage(null);
                  }}
                >
                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-gray-800 transition-colors ${
                      activeStage === stage.id ? 'bg-[#9d7035]' : 'bg-gray-700'
                    }`}>
                      <div className={`w-4 h-4 rounded-full transition-colors ${
                        activeStage === stage.id ? 'bg-[#c1a35e]' : 'bg-gray-500'
                      }`}></div>
                    </div>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium relative z-10">{stage.title}</span>
                  
                  {/* Hover Tooltip - Positioned relative to the entire journey point container */}
                  {hoveredStage === stage.id && (
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-80 bg-black/95 backdrop-blur-sm border border-[#c1a35e]/30 rounded-lg shadow-2xl p-5 z-[200] pointer-events-none transition-all duration-200 ${
                      stage.stageNumber >= 3 
                        ? 'right-full mr-6' 
                        : 'left-full ml-6'
                    }`}>
                      {/* Arrow pointing to the point */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                        stage.stageNumber >= 3
                          ? 'right-0 translate-x-full border-l-8 border-l-[#c1a35e]/30 border-t-8 border-t-transparent border-b-8 border-b-transparent'
                          : 'left-0 -translate-x-full border-r-8 border-r-[#c1a35e]/30 border-t-8 border-t-transparent border-b-8 border-b-transparent'
                      } w-0 h-0`}></div>
                      <div className="space-y-4">
                        {/* Promise Section */}
                        <div>
                          <h3 className="text-[#c1a35e] text-sm font-semibold mb-2 uppercase tracking-wide">Promise</h3>
                          <p className="text-white text-sm leading-relaxed">{stage.promise}</p>
                        </div>
                        
                        {/* What you get Section */}
                        <div>
                          <h3 className="text-[#c1a35e] text-sm font-semibold mb-2 uppercase tracking-wide">What you get</h3>
                          <ul className="space-y-1.5">
                            {stage.features?.map((feature, index) => (
                              <li key={index} className="text-gray-300 text-sm flex items-start">
                                <span className="text-[#c1a35e] mr-2">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Price Section */}
                        {shouldShowPrice && (
                          <div className="pt-2 border-t border-gray-700">
                            <div className="text-2xl font-bold text-white">{stage.price}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>

        {/* Book Button */}
        <div className="absolute md:left-[13%] left-[0%] md:bottom-[0%] bottom-[-3%]">
          <input
            type="text"
            placeholder="Book"
            className="bg-gray-800 border-gray-600 text-gray-400 md:px-4 px-2 md:py-2 py-1 rounded md:w-64 w-32 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row mb-8 gap-2 md:gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full md:w-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-black'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-0 border border-gray-200 rounded-lg overflow-hidden">
          {/* Left Column - Stage Info - 30% */}
          <div className="w-full lg:w-[30%] bg-transparent p-4 md:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-700">
            {stageData[activeStage] && (
              <>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#9d7035] flex items-center justify-center mb-3 md:mb-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c1a35e]"></div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">STAGE {stageData[activeStage].stageNumber}</p>
                <h1 className="text-[#c1a35e] text-xl md:text-2xl font-semibold">{stageData[activeStage].title}</h1>
              </>
            )}
          </div>

          {/* Middle Column - Journey Stages - 20% */}
          <div className="w-full lg:w-[20%] bg-transparent border-b lg:border-b-0 lg:border-r border-gray-700 flex items-center justify-center">
            <div className="w-full">
              {[...fixedStages].sort((a, b) => b.stageNumber - a.stageNumber).map((stage, index, arr) => (
                <div 
                  key={stage.id}
                  className={`p-3 md:p-6 ${index < arr.length - 1 ? 'border-b border-gray-700' : ''} cursor-pointer transition-all duration-200 hover:bg-gray-800 ${
                    activeStage === stage.id ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => setActiveStage(stage.id)}
                >
                  <h4 className={`text-base md:text-lg font-medium text-center transition-colors duration-200 ${
                    activeStage === stage.id ? 'text-[#c1a35e]' : 'text-white'
                  }`}>{stage.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details - 50% */}
          <div className="w-full lg:w-[50%] bg-transparent p-4 md:p-8">
            {stageData[activeStage] && (
              <>
                <h1 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">Promise</h1>
                <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                  {stageData[activeStage].promise}
                </p>

                <h4 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4">What you get</h4>
                <ul className="space-y-2 mb-8 md:mb-12">
                  {stageData[activeStage].features?.map((feature, index) => (
                    <li key={index} className="text-gray-300 text-sm md:text-base flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {shouldShowPrice && (
                  <div className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                    {stageData[activeStage].price}
                  </div>
                )}
                
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStageForEnquiry(stageData[activeStage].title);
                    setIsEnquireModalOpen(true);
                  }}
                  className="w-full md:w-auto bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold text-sm md:text-base hover:from-[#8a6230] hover:to-[#b0924d] transition-colors"
                >
                  Enquire Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Enquire Now Modal */}
      <EnquireNowModal
        open={isEnquireModalOpen}
        onClose={() => setIsEnquireModalOpen(false)}
        stageName={selectedStageForEnquiry}
      />
    </div>
  );
}