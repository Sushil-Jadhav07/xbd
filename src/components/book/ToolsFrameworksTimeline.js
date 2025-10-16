'use client'
import { useState } from 'react';
import Image from 'next/image';
import IVRDiagram from '@/asset/tools/design products/Figure 11_Spheres of a hyperconnected product_1_11zon.webp';
import ReachInterconnect from '@/asset/tools/design products/Figure 29_The strategic imperative of Reach Interconnects_3_11zon.webp';
import ScienceOfAssociation from '@/asset/tools/design experience/Figure 32_The Science of Association_1_11zon.webp';
import EngagementFlywheel from '@/asset/tools/design experience/Figure 39_Engagement flywheel (1)_3_11zon.webp';
import ValueExchangeNetwork from '@/asset/tools/design value/Figure 55_Value Exchange Network_1_11zon.webp';
import ValueLineage from '@/asset/tools/design value/Figure 61_Value lineage across extended value chains_2_11zon.webp';
import VenNetworkEffects from '@/asset/tools/multiplier effect/Figure 57_Network effects of VEN (Value Exchange Network)_2_11zon.webp';
import PositioningOfferService from '@/asset/tools/multiplier effect/Figure 83_Positioning, Offer and Service value driving Value lifecycle_3_11zon.webp';
import CognitiveEnterprise from '@/asset/tools/design exponential/Figure 68_Cognitive Inference the new frontier of a Cognitive Enterprise_2_11zon.webp';
import CognitiveNetwork from '@/asset/tools/design exponential/Figure 76_Cognitive Network across Connect, Emotional and Value Network_3_11zon.webp';

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
          <div className="min-h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (35%) */}
              <div className="w-[35%] h-full p-8 md:p-12  flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#c1a35e] mb-6">
                    Hyper-converged Product Design Framework
                  </h2>
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                      Design products that reach needs at the{' '}
                      <span className="text-[#c1a35e] font-semibold">Point of Origin</span> — before your customers even articulate them.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                      Learn how intelligent, self-learning, and context-aware products converge physical, digital, and cognitive dimensions.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Think Tesla's over-the-air upgrades or Samsung's Ballie — products that evolve with users.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Two Images (65%) */}
              <div className="w-[65%] grid grid-cols-2 justify-center h-full">
                {/* First Image - IVR Diagram */}
                <div className="bg-gray-700 flex flex-col border-r border-gray-600">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={IVRDiagram}
                      alt="Spheres of a hyperconnected product - IVR Diagram"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  {/* IVR Button below image */}
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    IVR
                  </div>
                </div>
                
                {/* Second Image - REACH Interconnect */}
                <div className="bg-gray-700 flex flex-col">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={ReachInterconnect}
                      alt="The strategic imperative of Reach Interconnects"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  {/* REACH Interconnect Button below image */}
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    REACH Interconnect
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="min-h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (35%) */}
              <div className="w-[35%] h-full p-8 md:p-12 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#c1a35e] mb-6">
                    Hyper-Converged Experience Design Framework
                  </h2>
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                      Design experiences that extract emotions in the{' '}
                      <span className="text-[#c1a35e] font-semibold">Moment of Truth</span> — when customers make critical decisions.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                      Discover how adaptive experiences bridge real-time context, emotional network effects, and intent-driven journeys.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Think Blinkit or Netflix's personalized micro-moments — experiences that adapt to user emotions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Two Images (65%) */}
              <div className="w-[65%] grid grid-cols-2 justify-center h-full">
                {/* First Image - Science of Associations */}
                <div className="bg-gray-700 flex flex-col border-r border-gray-600">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={ScienceOfAssociation}
                      alt="The Science of Association - Emotional triggers and associations"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  {/* Science of Associations Button below image */}
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    SCIENCE OF ASSOCIATIONS
                  </div>
                </div>
                
                {/* Second Image - Engagement Flywheel */}
                <div className="bg-gray-700 flex flex-col">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={EngagementFlywheel}
                      alt="Engagement Flywheel - Brand equity building process"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  {/* Engagement Flywheel Button below image */}
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    ENGAGEMENT FLYWHEEL
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="min-h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (35%) */}
              <div className="w-[35%] h-[500px] p-8 md:p-12 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#c1a35e] mb-6">
                    Hyper-converged Value Design Frameworks
                  </h2>
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                      Design co-creation to extend value at the <span className="text-[#c1a35e] font-semibold">Tipping Point</span>.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                      Build value networks that align product, platform, and ecosystem to multiply returns exponentially.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Think Amazon’s flywheel or AirAsia’s travel lifestyle ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Two Images (65%) */}
              <div className="w-[65%] grid grid-cols-2 justify-center h-full">
                {/* First Image - Value Exchange Network */}
                <div className="bg-gray-700 flex flex-col border-r border-gray-600">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={ValueExchangeNetwork}
                      alt="Value Exchange Network"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  {/* Button below image */}
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    VALUE EXCHANGE NETWORK
                  </div>
                </div>

                {/* Second Image - Value Lineage */}
                <div className="bg-gray-700 flex flex-col">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={ValueLineage}
                      alt="Value Lineage across extended value chains"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  {/* Button below image */}
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    VALUE LINEAGE
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="min-h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (35%) */}
              <div className="w-[35%] h-[500px] p-8 md:p-12 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#c1a35e] mb-6">
                    Multiplier effects to design Scale
                  </h2>
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                      Scale is not about size — it’s about <span className="text-[#c1a35e] font-semibold">network velocity</span> enabled by multiplier effects.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                      Learn how to design multiplier effects that amplify value exchange and accelerate ecosystem compounding.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Example: NVIDIA’s platform scaling through ecosystem leverage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Two Images (65%) */}
              <div className="w-[65%] grid grid-cols-2 justify-center h-full">
                {/* First Image - Science of Associations (use VEN network effects here) */}
                <div className="bg-gray-700 flex flex-col border-r border-gray-600">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={VenNetworkEffects}
                      alt="Network effects of Value Exchange Network"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    SCIENCE OF ASSOCIATIONS
                  </div>
                </div>

                {/* Second Image - Engagement Flywheel (use Positioning/Offer/Service) */}
                <div className="bg-gray-700 flex flex-col">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={PositioningOfferService}
                      alt="Positioning, Offer and Service value driving Value lifecycle"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    ENGAGEMENT FLYWHEEL
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="min-h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (35%) */}
              <div className="w-[35%] h-[500px] p-8 md:p-12 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#c1a35e] mb-6">
                    Formation of Exponential Organizations
                  </h2>
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                      Exponential organizations are <span className="text-[#c1a35e] font-semibold">born from design</span>, not chance.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                      Understand how AI, data, and network effects enable self-scaling and self-evolving enterprises.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Example: OpenAI, CRED, SpaceX, and Tesla’s digital DNA.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Two Images (65%) */}
              <div className="w-[65%] grid grid-cols-2 justify-center h-full">
                {/* First Image - Cognitive Enterprise */}
                <div className="bg-gray-700 flex flex-col border-r border-gray-600">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={CognitiveEnterprise}
                      alt="Cognitive Enterprise"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    COGNITIVE ENTERPRISE
                  </div>
                </div>

                {/* Second Image - Cognitive Network */}
                <div className="bg-gray-700 flex flex-col">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <Image
                      src={CognitiveNetwork}
                      alt="Cognitive Network across Connect, Emotional and Value Network"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                    COGNITIVE NETWORK
                  </div>
                </div>
              </div>
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
                {tab.label}
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