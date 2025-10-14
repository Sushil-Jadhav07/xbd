"use client";

import { HiOutlineSparkles, HiOutlineEye, HiOutlineLink } from 'react-icons/hi';
import Link from 'next/link';
import { SiMaterialdesignicons } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Feature = ({ whatIsExponentialData }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState({});

  // Fallback to static data if no Sanity data
  const staticFeatures = [
    {
      title: "Design at the Core",
      description: "Integrate design thinking into your company's core to ensure growth occurs naturally, rather than relying on luck.",
      hasButton: true,
      iconType: "design",
    },
    {
      title: "System-Level Vision",
      description: "View your business as a cohesive system and leverage unseen opportunities for remarkable outcomes.",
      hasButton: false,
      iconType: "eye",
    },
    {
      title: "Network Power",
      description: "Unite converged systems so every move amplifies your reach and accelerates market dominance.",
      hasButton: false,
      iconType: "link",
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

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}` : url;
  };

  // Function to get Vimeo embed URL
  const getVimeoEmbedUrl = (url) => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? `https://player.vimeo.com/video/${match[1]}?autoplay=1&muted=1&loop=1` : url;
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

  // Check if video is an uploaded file or external URL
  const isUploadedVideo = (feature) => feature.uploadedVideo && feature.uploadedVideo.asset && feature.uploadedVideo.asset._id;
  const isExternalVideo = (feature) => feature.videoUrl && !isUploadedVideo(feature);

  const renderIconOrImage = (feature, index) => {
    // Handle video media type
    if (feature.mediaType === 'video') {
      // Handle uploaded video files
      if (isUploadedVideo(feature)) {
        try {
          const videoUrl = feature.uploadedVideo.asset.url;
          return (
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <video
                controls
                autoPlay={true}
                muted
                loop
                className="w-full h-full object-cover"
                poster={feature.videoThumbnail && feature.videoThumbnail.asset ? urlFor(feature.videoThumbnail).width(500).height(400).url() : undefined}
              >
                <source src={videoUrl} type={feature.uploadedVideo.asset.mimeType || "video/mp4"} />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 pointer-events-none"></div>
            </div>
          );
        } catch (error) {
          console.error('Error rendering uploaded video:', error);
          // Fallback to icon
          const Icon = getIcon(feature.iconType);
          return (
            <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-lg">
              <Icon className="text-white text-2xl" />
            </div>
          );
        }
      }
      // Handle external video URLs (YouTube/Vimeo)
      else if (isExternalVideo(feature)) {
        const videoKey = `video-${index}`;
        const isPlaying = isVideoPlaying[videoKey];
        
        return (
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
            {isPlaying ? (
              <iframe
                src={getEmbedUrl(feature.videoUrl)}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                {/* Video Thumbnail */}
                {feature.videoThumbnail && feature.videoThumbnail.asset ? (
                  <Image
                    src={urlFor(feature.videoThumbnail).width(500).height(400).url()}
                    alt={feature.videoThumbnail.alt || "Video Thumbnail"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 text-lg">Video Thumbnail</div>
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button
                    onClick={() => setIsVideoPlaying(prev => ({ ...prev, [videoKey]: true }))}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 transform hover:scale-110"
                  >
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 pointer-events-none"></div>
          </div>
        );
      }
    }
    // Handle image media type
    else if (feature.mediaType === 'image' && feature.image) {
      return (
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={urlFor(feature.image).width(1000).height(1000).url()}
            alt={feature.image.alt || feature.title}
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
            src={urlFor(feature.image).width(1000).height(1000).url()}
            alt={feature.image.alt || feature.title}
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

  // Use Sanity data if available, otherwise use static data
  const features = whatIsExponentialData?.features || staticFeatures;
  const title = whatIsExponentialData?.title || "What is";
  const highlightText = whatIsExponentialData?.highlightText || "Exponential by Design";
  const subtitle = whatIsExponentialData?.subtitle || "The 3 Shifts That Turn Ordinary Companies Into Market Leaders";


  return (
    <section className="bg-[#f5f1eb] mx-[15px] py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title} <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent">{highlightText}</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl">
            {subtitle}
          </p>
        </div>

        {/* Features Carousel */}
        <div className="relative">
          <Swiper
            modules={[ Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-mobile',
              prevEl: '.swiper-button-prev-mobile',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
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
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
            className="pb-12"
            onSwiper={(swiper) => {
              // Store swiper instance for manual navigation if needed
              window.swiperInstance = swiper;
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-6 h-full flex flex-col">
                  {/* Icon, Image, or Video */}
                  <div className="flex justify-left">
                    {renderIconOrImage(feature, index)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left flex-grow">
                    {feature.description}
                  </p>

                  {/* Button (conditional) */}
                  {feature.hasButton && (
                    <div className="pt-4 flex justify-left">
                      <Link
                        href={feature.buttonLink || '#'}
                        className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-center"
                      >
                        {feature.buttonText || "Take a quick look"}
                      </Link>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination - Hidden on desktop */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2 md:hidden"></div>

          {/* Bottom Navigation Buttons - Visible on all devices */}
          {/* <div className="flex justify-center items-center gap-4 mt-6">
            <button 
              className="swiper-button-prev-mobile bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => {
                if (window.swiperInstance) {
                  window.swiperInstance.slidePrev();
                }
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="swiper-button-next-mobile bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => {
                if (window.swiperInstance) {
                  window.swiperInstance.slideNext();
                }
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Feature;