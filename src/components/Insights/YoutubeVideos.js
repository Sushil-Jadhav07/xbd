"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MdPlayArrow, MdAccessTime, MdClose, MdCalendarToday } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const YoutubeVideos = ({ youtubeVideosData }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [currentVideoTitle, setCurrentVideoTitle] = useState('');

  const fallbackData = {
    sectionTitle: "Featured YouTube Videos",
    sectionSubtitle: "Watch our latest insights and thought leadership content",
    videos: [
      {
        videoTitle: "Understanding Exponential Growth",
        videoUrl: "https://youtu.be/R7GPK8q4YR4",
        videoIframe: "https://youtu.be/R7GPK8q4YR4",
        videoDuration: "15:30",
        publishDate: "2024-01-15",
        videoDescription: "Learn about the principles of exponential growth in business"
      },
      {
        videoTitle: "Design Thinking for Business",
        videoUrl: "https://youtu.be/9qaSJzYnvqA",
        videoIframe: "https://youtu.be/9qaSJzYnvqA",
        videoDuration: "12:45",
        publishDate: "2024-01-10",
        videoDescription: "How design thinking can transform your business strategy"
      },
      {
        videoTitle: "Future of AI in Business",
        videoUrl: "https://youtu.be/R7GPK8q4YR4?si=J43ytf5ZDds34wY2",
        videoIframe: "https://youtu.be/R7GPK8q4YR4",
        videoDuration: "20:15",
        publishDate: "2024-01-05",
        videoDescription: "Exploring the impact of AI on modern business practices"
      },
      {
        videoTitle: "Future of AI in Business",
        videoUrl: "https://youtu.be/9qaSJzYnvqA",
        videoIframe: "https://youtu.be/9qaSJzYnvqA",
        videoDuration: "20:15",
        publishDate: "2024-01-05",
        videoDescription: "Exploring the impact of AI on modern business practices"
      }
    ]
  };

  const data = youtubeVideosData || fallbackData;

  const getVideoId = (url) => {
    try {
      // Handle youtu.be format
      if (url.includes('youtu.be/')) {
        return url.split('youtu.be/')[1].split('?')[0];
      }
      // Handle youtube.com/watch format
      if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get('v');
      }
      // Handle embed format
      if (url.includes('youtube.com/embed/')) {
        return url.split('embed/')[1].split('?')[0];
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const getEmbedUrl = (url) => {
    const videoId = getVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
  };

  const openVideoModal = (videoIframe, videoTitle) => {
    const embedUrl = getEmbedUrl(videoIframe);
    setCurrentVideoUrl(embedUrl);
    setCurrentVideoTitle(videoTitle);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoUrl('');
    setCurrentVideoTitle('');
  };

  const getYouTubeThumbnail = (videoUrl) => {
    try {
      const videoId = getVideoId(videoUrl);
      return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
    } catch (error) {
      return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white md:mx-[15px] mx-[5px] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.sectionTitle}
          </h1>
          {data.sectionSubtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.sectionSubtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        <div className="relative px-2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-youtube',
              prevEl: '.swiper-button-prev-youtube',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-youtube',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16 px-1"
          >
            {data.videos?.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col group">
                  {/* Video Thumbnail Container */}
                  <div 
                    className="relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer overflow-hidden"
                    onClick={() => openVideoModal(video.videoIframe, video.videoTitle)}
                  >
                    {/* Thumbnail Image */}
                    {video.thumbnailUrl?.asset?.url ? (
                      <Image
                        src={video.thumbnailUrl.asset.url}
                        alt={video.thumbnailUrl.alt || video.videoTitle}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={getYouTubeThumbnail(video.videoUrl) || '/placeholder-video.jpg'}
                        alt={video.videoTitle}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                        <MdPlayArrow className="text-white text-3xl md:text-4xl ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                      <MdAccessTime className="text-white text-sm" />
                      <span className="text-white text-sm font-semibold">
                        {video.videoDuration}
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-[#9d7035] transition-colors duration-300">
                      {video.videoTitle}
                    </h1>
                    
                    {video.videoDescription && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {video.videoDescription}
                      </p>
                    )}

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm pt-3 border-t border-gray-100">
                      <MdCalendarToday className="text-[#9d7035]" />
                      <span>{formatDate(video.publishDate)}</span>
                    </div>
                  </div>

                  {/* Watch Button */}
                  <div className="p-5 pt-0">
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white py-3 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MdPlayArrow className="text-xl" />
                      Watch Video
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="cursor-pointer swiper-button-prev-youtube absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all duration-200 -ml-6 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="cursor-pointer swiper-button-next-youtube absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all duration-200 -mr-6 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-youtube flex justify-center gap-2 mt-8"></div>
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

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-youtube .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-pagination-youtube .swiper-pagination-bullet-active {
          background: linear-gradient(to bottom right, #9d7035, #c1a35e);
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default YoutubeVideos;

