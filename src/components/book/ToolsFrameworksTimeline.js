'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import IVRDiagram from '@/asset/tools/design products/Figure 11_Spheres of a hyperconnected product_1_11zon.webp';
import ScienceOfAssociation from '@/asset/tools/design experience/Figure 32_The Science of Association_1_11zon.webp';
import ValueExchangeNetwork from '@/asset/tools/design value/Figure 55_Value Exchange Network_1_11zon.webp';
import VenNetworkEffects from '@/asset/tools/multiplier effect/Figure 57_Network effects of VEN (Value Exchange Network)_2_11zon.webp';
import CognitiveEnterprise from '@/asset/tools/design exponential/Figure 68_Cognitive Inference the new frontier of a Cognitive Enterprise_2_11zon.webp';

export default function ToolsFrameworksTimeline({ timelineData }) {
  const [activeTimeline, setActiveTimeline] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef(null);

  // Fallback data
  const fallbackData = {
    mainTitle: "Understand the Tools and Frameworks for",
    mainSubtitle: "",
    sections: [
      {
        stepNumber: 1,
        stepTitle: "DESIGN PRODUCT",
        frameworkTitle: "Design Intelligent Products",
        descriptionParagraph1: "Future-built enterprises don't build features. They design intelligent products that sense, learn, and evolve — before customers even ask.",
        descriptionParagraph2: "",
        descriptionParagraph3: "",
        highlightedText: "",
        bulletPoints: [
          "Point-of-Origin needs",
          "Self-learning systems"
        ],
        examplesTitle: "Examples:",
        examples: [
          "Tesla OTA evolution",
          "Samsung Ballie"
        ],
        image: { image: IVRDiagram, alt: "Spheres of a hyperconnected product - IVR Diagram", label: "IVR" },
        frameworkOverviewTitle: "Framework Overview",
        frameworkOverview: "Products today are not just built — they're designed to sense, learn, and evolve. This framework helps leaders architect products that merge physical, digital, and cognitive dimensions. It begins where the customer journey starts — at the point of origin of need. By embedding intelligence into every layer, organizations can anticipate behavior, enable self-upgrades, and deliver contextual value before demand is even expressed.",
        keyPillars: [
          { title: "Convergence:", description: "Integrate data, design, and device intelligence." },
          { title: "Context:", description: "Anticipate needs in real time." },
          { title: "Continuity:", description: "Enable self-evolving products through AI feedback loops." }
        ]
      },
      {
        stepNumber: 2,
        stepTitle: "DESIGN EXPERIENCE",
        frameworkTitle: "Design Adaptive Experiences",
        descriptionParagraph1: "Future-built enterprises don't build touchpoints. They design adaptive experiences that extract emotions in the Moment of Truth — when customers make critical decisions.",
        descriptionParagraph2: "",
        descriptionParagraph3: "",
        highlightedText: "Moment of Truth",
        bulletPoints: [
          "Intent-driven journeys",
          "Emotional network effects"
        ],
        examplesTitle: "Examples:",
        examples: [
          "Blinkit instant delivery",
          "Netflix personalized moments"
        ],
        image: { image: ScienceOfAssociation, alt: "The Science of Association - Emotional triggers and associations", label: "SCIENCE OF ASSOCIATIONS" },
        frameworkOverviewTitle: "Framework Overview",
        frameworkOverview: "Experience is no longer built — it's continuously designed through intelligence. This framework redefines experience from a collection of touchpoints to a stream of adaptive interactions. It enables brands to orchestrate micro-moments that respond to user intent, emotion, and context. By converging physical, digital, and emotional data, organizations can deliver frictionless journeys that feel personal, predictive, and persistent.",
        keyPillars: [
          { title: "Intent Recognition:", description: "Understand what drives each interaction." },
          { title: "Adaptive Orchestration:", description: "Use AI to tailor journeys in real time." },
          { title: "Emotional Network:", description: "Build lasting connections through experience loops." }
        ]
      },
      {
        stepNumber: 3,
        stepTitle: "DESIGN VALUE",
        frameworkTitle: "Design Co-Created Value",
        descriptionParagraph1: "Future-built enterprises don't deliver value. They design co-created value networks that extend value at the Tipping Point — where every participant multiplies collective returns.",
        descriptionParagraph2: "",
        descriptionParagraph3: "",
        highlightedText: "Tipping Point",
        bulletPoints: [
          "Participatory ecosystems",
          "Zero marginal cost networks"
        ],
        examplesTitle: "Examples:",
        examples: [
          "Amazon flywheel",
          "AirAsia travel ecosystem"
        ],
        image: { image: ValueExchangeNetwork, alt: "Value Exchange Network", label: "VALUE EXCHANGE NETWORK" },
        frameworkOverviewTitle: "Framework Overview",
        frameworkOverview: "Value isn't delivered. It's co-created through convergence. This framework enables organizations to move from transactional relationships to participatory ecosystems — where every actor contributes data, insights, or capabilities that multiply collective value. It helps design value networks that operate at zero marginal cost and compound with every interaction.",
        keyPillars: [
          { title: "Network Effects:", description: "Build compounding value across ecosystem nodes." },
          { title: "Data Exchange:", description: "Treat data as the currency of collaboration." },
          { title: "Trust Infrastructure:", description: "Enable frictionless participation at scale." }
        ]
      },
      {
        stepNumber: 4,
        stepTitle: "DESIGN SCALE",
        frameworkTitle: "Design Multiplier Effects",
        descriptionParagraph1: "Future-built enterprises don't scale linearly. They design multiplier effects that amplify network velocity — where each success compounds into exponential growth.",
        descriptionParagraph2: "",
        descriptionParagraph3: "",
        highlightedText: "network velocity",
        bulletPoints: [
          "Self-reinforcing loops",
          "Geometric amplification"
        ],
        examplesTitle: "Examples:",
        examples: [
          "NVIDIA platform scaling",
          "Ecosystem leverage models"
        ],
        image: { image: VenNetworkEffects, alt: "Network effects of Value Exchange Network", label: "VEN NETWORK EFFECTS" },
        frameworkOverviewTitle: "Framework Overview",
        frameworkOverview: "Scale isn't about size — it's about velocity and amplification. This framework reveals how organizations can design multiplier effects that accelerate growth geometrically, not linearly. By connecting product, platform, and ecosystem levers, leaders can create self-reinforcing loops where each success feeds the next. It's a guide to turning every input into a catalyst for compounding returns.",
        keyPillars: [
          { title: "Feedback Loops:", description: "Use data to continuously enhance performance." },
          { title: "Platform Leverage:", description: "Amplify reach and efficiency." },
          { title: "Network Density:", description: "Increase value with every new participant." }
        ]
      },
      {
        stepNumber: 5,
        stepTitle: "DESIGN EXPONENTIALITY",
        frameworkTitle: "Design Exponential Organizations",
        descriptionParagraph1: "Future-built enterprises don't evolve by chance. They design exponential organizations that self-scale and self-evolve — where AI, data, and networks form the operating DNA.",
        descriptionParagraph2: "",
        descriptionParagraph3: "",
        highlightedText: "self-scale and self-evolve",
        bulletPoints: [
          "Self-learning systems",
          "Frictionless scaling"
        ],
        examplesTitle: "Examples:",
        examples: [
          "OpenAI cognitive architecture",
          "Tesla digital DNA"
        ],
        image: { image: CognitiveEnterprise, alt: "Cognitive Enterprise", label: "COGNITIVE ENTERPRISE" },
        frameworkOverviewTitle: "Framework Overview",
        frameworkOverview: "Exponential organizations are designed to evolve. This final framework integrates all previous principles into the operating DNA of an organization. It helps leaders design organizations that scale without friction — where AI, data, and networks form self-learning systems. From structure to culture, it enables enterprises to move from efficiency to exponentiality.",
        keyPillars: [
          { title: "Autonomous Systems:", description: "Build AI-augmented operations." },
          { title: "Network-Driven Growth:", description: "Scale through external ecosystems." },
          { title: "Purpose Alignment:", description: "Anchor exponential growth to a unifying mission." }
        ]
      }
    ]
  };

  // Merge Sanity data with fallback
  const data = timelineData || fallbackData;
  const mainTitle = data.mainTitle || fallbackData.mainTitle;
  const mainSubtitle = data.mainSubtitle || fallbackData.mainSubtitle;
  const sections = data.sections || fallbackData.sections;

  // Helper function to get section by step number
  const getSectionByStep = (stepNumber) => {
    return sections.find(section => section.stepNumber === stepNumber) || fallbackData.sections[stepNumber - 1];
  };

  // Helper function to get image URL from Sanity or fallback
  const getImageUrl = (imageData) => {
    if (!imageData) return null;
    if (typeof imageData === 'string') return imageData;
    if (imageData.asset?.url) return imageData.asset.url;
    if (imageData.asset) {
      try {
        return urlFor(imageData).width(1200).height(1200).url();
      } catch (e) {
        console.error('Error processing image:', e);
        return null;
      }
    }
    return imageData;
  };

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsScrolled(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Build timeline steps and subTabs from data
  const timelineSteps = sections.map(section => ({
    id: section.stepNumber,
    title: section.stepTitle
  }));

  const subTabs = sections.map(section => ({
    id: section.stepNumber,
    label: section.stepTitle
  }));


  const getContent = () => {
    // Get section data for active tab
    const section = getSectionByStep(activeSubTab);
    if (!section) return null;

    // Show content based on activeSubTab (the actual tab selected)
      return (
        <div className="min-h-[500px] lg:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="flex flex-col lg:flex-row h-full items-stretch">
            {/* Left Side - Content (30%) */}
            <div className="w-full lg:w-[30%] h-auto lg:h-full p-4 lg:p-6 xl:p-8 flex flex-col justify-center border-r-0 lg:border-r border-gray-600">
              <div>
              {section.frameworkTitle && section.frameworkTitle.trim() !== '' && (
                <h2 className="text-lg md:text-xl font-bold text-[#c1a35e] mb-6">
                  {section.frameworkTitle}
                </h2>
              )}
                <div className="mb-0">
                {section.descriptionParagraph1 && section.descriptionParagraph1.trim() !== '' && (
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                    {section.highlightedText && section.descriptionParagraph1.includes(section.highlightedText) ? (
                      section.descriptionParagraph1.split(section.highlightedText).map((part, i, arr) => 
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="text-[#c1a35e] font-semibold">{section.highlightedText}</span>
                          </span>
                        ) : part
                      )
                      ) : (
                      section.descriptionParagraph1
                      )}
                    </p>
                  )}
                {section.descriptionParagraph2 && section.descriptionParagraph2.trim() !== '' && (
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                    {section.descriptionParagraph2}
                    </p>
                  )}
                {section.descriptionParagraph3 && section.descriptionParagraph3.trim() !== '' && (
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    {section.descriptionParagraph3}
                    </p>
                  )}
                
                {/* Bullet Points */}
                {section.bulletPoints && section.bulletPoints.length > 0 && section.bulletPoints.some(point => point && point.trim() !== '') && (
                  <ul className="list-none space-y-2 mb-4">
                    {section.bulletPoints.filter(point => point && point.trim() !== '').map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#c1a35e] mr-2">•</span>
                        <span className="text-sm md:text-base text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Examples Section */}
                {section.examples && section.examples.length > 0 && section.examples.some(example => example && example.trim() !== '') && (
                  <div className="mt-4">
                    {section.examplesTitle && section.examplesTitle.trim() !== '' && (
                      <h3 className="text-base md:text-lg font-bold text-[#c1a35e] mb-2">
                        {section.examplesTitle}
                      </h3>
                    )}
                    <ul className="list-none space-y-1">
                      {section.examples.filter(example => example && example.trim() !== '').map((example, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-sm md:text-base text-gray-300">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                </div>
              </div>
            </div>
            
            {/* Right Side - Scrollable Content (70%) */}
            <div className="w-full lg:w-[70%] h-full lg:overflow-y-auto overflow-y-visible">
            {/* Single Image Section */}
            {section.image && getImageUrl(section.image.image) && (
              <div 
                className={`bg-white flex flex-col border-b border-gray-600 transition-all duration-1000 ease-out ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="!bg-white flex-1 p-3 sm:p-4 md:p-6 flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                      <Image
                    src={getImageUrl(section.image.image)}
                    alt={section.image.alt || section.image.label || 'Framework diagram'}
                        className="max-w-full max-h-full object-contain rounded-lg"
                    width={1920}
                    height={1118}
                        priority
                      />
                    </div>
                {/* Label Button below image */}
                {section.image.label && section.image.label.trim() !== '' && (
                      <div className="bg-[#c1a35e] text-black font-bold text-center py-2 sm:py-3 text-xs sm:text-sm">
                    {section.image.label}
                  </div>
                )}
              </div>
            )}

              {/* Framework Description and Key Pillars - Scrollable Content */}
            {((section.frameworkOverview && section.frameworkOverview.trim() !== '') || (section.keyPillars && section.keyPillars.length > 0 && section.keyPillars.some(p => p.title || p.description))) && (
                <div className={`bg-white p-4 sm:p-6 transition-all duration-1000 ease-out delay-500 ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="max-w-4xl mx-auto">
                  {section.frameworkOverviewTitle && section.frameworkOverviewTitle.trim() !== '' && (
                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                      {section.frameworkOverviewTitle}
                      </h2>
                    )}
                  {section.frameworkOverview && section.frameworkOverview.trim() !== '' && (
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      {section.frameworkOverview}
                      </p>
                    )}
                    
                  {section.keyPillars && section.keyPillars.length > 0 && section.keyPillars.some(p => (p.title && p.title.trim() !== '') || (p.description && p.description.trim() !== '')) && (
                      <>
                        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                          Key Pillars
                        </h2>
                        <div className="space-y-2 sm:space-y-3">
                        {section.keyPillars.filter(p => (p.title && p.title.trim() !== '') || (p.description && p.description.trim() !== '')).map((pillar, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-xs sm:text-sm text-gray-700">
                              {pillar.title && pillar.title.trim() !== '' && (
                                <span className="font-semibold text-gray-800">{pillar.title}</span>
                              )}
                              {pillar.description && pillar.description.trim() !== '' && (
                                <span> {pillar.description}</span>
                              )}
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
  };

  return (
    <div className="min-h-screen md:mx-[15px] mx-[5px] bg-[#f5f1eb] text-black py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="md:text-center text-left mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {mainTitle}
        </h2>
          {mainSubtitle && (
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              {mainSubtitle}
            </p>
          )}
        </div>

        {/* Timeline Navigation */}
        <div className="mb-8 sm:mb-12">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <h2 className="text-sm font-semibold mb-2 text-gray-400 text-center px-2">
                    {step.title}
                  </h2>
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
                    <h2 className="text-xs font-semibold mb-2 text-gray-400 text-center w-24">
                      {step.title}
                    </h2>
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
          {subTabs.map((tab, index) => (
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
              } ${index === subTabs.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="leading-tight">
                {tab.label}
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div ref={contentRef} className="bg-gray-900 border-l border-r border-b border-gray-700 overflow-hidden">
          {getContent()}
        </div>
      </div>
    </div>
  );
}