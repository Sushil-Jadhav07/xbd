"use client";

import { HiOutlineSparkles } from 'react-icons/hi';
import WhychooseImage from "../../asset/whyxbd.png"
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { useState } from 'react';

const Whychoose = ({ whyChooseData }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);


  // Fallback data
  const fallbackData = {
    label: "WHY EXPONENTIAL BY DESIGN",
    titleStart: "If You're",
    highlightText: "Still Scaling the Old Way",
    titleEnd: ", You're",
    boldText: "Already Behind",
    quote: "It's not about doing digital faster. It's about transforming fundamentally with AI-native models, self-scaling platforms, and a network-driven mindset. That's exponential by design.",
    authorName: "Anuj Pandey",
    authorTitle: "Author, Strategist & Founder of XBD",
    primaryButton: { text: "Discover X Now" },
    secondaryButton: { text: "Get the Growth Playbook" },
    mediaType: "image"
  };

  const data = whyChooseData || fallbackData;

  // Check if video is an uploaded file or external URL
  const isUploadedVideo = data.uploadedVideo && data.uploadedVideo.asset && data.uploadedVideo.asset._id;
  const isExternalVideo = data.videoUrl && !isUploadedVideo;

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : url;
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

  // Function to render media (image or video)
  const renderMedia = () => {
    // Handle uploaded video files
    if (data.mediaType === 'video' && isUploadedVideo) {
      try {
        // For file assets, use the direct URL instead of urlFor
        const videoUrl = data.uploadedVideo.asset.url;
        return (
          <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
            <video
              controls
              autoPlay={false}
              className="w-full h-full object-cover"
              poster={data.videoThumbnail && data.videoThumbnail.asset ? urlFor(data.videoThumbnail).width(800).height(600).url() : undefined}
            >
              <source src={videoUrl} type={data.uploadedVideo.asset.mimeType || "video/mp4"} />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      } catch (error) {
        console.error('Error generating video URL:', error);
        // Fallback to external video or image
        if (data.videoUrl) {
          return (
            <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
              <iframe
                src={getEmbedUrl(data.videoUrl)}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
        } else {
          // Fallback to image
          return (
            <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
              <Image src={WhychooseImage} alt="Why Choose" fill className="object-cover" />
            </div>
          );
        }
      }
    }
    // Handle external video URLs (YouTube/Vimeo)
    else if (data.mediaType === 'video' && isExternalVideo) {
      return (
        <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
          {isVideoPlaying ? (
            <iframe
              src={getEmbedUrl(data.videoUrl)}
              title="Video Player"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              {/* Video Thumbnail */}
              {data.videoThumbnail && data.videoThumbnail.asset ? (
                <Image
                  src={urlFor(data.videoThumbnail).width(800).height(600).url()}
                  alt={data.videoThumbnail.alt || "Video Thumbnail"}
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
                  onClick={() => setIsVideoPlaying(true)}
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-200 transform hover:scale-110"
                >
                  <svg className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      );
    } else if (data.mediaType === 'image' && data.image) {
      return (
        <div className="relative w-full h-full min-h-[400px]  overflow-hidden">
          <Image
            src={urlFor(data.image).width(800).height(600).url()}
            alt={data.image.alt || "Why Choose"}
            fill
            className="object-contain"
          />
        </div>
      );
    } else {
      // Fallback to static image
      return (
        <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
          <Image src={WhychooseImage} alt="Why Choose" fill className="object-cover" />
        </div>
      );
    }
  };

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-gray-200 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circle 1 */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 animate-float-slow"></div>
        
        {/* Floating Circle 2 */}
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/10 animate-float-medium"></div>
        
        {/* Floating Square */}
        <div className="absolute bottom-16 left-1/2 w-30 h-30 bg-gradient-to-br from-[#c1a35e]/10 to-amber-300/10 rotate-45 animate-float-slow-reverse"></div>
        
        {/* Floating Triangle */}
        <div className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-[#9d7035]/10 animate-float-medium-reverse"></div>
        
        {/* Large Circle Background */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#9d7035]/5 to-transparent animate-pulse-slow"></div>
        
        {/* Small Accent Circles */}
        <div className="absolute bottom-20 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-300/10 to-pink-300/10 animate-float-fast"></div>
        
        {/* Hexagon-like shape */}
        <div className="absolute top-1/2 left-12 w-24 h-24 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rotate-12 animate-float-slow"></div>
        
        {/* Small accent dot */}
        <div className="absolute bottom-40 left-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/15 to-orange-400/15 animate-float-fast-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Label */}
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
              <HiOutlineSparkles className="text-lg" />
              {data.label}
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {data.titleStart}{" "}
              <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent inline">
                {data.highlightText}
              </span>
              {data.titleEnd}{" "}
              <span className="font-black">{data.boldText}</span>
            </h2>

            {/* Quote */}
            <blockquote className="text-sm md:text-base text-gray-700 leading-relaxed">
              "{data.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="space-y-1">
              <div className="font-bold text-gray-900 text-lg">
                {data.authorName}
              </div>
              <div className="text-gray-600">
                {data.authorTitle}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              {data.primaryButton && (
                <Link
                  href={data.primaryButton.link || '#'}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  {data.primaryButton.text}
                </Link>
              )}
              
              {data.secondaryButton && (
                <Link
                  href={data.secondaryButton.link || '#'}
                  className="text-gray-900 font-semibold hover:text-black transition-colors duration-200 underline decoration-2 underline-offset-4"
                >
                  {data.secondaryButton.text}
                </Link>
              )}
            </div>
          </div>

          {/* Right Media (Image or Video) */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            {renderMedia()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;