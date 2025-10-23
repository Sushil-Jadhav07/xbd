'use client'
import { useState, useEffect, useRef } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef(null);

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
          <div className="h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (30%) */}
              <div className="w-[30%] h-full p-6 md:p-8 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-[#c1a35e] mb-6">
                    Hyper-converged Product Design Framework
                  </h2>
                  <div className="mb-0">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                      Design products that reach needs at the{' '}
                      <span className="text-[#c1a35e] font-semibold">Point of Origin</span> — before your customers even articulate them.
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                      Learn how intelligent, self-learning, and context-aware products converge physical, digital, and cognitive dimensions.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Think Tesla's over-the-air upgrades or Samsung's Ballie — products that evolve with users.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Scrollable Content (70%) */}
              <div className="w-[70%] h-full overflow-y-auto">
                {/* Two Images Section */}
                <div className="grid grid-cols-2">
                  {/* First Image - IVR Diagram */}
                  <div className={`bg-gray-700 flex flex-col border-r border-gray-600 transition-all duration-1000 ease-out ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={IVRDiagram}
                        alt="Spheres of a hyperconnected product - IVR Diagram"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    {/* IVR Button below image */}
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      IVR
                    </div>
                  </div>
                  
                  {/* Second Image - REACH Interconnect */}
                  <div className={`bg-gray-700 flex flex-col transition-all duration-1000 ease-out delay-300 ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={ReachInterconnect}
                        alt="The strategic imperative of Reach Interconnects"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    {/* REACH Interconnect Button below image */}
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      REACH Interconnect
                    </div>
                  </div>
                </div>

                {/* Framework Description and Key Pillars - Scrollable Content */}
                <div className={`bg-white p-6 transition-all duration-1000 ease-out delay-500 ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Framework Overview
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      Products today are not just built — they're designed to sense, learn, and evolve. This framework helps leaders architect products that merge physical, digital, and cognitive dimensions. It begins where the customer journey starts — at the point of origin of need. By embedding intelligence into every layer, organizations can anticipate behavior, enable self-upgrades, and deliver contextual value before demand is even expressed.
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      Key Pillars
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Convergence:</span> Integrate data, design, and device intelligence.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Context:</span> Anticipate needs in real time.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Continuity:</span> Enable self-evolving products through AI feedback loops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (30%) */}
              <div className="w-[30%] h-full p-6 md:p-8 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-[#c1a35e] mb-6">
                    Hyper-Converged Experience Design Framework
                  </h2>
                  <div className="mb-0">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                      Design experiences that extract emotions in the{' '}
                      <span className="text-[#c1a35e] font-semibold">Moment of Truth</span> — when customers make critical decisions.
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                      Discover how adaptive experiences bridge real-time context, emotional network effects, and intent-driven journeys.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Think Blinkit or Netflix's personalized micro-moments — experiences that adapt to user emotions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Scrollable Content (70%) */}
              <div className="w-[70%] h-full overflow-y-auto">
                {/* Two Images Section */}
                <div className="grid grid-cols-2">
                  {/* First Image - Science of Associations */}
                  <div className={`bg-gray-700 flex flex-col border-r border-gray-600 transition-all duration-1000 ease-out ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={ScienceOfAssociation}
                        alt="The Science of Association - Emotional triggers and associations"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    {/* Science of Associations Button below image */}
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      SCIENCE OF ASSOCIATIONS
                    </div>
                  </div>
                  
                  {/* Second Image - Engagement Flywheel */}
                  <div className={`bg-gray-700 flex flex-col transition-all duration-1000 ease-out delay-300 ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={EngagementFlywheel}
                        alt="Engagement Flywheel - Brand equity building process"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    {/* Engagement Flywheel Button below image */}
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      ENGAGEMENT FLYWHEEL
                    </div>
                  </div>
                </div>

                {/* Framework Description and Key Pillars - Scrollable Content */}
                <div className={`bg-white p-6 transition-all duration-1000 ease-out delay-500 ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Experience is no longer built — it's <em>continuously designed through intelligence</em>.
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      This framework redefines experience from a collection of touchpoints to a stream of adaptive interactions. It enables brands to orchestrate micro-moments that respond to user intent, emotion, and context. By converging physical, digital, and emotional data, organizations can deliver frictionless journeys that feel personal, predictive, and persistent.
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      Key Pillars
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Intent Recognition:</span> Understand what drives each interaction.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Adaptive Orchestration:</span> Use AI to tailor journeys in real time.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Emotional Network:</span> Build lasting connections through experience loops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (30%) */}
              <div className="w-[30%] h-full p-6 md:p-8 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-[#c1a35e] mb-6">
                    Hyper-converged Value Design Frameworks
                  </h2>
                  <div className="mb-0">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                      Design co-creation to extend value at the <span className="text-[#c1a35e] font-semibold">Tipping Point</span>.
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                      Build value networks that align product, platform, and ecosystem to multiply returns exponentially.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Think Amazon's flywheel or AirAsia's travel lifestyle ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Scrollable Content (70%) */}
              <div className="w-[70%] h-full overflow-y-auto">
                {/* Two Images Section */}
                <div className="grid grid-cols-2">
                  {/* First Image - Value Exchange Network */}
                  <div className={`bg-gray-700 flex flex-col border-r border-gray-600 transition-all duration-1000 ease-out ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={ValueExchangeNetwork}
                        alt="Value Exchange Network"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    {/* Button below image */}
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      VALUE EXCHANGE NETWORK
                    </div>
                  </div>

                  {/* Second Image - Value Lineage */}
                  <div className={`bg-gray-700 flex flex-col transition-all duration-1000 ease-out delay-300 ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={ValueLineage}
                        alt="Value Lineage across extended value chains"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    {/* Button below image */}
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      VALUE LINEAGE
                    </div>
                  </div>
                </div>

                {/* Framework Description and Key Pillars - Scrollable Content */}
                <div className={`bg-white p-6 transition-all duration-1000 ease-out delay-500 ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Value isn't delivered. It's <em>co-created through convergence</em>.
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      This framework enables organizations to move from transactional relationships to participatory ecosystems — where every actor contributes data, insights, or capabilities that multiply collective value. It helps design value networks that operate at zero marginal cost and compound with every interaction.
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      Key Pillars
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Network Effects:</span> Build compounding value across ecosystem nodes.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Data Exchange:</span> Treat data as the currency of collaboration.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Trust Infrastructure:</span> Enable frictionless participation at scale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (30%) */}
              <div className="w-[30%] h-full p-6 md:p-8 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-[#c1a35e] mb-6">
                    Multiplier effects to design Scale
                  </h2>
                  <div className="mb-0">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                      Scale is not about size — it's about <span className="text-[#c1a35e] font-semibold">network velocity</span> enabled by multiplier effects.
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                      Learn how to design multiplier effects that amplify value exchange and accelerate ecosystem compounding.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Example: NVIDIA's platform scaling through ecosystem leverage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Scrollable Content (70%) */}
              <div className="w-[70%] h-full overflow-y-auto">
                {/* Two Images Section */}
                <div className="grid grid-cols-2">
                  {/* First Image - VEN Network Effects */}
                  <div className={`bg-gray-700 flex flex-col border-r border-gray-600 transition-all duration-1000 ease-out ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={VenNetworkEffects}
                        alt="Network effects of Value Exchange Network"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      VEN NETWORK EFFECTS
                    </div>
                  </div>

                  {/* Second Image - Positioning/Offer/Service */}
                  <div className={`bg-gray-700 flex flex-col transition-all duration-1000 ease-out delay-300 ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={PositioningOfferService}
                        alt="Positioning, Offer and Service value driving Value lifecycle"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      POSITIONING & SERVICE
                    </div>
                  </div>
                </div>

                {/* Framework Description and Key Pillars - Scrollable Content */}
                <div className={`bg-white p-6 transition-all duration-1000 ease-out delay-500 ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Scale isn't about size — it's about <em>velocity and amplification</em>.
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      This framework reveals how organizations can design multiplier effects that accelerate growth geometrically, not linearly. By connecting product, platform, and ecosystem levers, leaders can create self-reinforcing loops where each success feeds the next. It's a guide to turning every input into a catalyst for compounding returns.
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      Key Pillars
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Feedback Loops:</span> Use data to continuously enhance performance.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Platform Leverage:</span> Amplify reach and efficiency.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Network Density:</span> Increase value with every new participant.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-stretch">
              {/* Left Side - Content (30%) */}
              <div className="w-[30%] h-full p-6 md:p-8 flex flex-col justify-center border-r border-gray-600">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-[#c1a35e] mb-6">
                    Formation of Exponential Organizations
                  </h2>
                  <div className="mb-0">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                      Exponential organizations are <span className="text-[#c1a35e] font-semibold">born from design</span>, not chance.
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                      Understand how AI, data, and network effects enable self-scaling and self-evolving enterprises.
                    </p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      Example: OpenAI, CRED, SpaceX, and Tesla's digital DNA.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Scrollable Content (70%) */}
              <div className="w-[70%] h-full overflow-y-auto">
                {/* Two Images Section */}
                <div className="grid grid-cols-2">
                  {/* First Image - Cognitive Enterprise */}
                  <div className={`bg-gray-700 flex flex-col border-r border-gray-600 transition-all duration-1000 ease-out ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={CognitiveEnterprise}
                        alt="Cognitive Enterprise"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      COGNITIVE ENTERPRISE
                    </div>
                  </div>

                  {/* Second Image - Cognitive Network */}
                  <div className={`bg-gray-700 flex flex-col transition-all duration-1000 ease-out delay-300 ${
                    isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <div className="flex-1 p-4 flex items-center justify-center min-h-[300px]">
                      <Image
                        src={CognitiveNetwork}
                        alt="Cognitive Network across Connect, Emotional and Value Network"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        width={400}
                        height={400}
                        priority
                      />
                    </div>
                    <div className="bg-[#c1a35e] text-black font-bold text-center py-3 text-sm">
                      COGNITIVE NETWORK
                    </div>
                  </div>
                </div>

                {/* Framework Description and Key Pillars - Scrollable Content */}
                <div className={`bg-white p-6 transition-all duration-1000 ease-out delay-500 ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Exponential organizations are <em>architected for intelligence</em>, not just growth.
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                      This framework reveals how to design organizations that scale exponentially through cognitive capabilities, adaptive systems, and self-evolving architectures. It transforms traditional hierarchies into intelligent networks that learn, predict, and optimize autonomously. The result: organizations that grow smarter and more valuable with every interaction.
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      Key Pillars
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Cognitive Architecture:</span> Build AI-native organizational DNA.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Adaptive Systems:</span> Enable self-evolving capabilities.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#c1a35e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-800">Intelligence Networks:</span> Connect cognitive capabilities across the ecosystem.
                        </p>
                      </div>
                    </div>
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
        <div ref={contentRef} className="bg-gray-900 border-l border-r border-b border-gray-700 overflow-hidden">
          {getContent()}
        </div>
      </div>
    </div>
  );
}