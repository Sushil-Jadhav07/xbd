'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdPlayArrow } from 'react-icons/md'

const MeetAuthor = ({ meetAuthorData }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  
  // Fallback data
  const fallbackData = {
    title: "Meet the Author Behind the Framework",
    quote: "I Wrote This Book Not To Add To The Noise, But To Solve For The Signal.",
    authorBio: "Over 2 decades of consulting corporations, An enterprise architect and a design thinker",
    previousBook: "Author of DISRUPTIVE DIGITAL: THE NEW NORMAL (published 2018).",
    primaryButton: { text: "Contact Us" },
    secondaryButton: { text: "See How It Works" },
    videoSection: {
      videoTitle: "Watch the Author",
      videoDescription: "Learn more about the author and the framework",
      mediaType: "url",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  }

  const data = meetAuthorData || fallbackData
  
  // Get video data
  const videoSection = data.videoSection || {}
  const videoUrl = videoSection.videoUrl
  const uploadedVideo = videoSection.uploadedVideo?.asset?.url
  const videoThumbnail = videoSection.videoThumbnail?.asset?.url
  const mediaType = videoSection.mediaType || 'url'
  
  // Determine which video to use
  const finalVideoUrl = mediaType === 'upload' ? uploadedVideo : videoUrl
  const hasVideo = finalVideoUrl && finalVideoUrl.trim() !== ''
  
  // Debug logging (commented out for production)
  // console.log('Video Section Data:', videoSection)
  // console.log('Video Thumbnail URL:', videoThumbnail)
  // console.log('Has Video:', hasVideo)
  
  // Handle video click
  const handleVideoClick = () => {
    if (!hasVideo) return
    
    if (mediaType === 'url' && videoUrl) {
      // Open external video in new tab
      window.open(videoUrl, '_blank')
    } else if (mediaType === 'upload' && uploadedVideo) {
      // Open modal for uploaded video
      setIsVideoModalOpen(true)
    }
  }

  return (
    <div className="bg-white md:mx-[15px] mx-[5px] py-12 lg:py-16 relative overflow-hidden">
      {/* Animated Floating Shapes - Unique Variations */}
     

      <div className="max-w-7xl mx-auto px-2 md:px-0 relative z-10">
        
        {/* Header Section */}
        <div className="md:text-center text-left mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {data.title}
          </h2>
        </div>
        
        {/* Main Content Container */}
        <div className="bg-gray-100 rounded-lg p-0 lg:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch min-h-[450px]">
            
            {/* Left Side - Quote and Author Info */}
            <div className="space-y-2 p-6 lg:p-16">
              <div className="text-gray-400 text-6xl lg:text-8xl mt-0">
                "
              </div>
              {/* Quote */}
              <div className="flex items-start gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  {data.quote}
                </h2>
              </div>
              
              {/* Author Details */}
              <div className="space-y-3">
                <p className="text-xs md:text-sm text-black leading-relaxed">
                  {data.authorBio}
                </p>
                {data.previousBook && (
                  <h4 className="text-sm md:text-base text-black leading-relaxed">
                    {data.previousBook.includes('DISRUPTIVE DIGITAL') ? (
                      <>
                        Author of <span className="font-semibold">DISRUPTIVE DIGITAL: THE NEW NORMAL</span> (published 2018).
                      </>
                    ) : (
                      data.previousBook
                    )}
                  </h4>
                )}
              </div>
              
              {/* CTA Elements */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {data.primaryButton && (
                  <Link
                    href={data.primaryButton.link || '#'}
                    className="bg-black text-white text-center px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base"
                  >
                    {data.primaryButton.text}
                  </Link>
                )}
                {data.secondaryButton && (
                  <Link
                    href={data.secondaryButton.link || '#'}
                    className="text-black font-medium text-center hover:text-gray-700 transition-colors duration-200 flex items-center text-base"
                  >
                    {data.secondaryButton.text}
                  </Link>
                )}
              </div>
            </div>
            
            {/* Right Side - Video Section */}
            <div className="flex justify-center lg:justify-center h-full">
              <div className="relative w-full h-full">
                {/* Video Player Container - Full Height */}
                <div className="relative w-full h-full md:rounded-br-2xl md:rounded-tr-2xl overflow-hidden">
                  {hasVideo ? (
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                      poster={videoThumbnail}
                    >
                      <source src={finalVideoUrl} type="video/mp4" />
                      <source src={finalVideoUrl} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MdPlayArrow className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm">No video available</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Video Title */}
                {videoSection.videoTitle && (
                  <h1 className="text-center text-sm text-gray-600 mt-3 font-medium">
                    {videoSection.videoTitle}
                  </h1>
                )}
                
                {/* Video Description */}
                {videoSection.videoDescription && (
                  <p className="text-center text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                    {videoSection.videoDescription}
                  </p>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal for Uploaded Videos */}
      {isVideoModalOpen && uploadedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ×
            </button>
            
            {/* Video Player */}
            <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
              <video
                controls
                autoPlay
                className="absolute top-0 left-0 w-full h-full"
                poster={videoThumbnail}
              >
                <source src={uploadedVideo} type="video/mp4" />
                <source src={uploadedVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video Info */}
            {(videoSection.videoTitle || videoSection.videoDescription) && (
              <div className="p-4 text-white">
                {videoSection.videoTitle && (
                  <h1 className="text-lg font-semibold mb-2">{videoSection.videoTitle}</h1>
                )}
                {videoSection.videoDescription && (
                  <p className="text-gray-300">{videoSection.videoDescription}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MeetAuthor