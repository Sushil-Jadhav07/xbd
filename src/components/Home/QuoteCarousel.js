"use client";

import { useState, useEffect, useRef } from 'react';
import { MdImage, MdPlayCircle } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import LeadFormModal from '../common/LeadFormModal';

const QuoteCarousel = ({ quoteCarouselData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  // Fallback data
  const fallbackData = {
    subtitle: "Join thousands of leaders who've accelerated their growth with our proven framework.",
    quoteText: "The Only Thing That's Changed In The World Is Everything",
    primaryButton: { text: "Start My Growth" },
    secondaryButton: { text: "See How It Works" },
    mediaType: 'image',
    image: { alt: "Growth Image" }
  };

  const data = quoteCarouselData || fallbackData;


  // Handle hover events for video
  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsVideoPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsVideoPlaying(false);
  };

  // Control video playback based on isVideoPlaying state
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to beginning when hover ends
      }
    }
  }, [isVideoPlaying]);

  // Helper function to get YouTube video ID
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Helper function to get Vimeo video ID
  const getVimeoVideoId = (url) => {
    if (!url) return null;
    const regExp = /vimeo.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // Render media content
  const renderMedia = () => {
    const mediaType = data.mediaType || 'image';

    if (mediaType === 'image' && data.image) {
      const imageUrl = data.image?.asset?.url || data.image;
      const altText = data.imageAlt || data.image?.alt || "Quote Carousel Image";
      
      return (
        <div className="w-full h-full relative min-h-[400px]">
          <Image 
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover"
          />
        </div>
      );
    }

    if (mediaType === 'video' && data.videoUrl) {
      const youtubeId = getYouTubeVideoId(data.videoUrl);
      const vimeoId = getVimeoVideoId(data.videoUrl);

      if (youtubeId) {
        return (
          <div className="w-full h-full min-h-[400px]">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full min-h-[400px]"
              style={{ border: 'none' }}
            />
          </div>
        );
      }

      if (vimeoId) {
        return (
          <div className="w-full h-full min-h-[400px]">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0`}
              title="Vimeo video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full min-h-[400px]"
              style={{ border: 'none' }}
            />
          </div>
        );
      }
    }

    if (mediaType === 'videoUpload' && data.uploadedVideo?.asset?.url) {
      return (
        <div 
          className="w-full h-full relative min-h-[400px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Thumbnail - shown when video is not playing */}
          {!isVideoPlaying && data.videoThumbnail?.asset?.url && (
            <Image
              src={data.videoThumbnail.asset.url}
              alt={data.videoThumbnail.alt || "Video Thumbnail"}
              fill
              className="object-cover"
            />
          )}
          
          {/* Video - shown when playing or no thumbnail */}
          {(isVideoPlaying || !data.videoThumbnail?.asset?.url) && (
            <video
              ref={videoRef}
              src={data.uploadedVideo.asset.url}
              controls={isVideoPlaying && !isHovering}
              autoPlay={isVideoPlaying}
              muted
              loop
              className="w-full h-full min-h-[400px] object-cover"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      );
    }

    // Fallback placeholder
    return <MdImage className="text-gray-500 dark:text-gray-300 text-5xl" />;
  };

  return (
    <>
    <section className="dark:bg-white bg-white md:mx-[15px] mx-[5px] py-12 md:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 lg:mb-6">
          <h1 className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-[#dbdbdb] rounded-3xl relative overflow-hidden">
          {/* Large Quote Mark */}
          <div className="absolute top-8 left-8 text-gray-400 text-8xl md:text-9xl font-serif leading-none opacity-50 z-10">
            ❝
          </div>

          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] md:min-h-[600px]">
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col items-center text-center justify-center relative z-20">
              <div className="space-y-8">
                {/* Quote Text */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:!text-black leading-tight">
                  {data.quoteText}
                </h3>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row text-center justify-center items-center gap-4">
                  {data.primaryButton && (
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer font-semibold hover:bg-gray-800 transition-colors duration-200"
                    >
                      {data.primaryButton.text}
                    </button>
                  )}
                  
                  {data.secondaryButton && (
                    <Link
                      href={data.secondaryButton.link || '#'}
                      className="text-gray-900 dark:!text-black font-semibold hover:text-black dark:hover:text-white transition-colors duration-200 underline decoration-2 underline-offset-4"
                    >
                      {data.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Right Media - Edge to Edge */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-0">
              {/* Media Container */}
              <div className="relative overflow-hidden h-full w-full bg-[#dbdbdb] dark:bg-gray-900 lg:rounded-r-3xl">
                {/* Single Media Item */}
                <div className="w-full h-full relative min-h-[400px] lg:min-h-0">
                  {/* Media Content */}
                  <div className="w-full h-full bg-[#dbdbdb] dark:bg-gray-900 flex items-center justify-center relative min-h-[400px] lg:min-h-0">
                    {renderMedia()}
                    
                    {/* Subtle gradient overlay - only for images */}
                    {(data.mediaType === 'image' || !data.mediaType) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 opacity-30 pointer-events-none"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LeadFormModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Start My Growth"
    />
    </>
  );
};

export default QuoteCarousel;