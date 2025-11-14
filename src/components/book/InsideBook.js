'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

const InsideBook = ({ insideBookData }) => {
  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  // Fallback data
  const fallbackData = {
    title: "Inside the Book: Your Map to Exponential Transformation",
    subtitle: "Every chapter reveals a framework that helps leaders transform complexity into compounding advantage.",
    chapters: [
      {
        chapter: "The Rise of Exponentials",
        videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq",
        videoTitle: "From Linear to Exponential Landscape",
        partLabel: "PART I",
        partTitle: "SCOPING",
        videoSubtitle: "Understanding the shift from traditional to exponential thinking",
        videoDescription: "Explore how exponential technologies are reshaping industries and creating new opportunities for growth.",
        highlights: [
          "Why traditional linear thinking no longer works— and why exponential is the new normal.",
          "Impact of exponential technologies on industries and the broader business ecosystem."
        ],
        caseStudies: [
          { name: "NVIDIA", logo: null },
          { name: "OpenAI", logo: null },
          { name: "Google", logo: null }
        ]
      },
      {
        chapter: "Converged Horizon",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh",
        videoTitle: "Hyper-converged economy is a new competitive reality",
        partLabel: "PART II",
        partTitle: "BUILDING THE FOUNDATION",
        highlights: [
          "Design for ecosystem",
          "See customers as partner in co-ceation value ecosystem"
        ],
        caseStudies: [
          { name: "SAMSUNG", logo: null },
          { name: "OpenAI", logo: null }
        ]
      },
      {
        chapter: "The Construct of Hyper-converged Ecosystem",
        videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq",
        videoTitle: "Orchestrating an ecosystem — one that learns, adapts, and delivers value",
        partLabel: "PART II",
        partTitle: "BUILDING THE FOUNDATION",
        highlights: [
          "Treating disruption as a design fuel",
          "See consumers, products and partners as part of one intelligent ecosystem"
        ],
        caseStudies: [
          { name: "Google", logo: null },
          { name: "amazon", logo: null },
          { name: "AIR NEW ZEALAND", logo: null }
        ]
      },
      {
        chapter: "The \"X\" factor unveiled",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh",
        videoTitle: "Extracting Emotions in the Moment of Truth",
        partLabel: "PART II",
        partTitle: "BUILDING THE FOUNDATION",
        highlights: [
          "Design emotionally charged networks.",
          "Reinforce them with every interaction.",
          "Use the Association strategy to gain virality."
        ],
        caseStudies: [
          { name: "Google", logo: null },
          { name: "Starbucks", logo: null },
          { name: "Blinkit", logo: null }
        ]
      },
      {
        chapter: "Design Products for X-treme REACH",
        videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq",
        videoTitle: "Extracting Emotions in the Moment of Truth",
        partLabel: "PART II",
        partTitle: "BUILDING THE FOUNDATION",
        highlights: [
          "Design emotionally charged networks.",
          "Reinforce them with every interaction.",
          "Use the Association strategy to gain virality."
        ],
        caseStudies: [
          { name: "CRED", logo: null },
          { name: "Starbucks", logo: null },
          { name: "Apple", logo: null }
        ]
      },
      {
        chapter: "Design Experiences by X-tracting Emotional Influence",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh",
        videoTitle: "Extracting Emotions in the Moment of Truth",
        partLabel: "PART II",
        partTitle: "BUILDING THE FOUNDATION",
        highlights: [
          "Design emotionally charged networks.",
          "Reinforce them with every interaction.",
          "Use the Association strategy to gain virality."
        ],
        caseStudies: [
          { name: "amazon", logo: null },
          { name: "mi", logo: null },
          { name: "xiaoMI", logo: null }
        ]
      },
      {
        chapter: "X-tending Value",
        videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq",
        videoTitle: "Leverage ecosystems to drive multiplier effects at scale",
        partLabel: "PART II",
        partTitle: "BUILDING THE FOUNDATION",
        highlights: [
          "Design for adjacency — extend value chains, not product lines.",
          "Build compounding flywheels across partners and consumers.",
          "Move from transaction to participation economies."
        ],
        caseStudies: [
          { name: "amazon", logo: null },
          { name: "mi", logo: null },
          { name: "xiaoMI", logo: null }
        ]
      },
      {
        chapter: "X-pand Intelligence",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh",
        videoTitle: "Intelligence that compounds, predicts and reinforces itself",
        partLabel: "PART III",
        partTitle: "SCALING",
        highlights: [
          "Cognitive Products —that sense, learn, and adapt.",
          "Cognitive journeys —that evolve in real time.",
          "Cognitive ecosystems —that dynamically optimize outcomes."
        ],
        caseStudies: [
          { name: "SAMSUNG", logo: null },
          { name: "blinkit", logo: null },
          { name: "Spotify", logo: null }
        ]
      },
      {
        chapter: "Exponential by Design",
        videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq",
        videoTitle: "The future doesn't belong to the fastest or the biggest. It belongs to those who are Exponential by Design.",
        partLabel: "PART III",
        partTitle: "SCALING",
        videoDescription: "Being exponential by design starts with a belief:",
        highlights: [
          "That chaos can be structured.",
          "That intelligence can be distributed.",
          "That growth can be intentional."
        ],
        narrativeCta: "ACT NOW BEFORE ITS TOO LATE"
      }
    ],
    videoSection: {
      videoTitle: "From Linear to Exponential Landscape",
      videoSubtitle: "Understanding the shift from traditional to exponential thinking",
        videoDescription: "Explore how exponential technologies are reshaping industries and creating new opportunities for growth.",
      videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq",
      highlights: [
        "Why traditional linear thinking no longer works— and why exponential is the new normal.",
        "Impact of exponential technologies on industries and the broader business ecosystem."
      ],
      caseStudies: [
        { name: "NVIDIA", logo: null },
        { name: "OpenAI", logo: null },
        { name: "Google", logo: null }
      ]
    },
    primaryButton: { 
      text: "Download a free chapter",
      link: "#"
    },
    secondaryButton: { 
      text: "Get the Book",
      link: "#"
    }
  }

  const data = insideBookData || fallbackData
  
  // Use chapters if available, otherwise fall back to modules
  const chapters = data.chapters || (data.modules?.map(m => ({ 
    chapter: m.module, 
    videoUrl: m.videoUrl,
    videoTitle: m.videoTitle,
    partLabel: m.partLabel,
    partTitle: m.partTitle,
    videoSubtitle: m.videoSubtitle,
    videoDescription: m.videoDescription,
    highlights: m.highlights,
    caseStudies: m.caseStudies,
    narrativeCta: m.narrativeCta
  }))) || fallbackData.chapters
  
  // State for active chapter
  const [activeChapterIndex, setActiveChapterIndex] = useState(0)

  // Get current active chapter data
  const activeChapter = chapters[activeChapterIndex] || chapters[0] || {}
  
  // Get current content from active chapter, fallback to videoSection if not available
  const currentVideoUrl = activeChapter.videoUrl || data.videoSection?.videoUrl || fallbackData.videoSection.videoUrl
  const currentVideoTitle = activeChapter.videoTitle || data.videoSection?.videoTitle || fallbackData.videoSection.videoTitle
  const currentPartLabel = activeChapter.partLabel || data.videoSection?.partLabel || ""
  const currentPartTitle = activeChapter.partTitle || data.videoSection?.partTitle || ""
  const currentVideoSubtitle = activeChapter.videoSubtitle || data.videoSection?.videoSubtitle || ""
  const currentVideoDescription = activeChapter.videoDescription || data.videoSection?.videoDescription || ""
  const currentHighlights = activeChapter.highlights || data.videoSection?.highlights || []
  const currentCaseStudies = activeChapter.caseStudies || data.videoSection?.caseStudies || []
  const currentNarrativeCta = activeChapter.narrativeCta || ""

  // Handle chapter click to change content
  const handleChapterClick = (_chapter, index) => {
    setActiveChapterIndex(index)
  }

  // Split title for styling
  const titleParts = (data.title || fallbackData.title).split(':')
  const titleFirstPart = titleParts[0] || ""
  const titleSecondPart = titleParts.slice(1).join(':') || ""

  return (
    <div className="bg-black md:mx-[15px] mx-[5px] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#c1a35e]">{titleFirstPart}</span>
            {titleSecondPart && <span className="text-white">: {titleSecondPart}</span>}
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
            {data.subtitle || fallbackData.subtitle}
          </p>
        </div>
        
        {/* Main Content Container - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          
          {/* Left Section: Table of Contents */}
          <div className="order-2 lg:order-1 flex flex-col">
            <div className="bg-gray-800  overflow-hidden">
              {chapters.map((chapter, index) => (
                <div
                  key={index}
                  onClick={() => handleChapterClick(chapter, index)}
                  className={`flex cursor-pointer transition-all duration-200 border-b-6 border-gray-900 last:border-b-0 ${
                    activeChapterIndex === index
                      ? 'bg-[#c1a35e] text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {/* Left Column: Number */}
                  <div className={`w-14 md:w-16 flex-shrink-0 py-3 md:py-4 text-sm md:text-base font-medium flex items-center justify-center border-r-8 border-gray-900 ${
                    activeChapterIndex === index ? 'text-black' : 'text-white'
                  }`}>
                    {index + 1}.
                  </div>
                  {/* Right Column: Chapter Title */}
                  <div className={`flex-1 py-3 md:py-4 px-3 md:px-4 text-sm md:text-base font-medium flex items-center ${
                    activeChapterIndex === index ? 'text-black font-bold' : 'text-white'
                  }`}>
                    {chapter.chapter}
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons at bottom of left column */}
            <div className="bg-gray-800 border border-black p-4 mt-6">
              <div className="flex flex-row gap-4">
                {data.primaryButton && (
                  <Link
                    href={data.primaryButton.link || '#'}
                    className="flex-1 bg-[#c1a35e] text-black py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-center text-sm md:text-base"
                  >
                    {data.primaryButton.text}
                  </Link>
                )}
                {data.secondaryButton && (
                  <Link
                    href={data.secondaryButton.link || '#'}
                    className="flex-1 bg-[#c1a35e] text-black py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 text-center text-sm md:text-base"
                  >
                    {data.secondaryButton.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Section: Video and Information */}
          <div className="order-1 lg:order-2">
            <div className="border-2 border-[#c1a35e] rounded-lg p-4 md:p-6">
              
              {/* Part Label and Title */}
              {(currentPartLabel || currentPartTitle) && (
                <div className="text-center mb-6">
                  {currentPartLabel && (
                    <p className="text-[#c1a35e] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
                      {currentPartLabel}
                    </p>
                  )}
                  {currentPartTitle && (
                    <p className="text-white text-lg md:text-2xl font-bold uppercase">
                      {currentPartTitle}
                    </p>
                  )}
                </div>
              )}
              
              {/* YouTube Video Embed */}
              {currentVideoUrl && (
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden bg-gray-900">
                  <iframe
                    key={currentVideoUrl}
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentVideoUrl)}?rel=0&modestbranding=1`}
                    title={currentVideoTitle}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              
              {/* Video Title */}
              {currentVideoTitle && (
                <h2 className="text-white text-lg md:text-xl font-semibold mb-4">
                  {currentVideoTitle}
                </h2>
              )}
              
              {/* Video Subtitle  */}
              {currentVideoSubtitle && (
                <p className="text-white text-base md:text-lg font-light mb-4">
                  {currentVideoSubtitle}
                </p>
              )}
              
              {/* Key Highlights */}
              {currentHighlights && currentHighlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-white text-sm md:text-base font-semibold mb-3">
                    Key Highlights:
                  </h3>
                  <ul className="space-y-3">
                    {currentHighlights.map((highlight, index) => (
                      <li key={index} className="text-white text-sm md:text-base flex items-start">
                        <span className="text-[#c1a35e] mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Case Studies */}
              {currentCaseStudies && currentCaseStudies.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <h3 className="text-white text-sm md:text-base font-semibold flex-shrink-0">
                      Case Studies
                    </h3>
                    <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                      {currentCaseStudies.map((company, index) => {
                        // Handle Sanity image object or direct URL
                        let logoUrl = null
                        if (company.logo) {
                          if (typeof company.logo === 'string') {
                            logoUrl = company.logo
                          } else if (company.logo.asset?.url) {
                            logoUrl = company.logo.asset.url
                          } else {
                            try {
                              logoUrl = urlFor(company.logo).width(200).height(100).url()
                            } catch (e) {
                              logoUrl = null
                            }
                          }
                        }
                        
                        return (
                          <div key={index} className="flex items-center">
                            {logoUrl ? (
                              <div className="relative w-28 h-14 md:w-36 md:h-20">
                                <Image
                                  src={logoUrl}
                                  alt={company.name}
                                  fill
                                  className="object-contain"
                                  unoptimized
                                />
                              </div>
                            ) : (
                              <div className="text-white text-xs md:text-sm font-medium opacity-70">
                                {company.name}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Description */}
              {currentVideoDescription && (
                <p className="text-white text-base md:text-lg font-normal mb-4 leading-relaxed">
                  {currentVideoDescription}
                </p>
              )}

              {/* Narrative CTA */}
              {currentNarrativeCta && (
                <div className="text-center mt-6">
                  <p className="text-white text-base md:text-lg font-semibold uppercase tracking-wide">
                    {currentNarrativeCta}
                  </p>
                </div>
              )}
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default InsideBook
