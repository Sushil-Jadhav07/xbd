'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

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
    title: "Inside the book: what you'll learn",
    subtitle: "Recognized by top publications & executives shaping the future",
    modules: [
      {
        module: "Rise of Exponentials",
        description: "How AI and convergence reset the growth curve.",
        videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq"
      },
      {
        module: "The X Framework",
        description: "A systemic model combining mindset, design, agility, and network effects.",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh"
      },
      {
        module: "System thinking for leaders",
        description: "Reduce complexity and act with clarity.",
        videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq"
      },
      {
        module: "Emotional influence + value",
        description: "Build trust to unlock new value streams.",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh"
      },
      {
        module: "Case studies",
        description: "Real examples from leaders who applied the framework.",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh"
      },
      {
        module: "Activation guide",
        description: "Turn insights into action with practical playbooks.",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=Q8r96tbEUZHlOWTh"
      }
    ],
    videoSection: {
      videoTitle: "Watch the Book Trailer",
      videoDescription: "Get a preview of what's inside Exponential by Design",
      videoUrl: "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq"
    },
    primaryButton: { text: "Get free chapter" },
    secondaryButton: { text: "Join updates" }
  }

  const data = insideBookData || fallbackData
  
  // State for current video
  const [currentVideo, setCurrentVideo] = useState({
    title: data.videoSection?.videoTitle || "Watch the Book Trailer",
    description: data.videoSection?.videoDescription || "Get a preview of what's inside Exponential by Design",
    url: data.videoSection?.videoUrl || "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq"
  })
  
  // State for active module
  const [activeModuleIndex, setActiveModuleIndex] = useState(null)

  // Handle module click to change video
  const handleModuleClick = (module, index) => {
    if (module.videoUrl) {
      setCurrentVideo({
        title: `${module.module} - Video Preview`,
        description: module.description,
        url: module.videoUrl
      })
      setActiveModuleIndex(index)
    }
  }

  // Reset to default video when clicking outside modules
  const handleResetVideo = () => {
    setCurrentVideo({
      title: data.videoSection?.videoTitle || "Watch the Book Trailer",
      description: data.videoSection?.videoDescription || "Get a preview of what's inside Exponential by Design",
      url: data.videoSection?.videoUrl || "https://youtu.be/9qaSJzYnvqA?si=wqwd8gjYtcFIS7Uq"
    })
    setActiveModuleIndex(null)
  }

  return (
    <div className="bg-white mx-[15px] py-16">
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {data.title}
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        {/* Main Content Container */}
        <div className="bg-gray-100 rounded-lg p-4 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Section: Modules */}
            <div className="lg:col-span-2">
              {/* Table Headers */}
              <div className="bg-gray-200 rounded-lg p-4 mb-3">
                <div className="grid grid-cols-2 gap-6">
                  <div className="font-bold text-black md:text-lg text-base">Module</div>
                  <div className="font-bold text-black md:text-lg text-base">Description</div>
                </div>
              </div>
              
              {/* Modules Table */}
              <div className="space-y-3">
                {data.modules?.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-lg p-4 border transition-all duration-200 cursor-pointer hover:shadow-md ${
                      activeModuleIndex === index 
                        ? 'border-black shadow-md bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleModuleClick(item, index)}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="font-bold text-black md:text-lg text-base flex items-center">
                        {item.module}
                        {/* {item.videoUrl && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            📹 Video
                          </span>
                        )} */}
                      </div>
                      <div className="text-gray-700 md:text-lg text-base leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Section: Video */}
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="md:text-2xl text-xl font-bold text-black">
                  {currentVideo.title}
                </h3>
                {/* {activeModuleIndex !== null && (
                  <button
                    onClick={handleResetVideo}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Reset to default
                  </button>
                )} */}
              </div>
              
              {currentVideo.description && (
                <p className="text-gray-600 mb-6 md:text-base text-sm">
                  {currentVideo.description}
                </p>
              )}
              
              {/* YouTube Video Embed */}
              {currentVideo.url && (
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    key={currentVideo.url} // Force re-render when video changes
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentVideo.url)}?rel=0&modestbranding=1`}
                    title={currentVideo.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              
              {/* CTA Buttons */}
              <div className="gap-3 flex items-center justify-center pt-6">
                {data.primaryButton && (
                  <Link
                    href={data.primaryButton.link || '#'}
                    className="w-full text-center bg-black text-white py-4 px-6 rounded-lg font-medium  hover:bg-gray-800 transition-colors duration-200 md:text-base text-sm"
                  >
                    {data.primaryButton.text}
                  </Link>
                )}
                {data.secondaryButton && (
                  <Link
                    href={data.secondaryButton.link || '#'}
                    className="w-full text-center bg-white text-black py-4 px-6 rounded-lg font-medium  hover:bg-gray-50 transition-colors duration-200 md:text-base text-sm"
                  >
                    {data.secondaryButton.text}
                  </Link>
                )}
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default InsideBook