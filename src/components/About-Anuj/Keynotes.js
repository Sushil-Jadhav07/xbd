'use client'
import React, { useState } from 'react'
import { MdPlayArrow, MdAccessTime, MdLanguage, MdEvent, MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md'
import Image from 'next/image'
// import BgImage from "../../asset/pattern-10.png"

const Keynotes = ({ keynotesData }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState('')

  // Fallback data
  const fallbackData = {
    title: "Keynotes and Moderations at global Forums",
    keynotesList: [
      {
        title: "Digital by Design Travel Ecosystem",
        subtitle: "CAPA Aviation Summit, 2024",
        description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
        duration: "60 hours",
        availability: "On Request",
        mode: "Hybrid Mode",
        trustText: "Trusted by leaders",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Importance of Design for Airports",
        subtitle: "Airport Modernization Summit, 2024",
        description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
        duration: "60 hours",
        availability: "On Request",
        mode: "Onsite Mode",
        trustText: "Trusted by leaders",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Future of Aviation Design",
        subtitle: "Global Aviation Summit, 2024",
        description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
        duration: "60 hours",
        availability: "On Request",
        mode: "Onsite Mode",
        trustText: "Trusted by leaders",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Sustainable Aviation Practices",
        subtitle: "Green Aviation Forum, 2024",
        description: "Applied a pilot canvas and sequencing plan across customer lifecycle.",
        duration: "60 hours",
        availability: "On Request",
        mode: "Hybrid Mode",
        trustText: "Trusted by leaders",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ]
  }

  const data = keynotesData || fallbackData
  const totalSlides = data.keynotesList?.length || 0

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

  const openVideoModal = (videoUrl) => {
    // Convert YouTube URL to embed format
    let embedUrl = videoUrl
    
    if (videoUrl.includes('youtube.com/watch?v=')) {
      const videoId = videoUrl.split('v=')[1].split('&')[0]
      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    } else if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1].split('?')[0]
      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
    
    setCurrentVideoUrl(embedUrl)
    setShowVideoModal(true)
  }

  const getEmbedUrl = (videoUrl, autoplay = false) => {
    if (!videoUrl) return ''
    
    let embedUrl = videoUrl
    
    if (videoUrl.includes('youtube.com/watch?v=')) {
      const videoId = videoUrl.split('v=')[1].split('&')[0]
      embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`
    } else if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1].split('?')[0]
      embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`
    }
    
    return embedUrl
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setCurrentVideoUrl('')
  }

  return (
    <div className="bg-[#f5f1eb] mx-[15px] py-8 md:py-16 relative overflow-hidden">
      {/* Background Image */} 
      {/* <div className="absolute inset-0 opacity-10">
        <Image 
          src={BgImage} 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black px-2">
            {data.title}
          </h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {data.keynotesList?.map((keynote, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-2 md:px-4 ${itemsPerView === 2 ? 'w-1/2' : 'w-full'}`}
                >
                  <div className="bg-gray-100 rounded-lg p-4 md:p-6 lg:p-8 h-full">
                    
                    {/* Video Player */}
                    <div className="flex justify-center mb-4 md:mb-6">
                      {keynote.videoUrl ? (
                        <div 
                          className="relative w-full rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => openVideoModal(keynote.videoUrl)}
                        >
                          {/* YouTube Thumbnail */}
                          <div className="w-full aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
                            {/* YouTube Thumbnail Image */}
                            {(() => {
                              let thumbnailUrl = ''
                              if (keynote.videoUrl.includes('youtube.com/watch?v=')) {
                                const videoId = keynote.videoUrl.split('v=')[1].split('&')[0]
                                thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                              } else if (keynote.videoUrl.includes('youtu.be/')) {
                                const videoId = keynote.videoUrl.split('youtu.be/')[1].split('?')[0]
                                thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                              }
                              return thumbnailUrl ? (
                                <img
                                  src={thumbnailUrl}
                                  alt={keynote.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.style.display = 'none'
                                  }}
                                />
                              ) : null
                            })()}
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 group-hover:bg-black/30 transition-all duration-200">
                              <div className="bg-white/90 rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <MdPlayArrow className="text-gray-800 text-2xl md:text-3xl lg:text-4xl ml-1" />
                              </div>
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
                    
                    {/* Title */}
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-black mb-2 text-center">
                      {keynote.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-xs md:text-sm lg:text-base text-gray-700 mb-3 md:mb-4 text-center">
                      {keynote.subtitle}
                    </p>
                    
                    {/* Tags/Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                      {keynote.duration && (
                        <div className="bg-gray-200 text-black text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2">
                          <MdAccessTime className="text-gray-600 text-sm md:text-base" />
                          <span className="font-medium">{keynote.duration}</span>
                        </div>
                      )}
                      {keynote.availability && (
                        <div className="bg-gray-200 text-black text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2">
                          <MdLanguage className="text-gray-600 text-sm md:text-base" />
                          <span className="font-medium">{keynote.availability}</span>
                        </div>
                      )}
                      {keynote.mode && (
                        <div className="bg-gray-200 text-black text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2">
                          <MdEvent className="text-gray-600 text-sm md:text-base" />
                          <span className="font-medium">{keynote.mode}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-800 text-xs md:text-sm lg:text-base text-center mb-3 md:mb-4 leading-relaxed">
                      {keynote.description}
                    </p>
                    
                    {/* Footer */}
                    <p className="text-xs md:text-sm text-gray-700 text-center">
                      {keynote.trustText || "Trusted by leaders"}
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <MdChevronLeft className="text-2xl md:text-3xl lg:text-4xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 z-10"
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
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gray-800 w-6 md:w-8'
                    : 'bg-gray-400 hover:bg-gray-600'
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
                title="YouTube video player"
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

export default Keynotes