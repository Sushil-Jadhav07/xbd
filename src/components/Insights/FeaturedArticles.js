"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaLinkedin, FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedArticles = ({ featuredArticlesData }) => {
  const fallbackData = {
    sectionTitle: "Creative thoughts by Anuj Pandey",
    sectionSubtitle: "author of Exponential by Design, exploring how AI, design, and networks are redefining growth.",
    articles: [
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "October 20",
        postSnippet: "Some moments in your career don't announce themselves — they just arrive, quietly, but...",
        postImage: null,
        linkedinUrl: "https://www.linkedin.com/in/anujpandey1",
        likes: 53,
        comments: 38
      },
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "October 20",
        postSnippet: "Some moments in your career don't announce themselves — they just arrive, quietly, but...",
        postImage: null,
        linkedinUrl: "https://www.linkedin.com/in/anujpandey1",
        likes: 53,
        comments: 38
      },
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "October 20",
        postSnippet: "Some moments in your career don't announce themselves — they just arrive, quietly, but...",
        postImage: null,
        linkedinUrl: "https://www.linkedin.com/in/anujpandey1",
        likes: 53,
        comments: 38
      },
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "October 20",
        postSnippet: "Some moments in your career don't announce themselves — they just arrive, quietly, but...",
        postImage: null,
        linkedinUrl: "https://www.linkedin.com/in/anujpandey1",
        likes: 53,
        comments: 38
      },
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "October 20",
        postSnippet: "Some moments in your career don't announce themselves — they just arrive, quietly, but...",
        postImage: null,
        linkedinUrl: "https://www.linkedin.com/in/anujpandey1",
        likes: 53,
        comments: 38
      }
    ]
  };

  const data = featuredArticlesData || fallbackData;

  return (
    <section className="bg-white md:mx-[15px] mx-[5px] py-16 px-4">
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
        <div className="relative">
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
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {data.articles?.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Card Header */}
                  <div className="p-4 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      {article.authorImage?.asset?.url ? (
                        <Image
                          src={article.authorImage.asset.url}
                          alt={article.authorName}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] flex items-center justify-center text-white font-bold">
                          {article.authorName?.charAt(0) || 'A'}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-1">
                          <h1  className="font-semibold text-gray-900 text-sm">
                            {article.authorName || "Anuj Pandey"}
                          </h1>
                          {article.isVerified && (
                            <BsCheckCircleFill className="text-blue-500 text-xs" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{article.postDate}</p>
                      </div>
                    </div>
                    <FaLinkedin className="text-[#0077B5] text-2xl" />
                  </div>

                  {/* Post Snippet */}
                  <div className="p-4">
                    <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                      {article.postSnippet}
                      <span className="text-gray-500 ml-1">... Read more</span>
                    </p>
                  </div>

                  {/* Post Image */}
                  {article.postImage?.asset?.url && (
                    <div className="relative w-full h-64 bg-gray-100">
                      <Image
                        src={article.postImage.asset.url}
                        alt={article.postTitle || "Post image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Link Preview (if available) */}
                  {article.postTitle && (
                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        {article.postTitle}
                      </p>
                      <p className="text-xs text-gray-500">www.linkedin.com</p>
                    </div>
                  )}

                  {/* Engagement Stats */}
                  <div className="p-4 flex items-center gap-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaHeart className="text-red-500" />
                      <span className="text-sm">{article.likes || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaComment className="text-gray-500" />
                      <span className="text-sm">{article.comments || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 ml-auto">
                      <FaShare className="text-gray-500" />
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="p-4 pt-0">
                    <Link
                      href={article.linkedinUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="cursor-pointer swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors -ml-6">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="cursor-pointer swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors -mr-6">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(to bottom right, #9d7035, #c1a35e);
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default FeaturedArticles;

