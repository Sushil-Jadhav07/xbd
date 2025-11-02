'use client'
import React, { useState } from 'react'
import { MdPlayArrow, MdAccessTime, MdCalendarToday, MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md'
import Image from 'next/image'

const InsightsVideos = ({ insightsVideosData }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState('')
  const [currentVideoTitle, setCurrentVideoTitle] = useState('')

  // Fallback data
  const fallbackData = {
    title: "Featured Video Insights",
    subtitle: "Watch our curated collection of expert talks and keynotes",
    videosList: [
      {
        title: "Exponential Growth Strategies",
        date: "2024-10-15",
        duration: "45:30",
        videoUrl: "https://youtu.be/R7GPK8q4YR4"
      },
      {
        title: "Design Thinking Workshop",
        date: "2024-09-20",
        duration: "1:15:20",
        videoUrl: "https://youtu.be/9qaSJzYnvqA"
      },
      {
        title: "AI in Modern Business",
        date: "2024-08-10",
        duration: "38:45",
        videoUrl: "https://youtu.be/R7GPK8q4YR4"
      },
      {
        title: "Innovation Leadership",
        date: "2024-07-05",
        duration: "52:10",
        videoUrl: "https://youtu.be/9qaSJzYnvqA"
      }
    ]
  }

  const data = insightsVideosData || fallbackData
  const totalSlides = data.videosList?.length || 0

  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 2 : 1
    }
    return 1
  }

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView())

  // Update items per view on resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(totalSlides / itemsPerView) - 1
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(totalSlides / itemsPerView) - 1
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getVideoId = (url) => {
    try {
      if (url.includes('youtu.be/')) {
        return url.split('youtu.be/')[1].split('?')[0]
      }
      if (url.includes('youtube.com/watch?v=')) {
        const urlParams = new URLSearchParams(new URL(url).search)
        return urlParams.get('v')
      }
      if (url.includes('youtube.com/embed/')) {
        return url.split('embed/')[1].split('?')[0]
      }
      return null
    } catch (error) {
      return null
    }
  }

  const openVideoModal = (videoUrl, videoTitle) => {
    const videoId = getVideoId(videoUrl)
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : videoUrl
    
    setCurrentVideoUrl(embedUrl)
    setCurrentVideoTitle(videoTitle)
    setShowVideoModal(true)
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setCurrentVideoUrl('')
    setCurrentVideoTitle('')
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-8 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black px-2 mb-3">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {data.videosList?.map((video, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-2 md:px-4 ${itemsPerView === 2 ? 'w-1/2' : 'w-full'}`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 h-full">
                    
                    {/* Video Player */}
                    <div className="flex justify-center mb-4 md:mb-6">
                      {video.videoUrl ? (
                        <div 
                          className="relative w-full rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => openVideoModal(video.videoUrl, video.title)}
                        >
                          {/* YouTube Thumbnail */}
                          <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                            {/* YouTube Thumbnail Image */}
                            {(() => {
                              const videoId = getVideoId(video.videoUrl)
                              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null
                              
                              return thumbnailUrl ? (
                                <Image
                                  src={thumbnailUrl}
                                  alt={video.title}
                                  fill
                                  className="object-cover"
                                  onError={(e) => {
                                    e.target.style.display = 'none'
                                  }}
                                />
                              ) : null
                            })()}
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                <MdPlayArrow className="text-white text-3xl md:text-4xl ml-1" />
                              </div>
                            </div>

                            {/* Duration Badge */}
                            <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                              <MdAccessTime className="text-white text-sm" />
                              <span className="text-white text-sm font-semibold">
                                {video.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                          <div className="bg-gray-400 rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                            <MdPlayArrow className="text-gray-600 text-2xl md:text-3xl lg:text-4xl ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Video Info */}
                    <div className="space-y-3 md:space-y-4">
                      {/* Title */}
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 text-center line-clamp-2 min-h-[3.5rem]">
                        {video.title}
                      </h3>
                      
                      {/* Date and Duration */}
                      <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-3 border-t border-gray-200">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] p-2 rounded-lg">
                            <MdCalendarToday className="text-white text-base md:text-lg" />
                          </div>
                          <div className="text-left">
                            <p className="text-xs text-gray-500 font-medium">Date</p>
                            <p className="text-sm md:text-base font-semibold text-gray-900">
                              {formatDate(video.date)}
                            </p>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] p-2 rounded-lg">
                            <MdAccessTime className="text-white text-base md:text-lg" />
                          </div>
                          <div className="text-left">
                            <p className="text-xs text-gray-500 font-medium">Duration</p>
                            <p className="text-sm md:text-base font-semibold text-gray-900">
                              {video.duration}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Watch Button */}
                      <button
                        onClick={() => openVideoModal(video.videoUrl, video.title)}
                        className="w-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white py-3 md:py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                      >
                        <MdPlayArrow className="text-xl md:text-2xl" />
                        <span className="text-sm md:text-base">Watch Now</span>
                      </button>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white p-2 md:p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <MdChevronLeft className="text-2xl md:text-3xl lg:text-4xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white p-2 md:p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <MdChevronRight className="text-2xl md:text-3xl lg:text-4xl" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
            {Array.from({ length: Math.ceil(totalSlides / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-br from-[#9d7035] to-[#c1a35e] w-6 md:w-8'
                    : 'bg-gray-400 hover:bg-gray-500 w-2 md:w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>

      {/* Video Modal Popup */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl mx-2 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-1.5 md:p-2 rounded-full backdrop-blur-sm transition-all duration-200"
              aria-label="Close video"
            >
              <MdClose className="text-xl md:text-2xl" />
            </button>

            {/* Video Player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={currentVideoUrl}
                title={currentVideoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InsightsVideos

