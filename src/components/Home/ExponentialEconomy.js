"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const ExponentialEconomy = ({ exponentialData }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/TXpoo_112Oo";

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

  // Function to extract YouTube video ID
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  // Function to get embed URL based on video source
  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return getYouTubeEmbedUrl(url);
    }
    return url;
  };

  if (!exponentialData) return null;

  return (
    <section className="bg-black md:mx-[15px] mx-[5px] py-10 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="md:text-center text-left mb-8">
          {/* Main Question */}
          <h4 className=" text-white text-base md:text-lg mb-4 transition-colors duration-300">
            {exponentialData.mainQuestion || 'Do you want to be part of this'}{" "}
            <span className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent font-bold">
              {exponentialData.highlightedWord || 'Exponential'}
            </span>{" "}
            economy?
          </h4>

          {/* Framework Title */}
          <h2 className="text-3xl md:text-4xl font-bold  text-white mb-8 leading-tight transition-colors duration-300">
            {exponentialData.frameworkTitle || 'How to Transform: The \'X\' Framework'}
          </h2>

          {/* Description */}
          <p className=" text-white text-sm md:text-base max-w-5xl mx-auto leading-relaxed mb-8 transition-colors duration-300">
            {exponentialData.description || 'Our proprietary framework, backed by tools simplifies this complex assignment. This framework squeezes and extracts the growth secrets behind the prominently exponential organizations like Google, Amazon, Uber, NVIDIA and now OpenAI to distill the complexity into a simple framework to lead exponential growth. Every successful transformation maps back to the converging and diverging forces that create multiplier effects, creating agile and adaptable entities that evolve with the market.'}
          </p>
        </div>

        {/* Main X Framework Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Center - Banner Image */}
          <div className="relative w-full flex items-center justify-center">
            {exponentialData.bannerImage?.asset?.url && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="relative w-full max-w-8xl aspect-video group cursor-pointer"
                aria-label="Play video"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={exponentialData.bannerImage.asset.url}
                    alt={exponentialData.bannerImage.alt || 'X Framework Banner'}
                    fill
                    className="object-contain rounded-lg group-hover:opacity-90 transition-opacity duration-300"
                    priority
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white bg-opacity-90 group-hover:bg-opacity-100 rounded-full p-2 md:p-3 transition-all duration-200 transform group-hover:scale-110 pointer-events-auto shadow-lg">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            )}
          </div>


        </div>

        {/* Learn More Button */}
        {/* <div className="text-left mt-6">
          {exponentialData.learnMoreButton && (
            <Link
              href={exponentialData.learnMoreButton.link || '#'}
              className="bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              {exponentialData.learnMoreButton.text || 'Learn More'}
            </Link>
          )}
        </div> */}
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
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
                src={getEmbedUrl(videoUrl)}
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
  );
};

export default ExponentialEconomy;