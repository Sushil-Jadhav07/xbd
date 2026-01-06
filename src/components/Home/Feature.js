"use client";

import { useState, useEffect } from 'react';
import { HiOutlineSparkles, HiOutlineEye, HiOutlineLink } from 'react-icons/hi';
import Link from 'next/link';
import { SiMaterialdesignicons } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import WhyByDesignThumbnail from '@/asset/whydesign.png';
import NetworkThumbnail from '@/asset/network.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Feature = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  // Handle ESC key to close video modal
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false);
      }
    }
    if (isVideoModalOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isVideoModalOpen]);

  // Static data with video cards
  const staticFeatures = [
    {
      title: "Design at the Core",
      description: "Integrate design thinking into your company's core to ensure growth occurs naturally, rather than relying on luck.",
      hasButton: true,
      iconType: "design",
      mediaType: "video",
      videoUrl: "https://www.youtube.com/watch?v=j2s7t_bNa3Q",
      videoThumbnail: NetworkThumbnail,
    },
    {
      title: "Network Power",
      description: "Unite converged systems so every move amplifies your reach and accelerates market dominance.",
      hasButton: false,
      iconType: "link",
      mediaType: "video",
      videoUrl: "https://youtu.be/6UFKW6JwzGk",
      videoThumbnail: WhyByDesignThumbnail,
    },
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'design':
        return SiMaterialdesignicons;
      case 'eye':
        return HiOutlineEye;
      case 'link':
        return HiOutlineLink;
      default:
        return HiOutlineSparkles;
    }
  };

  // Function to extract YouTube video ID
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnailUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      // Try maxresdefault first (highest quality), fallback to hqdefault
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return null;
  };

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  // Function to get Vimeo embed URL
  const getVimeoEmbedUrl = (url) => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? `https://player.vimeo.com/video/${match[1]}` : url;
  };

  // Function to get embed URL based on video source
  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return getYouTubeEmbedUrl(url);
    } else if (url.includes('vimeo.com')) {
      return getVimeoEmbedUrl(url);
    }
    return url; // For direct video URLs
  };

  // Check if video is an external URL
  const isExternalVideo = (feature) => {
    // Check if it's a video media type and has videoUrl
    if (feature.mediaType === 'video' && feature.videoUrl) {
      return true;
    }
    return false;
  };

  const handleVideoClick = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const renderIconOrImage = (feature, index) => {
    // Handle video media type - make it clickable to open in popup
    if (feature.mediaType === 'video' && isExternalVideo(feature) && feature.videoUrl) {
      return (
        <button
          type="button"
          onClick={() => handleVideoClick(feature.videoUrl)}
          className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl block cursor-pointer group"
        >
          <div className="relative w-full h-full bg-gray-100">
            {/* Video Thumbnail */}
            {feature.videoThumbnail ? (
              <Image
                src={feature.videoThumbnail}
                alt={feature.videoThumbnailAlt || feature.title || "Video Thumbnail"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
                priority={index === 0}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-lg">Video Thumbnail</div>
              </div>
            )}
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white bg-opacity-90 group-hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 transform group-hover:scale-110 pointer-events-auto">
                <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 pointer-events-none"></div>
        </button>
      );
    }
    // Handle image media type
    else if (feature.mediaType === 'image' && feature.image) {
      return (
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={typeof feature.image === 'string' ? feature.image : feature.image.src || feature.image}
            alt={feature.imageAlt || feature.image.alt || feature.title}
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 pointer-events-none"></div>
        </div>
      );
    }
    // Use thumbnail for first card if no media type is specified
    else if (index === 0) {
      return (
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={WhyByDesignThumbnail}
            alt="Why By Design Thumbnail"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 pointer-events-none"></div>
        </div>
      );
    }
    // Handle legacy useImage (for backward compatibility)
    else if (feature.useImage && feature.image) {
      return (
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={typeof feature.image === 'string' ? feature.image : feature.image.src || feature.image}
            alt={feature.imageAlt || feature.image.alt || feature.title}
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 pointer-events-none"></div>
        </div>
      );
    }
    // Default to icon
    else {
      const Icon = getIcon(feature.iconType);
      return (
        <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-lg">
          <Icon className="text-white text-2xl" />
        </div>
      );
    }
  };

  // Use static data only
  const features = staticFeatures;
  const title = "What is";
  const highlightText = "Exponential by Design";
  const subtitle = "The 3 Shifts That Turn Ordinary Companies Into Market Leaders";


  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(to bottom right, #9d7035, #c1a35e);
          width: 24px;
          border-radius: 5px;
        }
      `}} />
      <section className="dark:bg-white bg-white md:mx-[15px] mx-[5px] py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title} <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent">{highlightText}</span>
          </h2>
          <h4 className="text-sm md:text-base text-gray-700 max-w-3xl">
            {subtitle}
          </h4>
        </div>

        {/* Features Carousel */}
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              dynamicBullets: true,
              type: 'bullets',
            }}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
             }}
            className="pb-4"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-6 h-full flex flex-col">
                  {/* Icon, Image, or Video */}
                  <div className="flex justify-left">
                    {renderIconOrImage(feature, index)}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left flex-grow">
                    {feature.description}
                  </p>

                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Navigation Arrow */}
          <button 
            className="swiper-button-prev-custom absolute left-0 md:-left-13 top-[40%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            className="swiper-button-next-custom absolute right-0 md:right-[-50px] top-[40%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination - Absolutely Centered at Bottom */}
          <div className="swiper-pagination-custom absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2"></div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsVideoModalOpen(false)} />
          <div
            className="relative z-10 w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <iframe
                src={getEmbedUrl(selectedVideoUrl)}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors duration-200"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default Feature;