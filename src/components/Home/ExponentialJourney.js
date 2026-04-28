"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { MdEventNote, MdReportProblem, MdFactCheck } from 'react-icons/md';
import MountainImage from '../../asset/mountainimg.png';
import EnquireNowModal from '../common/EnquireNowModal';

export default function ExponentialJourney({ journeyData }) {
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
      id: 'VISIONARY',
      stageNumber: 2,
      title: 'VISIONARY',
      promise: 'Reflect on your current state and identify growth opportunities',
      features: ['Assessment Tools', 'Personal VISIONARY Guide', 'Growth Opportunity Analysis'],
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
  const stages = (journeyData?.stages || defaultStages).map((stage, index) => ({
    ...stage,
    stageNumber: stage.stageNumber !== undefined ? stage.stageNumber : index + 1
  }));

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

  const getStageTitleColorClass = (stageTitle = '') => {
    const normalized = stageTitle.toUpperCase();
    if (
      normalized === 'FOUNDATION' ||
      normalized === 'VISIONARY' ||
      normalized === 'IMPLEMENTOR' ||
      normalized === 'PRACTITIONER'
    ) {
      return 'text-[#c1a35e]';
    }
    return 'text-[#111111]';
  };

  const getMobileStageTitleColorClass = (stage) => {
    return 'text-[#c1a35e]';
  };

  // Hero section data
  const heroSubtitle = 'From AI Adoption to AI Institutionalization';
  const subtitleHighlightText = 'From AI Adoption to AI Institutionalization';
  const mountainImageUrl = journeyData?.heroSection?.mountainImage?.asset?.url || MountainImage;

  const stageDetailData = {
    aware: {
      stageHeadline: 'STAGE 1-AWARE:',
      stageTitle: 'BUILD THE FOUNDATION',
      stageSubTitle: 'Understand and Build Curiosity',
      executionCopy:
        'Understand the shift. Build the strategic case for AI as an operating model transformation - not just a technology decision.',
      deliverables: [
        'AI Readiness Diagnostic',
        'Personal Leadership Positioning',
        'Exponential by Design framework orientation'
      ]
    },
    visionary: {
      stageHeadline: 'STAGE 2-VISIONARY:',
      stageTitle: 'EXECUTIVE VISION RESET',
      stageSubTitle: 'From AI Curiosity to AI Mandate',
      executionCopy:
        "Design the transformation. Map your organisation's AI opportunity zones, prioritise interventions, and build your transformation architecture.",
      deliverables: [
        'AI Opportunity Map',
        'Value Prioritisation Matrix',
        'Transformation Blueprint'
      ]
    },
    implementor: {
      stageHeadline: 'STAGE 3- IMPLEMENTOR:',
      stageTitle: 'ARCHITECTURE & EXECUTION DESIGN LAB',
      stageSubTitle: 'From VISION to SYSTEM DESIGN',
      executionTitleLine1: '3-DAY IMMERSIVE HIGH-INTENSITY DESIGN SPRINT',
      executionCopy:
        'Run the pilots. Convert strategy into measurable action. Build, test, and iterate your first AI-enabled operating change.',
      deliverables: [
        '90-Day Pilot Canvas',
        'Experiment templates',
        'Change management playbook'
      ]
    },
    practitioner: {
      stageHeadline: 'STAGE 4. PRACTITIONER',
      stageTitle: 'COACHING AND SYSTEM ACTIVATION',
      stageSubTitle: 'From DESIGN to TRANSFORMATION JOURNEY',
      executionTitleLine1: '4 MONTHS EXECUTION',
      executionTitleLine2: 'EXCELLENCE',
      executionCopy:
        'Lead the institution. Embed AI into governance, talent, and decision architecture. Build the systems that sustain transformation.',
      focusBoxes: [
        { id: 'weekly', label: 'WEEKLY SPRINTS', icon: 'calendar' },
        { id: 'monthly', label: 'MONTHLY REVIEWS', icon: 'alert' },
        { id: 'diagnostic', label: 'DIAGNOSTIC ASSESSMENTS', icon: 'clipboard' }
      ],
      deliverables: [
        'AI Governance Charter',
        'CoE Blueprint',
        'Capability Architecture',
        '90-day scale plan'
      ]
    }
  };

  // Define visual point positions for each stage (by stage number)
  const visualPointPositions = {
    1: { left: '3%', bottom: '0%', leftMobile: '2%', bottomMobile: '10%', label: 'Foundation' },
    2: { left: '22%', bottom: '23%', leftMobile: '20%', bottomMobile: '22%', label: 'Reflector' },
    3: { left: '27%', top: '55%', leftMobile: '33%', topMobile: '50%', label: 'Implementor' },
    4: { left: '42%', top: '36%', leftMobile: '49%', topMobile: '37%', label: 'Practitioner' }
  };

  // Text overlays on mountain image (stage-wise % placement)
  const journeyTextPositions = {
    foundation: { left: '1%', bottom: '18%', leftMobile: '2%', bottomMobile: '1.5%' },
    stage2: { left: '.8%', top: '75%', leftMobile: '2%', topMobile: '61%' },
    stage3: { left: '0.8%', top: '58%', leftMobile: '2%', topMobile: '36%' },
    stage4: { left: '0.8%', top: '39%', leftMobile: '2%', topMobile: '15%' },
  };

  const desktopJourneyStageText = [
    {
      key: 'stage4',
      stageLabel: 'STAGE 4',
      showArrow: true,
      headingLines: ['COACHING AND', 'SYSTEM ACTIVATION'],
      subLines: ['From DESIGN to', 'TRANSFORMATION JOURNEY']
    },
    {
      key: 'stage3',
      stageLabel: 'STAGE 3',
      showArrow: true,
      headingLines: ['ARCHITECTURE &', 'EXECUTION DESIGN LAB'],
      subLines: ['From VISION to SYSTEM DESIGN']
    },
    {
      key: 'stage2',
      stageLabel: 'STAGE 2',
      showArrow: true,
      headingLines: ['EXECUTIVE VISION RESET'],
      subLines: ['From AI Curiosity to AI', 'Mandate']
    }
  ];

  // Optional manual override for guide lines.
  // Set a value here to control the line directly; keep as null to auto-calculate.
  const journeyGuideLinePositions = {
    stage4: {
      left: '7%',
      top: '40%',
      width: '40%',
    },
    stage3: {
      left: '7%',
      top: '59%',
      width: '27%',
    },
    stage2: {
      left: '7%',
      top: '76%',
      width: '22%',
    },
    foundation: {
      left: '1%',
      bottom: '0.8%',
      width: '0%',
    },
  };

  const escapedSubtitleHighlight = subtitleHighlightText
    ? subtitleHighlightText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    : '';
  const subtitleHighlightMatch = escapedSubtitleHighlight
    ? heroSubtitle.match(new RegExp(escapedSubtitleHighlight, 'i'))
    : null;
  const effectiveSubtitleHighlight = subtitleHighlightMatch?.[0] || '';
  const subtitleParts = effectiveSubtitleHighlight
    ? heroSubtitle.split(effectiveSubtitleHighlight)
    : null;

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-black dark:bg-black dark:text-white md:mx-[15px] mx-[5px] pb-12 md:pb-16">
      {/* Hero Section with Mountain Background */}
      <div className="relative md:h-[800px] h-[300px] bg-gradient-to-b from-[#e7e0d5] to-[#f5f1eb] dark:from-gray-800 dark:to-black overflow-visible">
        {/* Mountain Silhouette with Journey Points */}
        <div className="absolute bottom-0 left-0 right-0 h-[100%] overflow-visible">
          <Image
            src={mountainImageUrl}
            alt={journeyData?.heroSection?.mountainImage?.alt || "Mountain Background"}
            fill
            className="object-cover"
            priority
          />

          {/* Header Text Overlay on Mountain */}
          <div className="absolute top-4 md:top-14 left-0 right-0 text-left px-4 z-10">
            <h2 className="text-lg text-[#111111] md:text-5xl font-light mb-0 md:mb-4"> Growth Transformation Leadership Program
              {/* {titleStart}   <span className="text-[#c1a35e] font-semibold">{highlightText}</span> {titleEnd} */}
            </h2>
            <h4 className="text-[#111111] text-left text-lg md:text-4xl "> 
              {subtitleParts ? (
                <>
                  {subtitleParts[0]}
                  <span className="text-[#c1a35e] text-left md:text-4xl text-lg font-semibold">{effectiveSubtitleHighlight}</span>
                  {subtitleParts.slice(1).join(effectiveSubtitleHighlight)}
                </>
              ) : subtitleHighlightText ? (
                <>
                  {heroSubtitle}{' '}
                  <span className="text-[#c1a35e] md:text-4xl text-lg font-semibold">{subtitleHighlightText}</span>
                </>
              ) : (
                heroSubtitle
              )}
            </h4>
          </div>

          {/* Journey Text Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none text-[#111111]">
            {/* Stage Guide Lines (parallel to stage text positions) */}
            <div
              className="absolute hidden md:block border-t-2 border-dashed border-gray-500/70"
              style={{
                left: journeyGuideLinePositions.stage4.left || journeyTextPositions.stage4.left,
                width: journeyGuideLinePositions.stage4.width || `calc(${visualPointPositions[4].left} - ${journeyTextPositions.stage4.left})`,
                top: journeyGuideLinePositions.stage4.top || journeyTextPositions.stage4.top
              }}
            />
            <div
              className="absolute hidden md:block border-t-2 border-dashed border-gray-500/70"
              style={{
                left: journeyGuideLinePositions.stage3.left || journeyTextPositions.stage3.left,
                width: journeyGuideLinePositions.stage3.width || `calc(${visualPointPositions[3].left} - ${journeyTextPositions.stage3.left})`,
                top: journeyGuideLinePositions.stage3.top || journeyTextPositions.stage3.top
              }}
            />
            <div
              className="absolute hidden md:block border-t-2 border-dashed border-gray-500/70"
              style={{
                left: journeyGuideLinePositions.stage2.left || journeyTextPositions.stage2.left,
                width: journeyGuideLinePositions.stage2.width || `calc(${visualPointPositions[2].left} - ${journeyTextPositions.stage2.left})`,
                top: journeyGuideLinePositions.stage2.top || journeyTextPositions.stage2.top
              }}
            />
            <div
              className="absolute hidden md:block border-t-2 border-gray-400/80"
              style={{
                left: journeyGuideLinePositions.foundation.left || journeyTextPositions.foundation.left,
                width: journeyGuideLinePositions.foundation.width || `calc(${visualPointPositions[1].left} - ${journeyTextPositions.foundation.left})`,
                bottom: journeyGuideLinePositions.foundation.bottom || journeyTextPositions.foundation.bottom
              }}
            />

            {desktopJourneyStageText.map((stageText) => {
              const stagePosition = journeyTextPositions[stageText.key];

              return (
                <div
                  key={stageText.key}
                  className="absolute hidden md:flex items-start gap-4"
                  style={{ left: stagePosition.left, top: stagePosition.top }}
                >
                  <div className="w-[92px] shrink-0">
                    <p className="text-[18px] font-semibold leading-none">{stageText.stageLabel}</p>
                    {stageText.showArrow && (
                      <div className="mt-6 ml-4 flex flex-col items-center">
                        <div className="w-[3px] h-[78px] bg-[#9d7035]" />
                        <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[11px] border-b-[#9d7035] -mt-[89px]" />
                      </div>
                    )}
                  </div>

                  <div className="w-[100%] max-w-[800px] mt-6">
                    {stageText.headingLines.map((line, index) => (
                      <p
                        key={`${stageText.key}-heading-${line}`}
                        className={`w-full text-[18px] font-semibold uppercase leading-[1.08] ${index === 0 ? 'mt-1' : ''}`}
                      >
                        {line}
                      </p>
                    ))}
                    {stageText.subLines.map((line, index) => (
                      <p
                        key={`${stageText.key}-sub-${line}`}
                        className={`w-full text-[14px] font-medium text-[#9d7035] leading-[1.08] ${index === 0 ? 'mt-0.5' : ''}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            

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
                      activeStage === stage.id || hoveredStage === stage.id ? 'bg-[#9d7035]' : 'bg-gray-700'
                    }`}>
                      <div className={`w-2 h-2 rounded-full transition-colors ${
                        activeStage === stage.id || hoveredStage === stage.id ? 'bg-[#c1a35e]' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    {/* Mobile Hover Tooltip */}
                    {hoveredStage === stage.id && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-72 bg-black/95 backdrop-blur-sm border border-[#c1a35e]/30 rounded-lg shadow-2xl p-4 z-[200] pointer-events-none">
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-[#c1a35e]/30 border-r-8 border-r-transparent"></div>
                        <div className="space-y-3">
                          {/* Promise Section */}
                          <div>
                            <h4 className="text-[#c1a35e] text-xs font-semibold mb-1.5 uppercase tracking-wide">Promise</h4>
                            <p className="text-white text-xs leading-relaxed">{stage.promise}</p>
                          </div>
                          
                          {/* What you get Section */}
                          <div>
                            <h4 className="text-[#c1a35e] text-xs font-semibold mb-1.5 uppercase tracking-wide">What you get</h4>
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
                          {/* {shouldShowPrice && (
                            <div className="pt-1.5 border-t border-gray-700">
                              <div className="text-xl font-bold text-white">{stage.price}</div>
                            </div>
                          )} */}
                        </div>
                      </div>
                    )}
                  </div>
                  <span className={`${getMobileStageTitleColorClass(stage)} text-xs md:text-sm font-semibold relative z-10`}>
                    {stage.title}
                  </span>
                </div>

                {/* Desktop version */}
                <div 
                  key={`${stage.id}-desktop`}
                  className={`hidden md:flex absolute flex-row-reverse items-center space-x-3 space-x-reverse cursor-pointer transition-transform hover:scale-110 isolate ${
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
                      activeStage === stage.id || hoveredStage === stage.id ? 'bg-[#9d7035]' : 'bg-gray-700'
                    }`}>
                      <div className={`w-4 h-4 rounded-full transition-colors ${
                        activeStage === stage.id || hoveredStage === stage.id ? 'bg-[#c1a35e]' : 'bg-gray-500'
                      }`}></div>
                    </div>
                  </div>
                  <span className={`${getStageTitleColorClass(stage.title)} text-right text-xs md:text-sm font-semibold relative z-10`}>
                    {stage.title}
                  </span>
                  
                  {/* Hover Tooltip - Positioned relative to the entire journey point container */}
                  {hoveredStage === stage.id && (
                    <div className="absolute top-1/2 left-full ml-6 transform -translate-y-1/2 w-80 bg-black/95 backdrop-blur-sm border border-[#c1a35e]/30 rounded-lg shadow-2xl p-5 z-[200] pointer-events-none transition-all duration-200">
                      {/* Arrow pointing to the point */}
                      <div className="absolute top-1/2 left-0 -translate-x-full transform -translate-y-1/2 border-r-8 border-r-[#c1a35e]/30 border-t-8 border-t-transparent border-b-8 border-b-transparent w-0 h-0"></div>
                      <div className="space-y-4">
                        {/* Promise Section */}
                        <div>
                          <h4 className="text-[#c1a35e] text-sm font-semibold mb-2 uppercase tracking-wide">Promise</h4>
                          <p className="text-white text-sm leading-relaxed">{stage.promise}</p>
                        </div>
                        
                        {/* What you get Section */}
                        <div>
                          <h4 className="text-[#c1a35e] text-sm font-semibold mb-2 uppercase tracking-wide">What you get</h4>
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
                        {/* {shouldShowPrice && (
                          <div className="pt-2 border-t border-gray-700">
                            <div className="text-2xl font-bold text-white">{stage.price}</div>
                          </div>
                        )} */}
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>

        {/* Book Button */}
        {/* <div className="absolute md:left-[13%] left-[0%] md:bottom-[0%] bottom-[-3%]">
          <input
            type="text"
            placeholder="Book"
            className="bg-gray-800 border-gray-600 text-gray-400 md:px-4 px-2 md:py-2 py-1 rounded md:w-64 w-32 focus:outline-none focus:border-gray-500"
          />
        </div> */}
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-0">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row mb-8 gap-2 md:gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full md:w-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-black'
                  : 'bg-[#e7e0d5] text-[#4b5563] hover:bg-[#ddd3c4] dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-0 border border-[#d7cdbf] dark:border-gray-200 rounded-lg overflow-hidden">
          {/* Left Column - Stage Info - 30% */}
          <div className="w-full lg:w-[30%] bg-transparent p-4 md:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#d7cdbf] dark:border-gray-700">
            {stageData[activeStage] && (
              <>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#9d7035] flex items-center justify-center mb-3 md:mb-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c1a35e]"></div>
                </div>
                <p className="text-[#6b7280] dark:text-gray-400 text-xs md:text-sm mb-1 md:mb-2">STAGE {stageData[activeStage].stageNumber}</p>
                <h2 className="text-[#c1a35e] text-xl md:text-2xl font-semibold">{stageData[activeStage].title}</h2>
              </>
            )}
          </div>

          {/* Middle Column - Journey Stages - 20% */}
          <div className="w-full lg:w-[20%] bg-transparent border-b lg:border-b-0 lg:border-r border-[#d7cdbf] dark:border-gray-700 flex items-center justify-center">
            <div className="w-full">
              {[...fixedStages].sort((a, b) => b.stageNumber - a.stageNumber).map((stage, index, arr) => (
                <div
                  key={stage.id}
                  className={`p-3 md:p-6 ${index < arr.length - 1 ? 'border-b border-[#d7cdbf] dark:border-gray-700' : ''} cursor-pointer transition-all duration-200 hover:bg-[#ede3d5] dark:hover:bg-gray-800 ${
                    activeStage === stage.id ? 'bg-[#ede3d5] dark:bg-gray-800' : ''
                  }`}
                  onClick={() => setActiveStage(stage.id)}
                >
                  <h4 className={`text-base md:text-lg font-medium text-center transition-colors duration-200 ${
                    activeStage === stage.id ? 'text-[#c1a35e]' : 'text-black dark:text-white'
                  }`}>{stage.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details - 50% */}
          <div className="w-full lg:w-[50%] bg-transparent p-4 md:p-8">
            {stageData[activeStage] && (
              <>
                {stageData[activeStage]?.stageNumber === 4 ? (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-black dark:text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.practitioner.stageHeadline}
                      </h3>
                      <h3 className="text-black dark:text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.practitioner.stageTitle}
                      </h3>
                      <p className="text-[#9d7035] text-sm md:text-base font-semibold leading-tight">
                        {stageDetailData.practitioner.stageSubTitle}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#9d7035] text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.practitioner.executionTitleLine1}
                        <br />
                        {stageDetailData.practitioner.executionTitleLine2}
                      </h4>
                      <p className="text-[#111111] dark:text-gray-200 text-sm md:text-base leading-snug">
                        {stageDetailData.practitioner.executionCopy}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 max-w-2xl">
                      {stageDetailData.practitioner.focusBoxes.map((box) => (
                        <div key={box.id} className="flex flex-col items-start">
                          <div className="w-7 h-7 md:w-10 md:h-10 mb-2 flex items-center justify-center">
                            {box.icon === 'calendar' && (
                              <MdEventNote className="w-7 h-7 text-white" />
                            )}
                            {box.icon === 'alert' && (
                              <MdReportProblem className="w-7 h-7 text-white" />
                            )}
                            {box.icon === 'clipboard' && (
                              <MdFactCheck className="w-7 h-7 text-white" />
                            )}
                          </div>
                          <p className="text-white text-xs md:text-xs  uppercase leading-tight">
                            {box.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-[#9d7035] text-base md:text-lg font-semibold mb-1">Deliverables:</h4>
                      <ul className="space-y-1 mb-4">
                        {stageDetailData.practitioner.deliverables.map((item) => (
                          <li key={item} className="text-white text-sm md:text-base italic leading-tight flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : stageData[activeStage]?.stageNumber === 3 ? (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-black dark:text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.implementor.stageHeadline}
                      </h3>
                      <h3 className="text-black dark:text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.implementor.stageTitle}
                      </h3>
                      <p className="text-[#9d7035] text-sm md:text-base font-semibold leading-tight">
                        {stageDetailData.implementor.stageSubTitle}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#9d7035] text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.implementor.executionTitleLine1}
                      </h4>
                      <p className="text-[#111111] dark:text-gray-200 text-sm md:text-base leading-snug">
                        {stageDetailData.implementor.executionCopy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#9d7035] text-base md:text-lg font-semibold mb-1">Deliverables:</h4>
                      <ul className="space-y-1 mb-4">
                        {stageDetailData.implementor.deliverables.map((item) => (
                          <li key={item} className="text-white text-sm md:text-base italic leading-tight flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : stageData[activeStage]?.stageNumber === 2 ? (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-black dark:text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.visionary.stageHeadline}
                      </h3>
                      <h3 className="text-black dark:text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.visionary.stageTitle}
                      </h3>
                      <p className="text-[#9d7035] text-sm md:text-base font-semibold leading-tight">
                        {stageDetailData.visionary.stageSubTitle}
                      </p>
                    </div>

                    <div>
                      <p className="text-[#111111] dark:text-gray-200 text-sm md:text-base leading-snug">
                        {stageDetailData.visionary.executionCopy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#9d7035] text-base md:text-lg font-semibold mb-1">Deliverables:</h4>
                      <ul className="space-y-1 mb-4">
                        {stageDetailData.visionary.deliverables.map((item) => (
                          <li key={item} className="text-white text-sm md:text-base italic leading-tight flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  stageData[activeStage]?.stageNumber === 1 ||
                  String(stageData[activeStage]?.title || '').toUpperCase() === 'FOUNDATION'
                ) ? (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.aware.stageHeadline}
                      </h3>
                      <h3 className="text-white text-base md:text-lg font-semibold uppercase leading-tight">
                        {stageDetailData.aware.stageTitle}
                      </h3>
                      <p className="text-[#9d7035] text-sm md:text-base font-semibold leading-tight">
                        {stageDetailData.aware.stageSubTitle}
                      </p>
                    </div>

                    <div>
                      <p className="text-white text-sm md:text-base leading-snug">
                        {stageDetailData.aware.executionCopy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#9d7035] text-base md:text-lg font-semibold mb-1">Deliverables:</h4>
                      <ul className="space-y-1 mb-4">
                        {stageDetailData.aware.deliverables.map((item) => (
                          <li key={item} className="text-white text-sm md:text-base italic leading-tight flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="text-black dark:text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">Promise</h4>
                    <p className="text-[#374151] dark:text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                      {stageData[activeStage].promise}
                    </p>

                    <h4 className="text-black dark:text-white text-base md:text-lg font-semibold mb-3 md:mb-4">What you get</h4>
                    <ul className="space-y-2 mb-8 md:mb-12">
                      {stageData[activeStage].features?.map((feature, index) => (
                        <li key={index} className="text-[#374151] dark:text-gray-300 text-sm md:text-base flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
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


