"use client";

import { HiOutlineSparkles } from 'react-icons/hi';
import WhychooseImage from "../../asset/whyxbd.png"
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

const Whychoose = ({ whyChooseData }) => {


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
    secondaryButton: { text: "Get a Assessment now" },
    mediaType: "image"
  };

  const data = whyChooseData || fallbackData;

  // Check if video is an uploaded file or external URL
  const isUploadedVideo = data.uploadedVideo && data.uploadedVideo.asset && data.uploadedVideo.asset._id;
  const isExternalVideo = (data.mediaType === 'video' || data.videoUrl) && data.videoUrl && !isUploadedVideo;

  // Function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url, autoplay = false) => {
    if (!url) return null;
    
    // Handle various YouTube URL formats
    let videoId = null;
    
    // Pattern 1: youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([^&#]*)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }
    
    // Pattern 2: youtu.be/VIDEO_ID
    if (!videoId) {
      const shortMatch = url.match(/youtu\.be\/([^?#&]*)/);
      if (shortMatch) {
        videoId = shortMatch[1];
      }
    }
    
    // Pattern 3: youtube.com/embed/VIDEO_ID
    if (!videoId) {
      const embedMatch = url.match(/youtube\.com\/embed\/([^?#&]*)/);
      if (embedMatch) {
        videoId = embedMatch[1];
      }
    }
    
    // Pattern 4: youtube.com/v/VIDEO_ID
    if (!videoId) {
      const vMatch = url.match(/youtube\.com\/v\/([^?#&]*)/);
      if (vMatch) {
        videoId = vMatch[1];
      }
    }
    
    if (videoId && videoId.length === 11) {
      const params = new URLSearchParams();
      params.append('rel', '0');
      params.append('modestbranding', '1');
      if (autoplay) {
        params.append('autoplay', '1');
      }
      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }
    
    return url;
  };

  // Function to get Vimeo embed URL
  const getVimeoEmbedUrl = (url) => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? `https://player.vimeo.com/video/${match[1]}` : url;
  };

  // Function to get embed URL based on video source
  const getEmbedUrl = (url, autoplay = false) => {
    if (!url) return null;
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return getYouTubeEmbedUrl(url, autoplay);
    } else if (url.includes('vimeo.com')) {
      const embedUrl = getVimeoEmbedUrl(url);
      return autoplay ? `${embedUrl}?autoplay=1` : embedUrl;
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
          <div className="relative w-full aspect-video min-h-[250px] md:min-h-[400px] rounded-3xl overflow-hidden bg-black">
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
          const embedUrl = getEmbedUrl(data.videoUrl, false);
          return (
            <div className="relative w-full aspect-video min-h-[250px] md:min-h-[400px] rounded-3xl overflow-hidden bg-black">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Video Player"
                  className="w-full h-full absolute inset-0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  Invalid video URL
                </div>
              )}
            </div>
          );
        } else {
          // Fallback to image
          return (
            <div className="relative w-full aspect-video min-h-[250px] md:min-h-[400px] rounded-3xl overflow-hidden">
              <Image src={WhychooseImage} alt="Why Choose" fill className="object-cover" />
            </div>
          );
        }
      }
    }
    // Handle external video URLs (YouTube/Vimeo)
    // Show video if mediaType is 'video' OR if videoUrl exists and mediaType is not explicitly 'image'
    else if ((data.mediaType === 'video' || (data.videoUrl && data.mediaType !== 'image')) && isExternalVideo && data.videoUrl) {
      const embedUrl = getEmbedUrl(data.videoUrl, false);
      
      return (
        <div className="relative w-full aspect-video min-h-[250px] md:min-h-[400px] rounded-3xl overflow-hidden bg-black">
          {embedUrl ? (
            <iframe
              key={embedUrl} // Force re-render when URL changes
              src={embedUrl}
              title="Video Player"
              className="w-full h-full absolute inset-0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              Invalid video URL
            </div>
          )}
        </div>
      );
    } else if (data.mediaType === 'image' && data.image) {
      return (
        <div className="relative w-full aspect-video min-h-[250px] md:min-h-[400px] overflow-hidden rounded-3xl">
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
        <div className="relative w-full aspect-video min-h-[250px] md:min-h-[400px] rounded-3xl overflow-hidden">
          <Image src={WhychooseImage} alt="Why Choose" fill className="object-cover" />
        </div>
      );
    }
  };

  return (
    <section className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-12 md:py-20 lg:py-24  relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-auto space-y-4 md:space-y-6">
            {/* Label */}
            <h4 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              <HiOutlineSparkles className="text-base sm:text-lg" />
              {data.label}
            </h4>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-900 text-white leading-tight">
              {data.titleStart}{" "}
              <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent inline">
                {data.highlightText}
              </span>
              {data.titleEnd}{" "}
              <span className="font-black">{data.boldText}</span>
            </h2>

            {/* Quote */}
            
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-900 leading-relaxed">
              "{data.quote}"
            </p>
            

            {/* Author Info */}
            <div className="space-y-1">
              <h2 className="font-bold text-gray-900 dark:text-gray-900 text-base md:text-lg">
                {data.authorName}
              </h2>
              <h4 className="text-sm md:text-base text-gray-600 dark:text-gray-900">
                {data.authorTitle}
              </h4>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2 md:pt-4">
              {data.primaryButton && (
                <Link
                  href={data.primaryButton.link || '#'}
                  className="bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 w-full sm:w-auto text-center"
                >
                  {data.primaryButton.text}
                </Link>
              )}
              
              {data.secondaryButton && (
                <Link
                  href={data.secondaryButton.link || '#'}
                  className="text-gray-900 dark:text-gray-900 font-semibold text-sm sm:text-base hover:text-black dark:hover:text-gray-300 transition-colors duration-200 underline decoration-2 underline-offset-4 text-center sm:text-left w-full sm:w-auto"
                >
                  {data.secondaryButton.text}
                </Link>
              )}
            </div>
          </div>

          {/* Right Media (Image or Video) */}
          <div className="flex-1 w-full lg:w-auto max-w-full lg:max-w-none">
            {renderMedia()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;