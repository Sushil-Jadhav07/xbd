"use client";

import { useState, useEffect } from 'react';
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
  const [articleThumbnails, setArticleThumbnails] = useState({});

  const fallbackData = {
    sectionTitle: "Creative thoughts by Anuj Pandey",
    sectionSubtitle: "author of Exponential by Design, exploring how AI, design, and networks are redefining growth.",
    articles: [
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "August 20, 2025",
        postTitle: "Think in Networks: The Hidden Blueprint of Hyper-Convergence",
        postSnippet: "For decades, business strategy has been shaped by the logic of industries and linear value chains. But something profound has shifted since November 2022—the month generative AI captured the world's imagination. Hyper-convergence goes beyond connections; it's about the fusion of consumers, products, and experiences into dynamic, living ecosystems.",
        postImage: null,
        thumbnailUrl: null, // Will be fetched via API or can be added manually
        linkedinUrl: "https://www.linkedin.com/pulse/think-networks-hidden-blueprint-hyper-convergence-anuj-pandey-shwjc/?trackingId=d6kJ79BqTt%2BB%2FGPDulMiJA%3D%3D",
        likes: 22,
        comments: 13
      },
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "August 12, 2025",
        postTitle: "The Dawn of Hyper-Convergence",
        postSnippet: "Why Companies Must Reimagine Their Strategy as the World Moves Toward Autonomous Converged Ecosystems. Soon, everything will be connected, intelligent, and adaptive. The firms that dominate the next decade will not be those that merely connect—but those that converge, orchestrate, and adapt in networks of continuous value creation.",
        postImage: null,
        thumbnailUrl: null, // Will be fetched via API or can be added manually
        linkedinUrl: "https://www.linkedin.com/pulse/dawn-hyper-convergence-anuj-pandey-vzuuc/?trackingId=%2BX1XkhTnT1Kk%2Bw%2FOb5S9Cw%3D%3D",
        likes: 25,
        comments: 6
      },
      {
        authorName: "Anuj Pandey",
        isVerified: true,
        postDate: "August 2, 2025",
        postTitle: "The Genie Is Out of the Bottle",
        postSnippet: "Close your eyes for a moment. Remember the thrill of watching Aladdin soar through star-studded skies on his magic carpet? That genie—once confined to a lamp—is now free, and it's reshaping everything we know about business, creativity, and human potential. The AI revolution isn't coming; it's here, and it's transforming how we work, think, and create.",
        postImage: null,
        thumbnailUrl: null, // Will be fetched via API or can be added manually
        linkedinUrl: "https://www.linkedin.com/pulse/genie-out-bottle-anuj-pandey-d6dzc/?trackingId=jAXhTKcOT12CyfZZXIVBJA%3D%3D",
        likes: 28,
        comments: 14
      },
      // {
      //   authorName: "Anuj Pandey",
      //   isVerified: true,
      //   postDate: "October 20",
      //   postSnippet: "Some moments in your career don't announce themselves — they just arrive, quietly, but...",
      //   postImage: null,
      //   linkedinUrl: "https://www.linkedin.com/in/anujpandey1",
      //   likes: 53,
      //   comments: 38
      // },
      // {
      //   authorName: "Anuj Pandey",
      //   isVerified: true,
      //   postDate: "October 20",
      //   postSnippet: "Some moments in your career don't announce themselves — they just arrive, quietly, but...",
      //   postImage: null,
      //   linkedinUrl: "https://www.linkedin.com/in/anujpandey1",
      //   likes: 53,
      //   comments: 38
      // }
    ]
  };

  const data = featuredArticlesData || fallbackData;

  // Fetch LinkedIn article thumbnails
  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbnails = {};
      
      for (const article of data.articles || []) {
        // Only fetch if no postImage and no existing thumbnail
        if (article.linkedinUrl && !article.postImage?.asset?.url && !article.thumbnailUrl) {
          try {
            console.log('Fetching thumbnail for:', article.postTitle);
            
            // Try server-side API first
            const response = await fetch(
              `/api/linkedin-thumbnail?url=${encodeURIComponent(article.linkedinUrl)}`
            );
            
            if (response.ok) {
              const result = await response.json();
              console.log('API response for', article.postTitle, ':', result);
              if (result.imageUrl) {
                thumbnails[article.linkedinUrl] = result.imageUrl;
                console.log('Successfully fetched thumbnail for', article.postTitle);
                continue; // Success, move to next article
              }
            } else {
              console.log('API request failed for', article.postTitle, 'Status:', response.status);
            }
            
            // Fallback: Try client-side with CORS proxy
            try {
              console.log('Trying CORS proxy for', article.postTitle);
              const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(article.linkedinUrl)}`;
              const proxyResponse = await fetch(proxyUrl);
              
              if (proxyResponse.ok) {
                const proxyData = await proxyResponse.json();
                const html = proxyData.contents;
                
                // Extract Open Graph image with multiple patterns
                const patterns = [
                  /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i,
                  /<meta\s+property=["']og:image:secure_url["']\s+content=["']([^"']+)["']/i,
                  /property=["']og:image["']\s+content=["']([^"']+)["']/i,
                ];
                
                for (const pattern of patterns) {
                  const match = html.match(pattern);
                  if (match && match[1]) {
                    let imageUrl = match[1].replace(/&amp;/g, '&');
                    thumbnails[article.linkedinUrl] = imageUrl;
                    console.log('Found image via proxy for', article.postTitle, ':', imageUrl);
                    break;
                  }
                }
              }
            } catch (proxyError) {
              console.log('Proxy fetch failed for', article.postTitle, proxyError);
            }
            
          } catch (error) {
            console.error('Error fetching thumbnail for', article.linkedinUrl, error);
          }
        }
      }
      
      if (Object.keys(thumbnails).length > 0) {
        console.log('Setting thumbnails:', thumbnails);
        setArticleThumbnails(thumbnails);
      } else {
        console.log('No thumbnails were fetched. You may need to add thumbnailUrl manually to the article data.');
      }
    };

    fetchThumbnails();
  }, [data]);

  return (
    <section className="bg-white md:mx-[15px] mx-[5px] pt-2 pb-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="md:text-center text-left mb-12">
          <h2  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.sectionTitle}
          </h2>
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

                  {/* Post Title (if available) */}
                  {article.postTitle && (
                    <div className="px-4 pt-4 pb-2">
                      <h3 className="text-base font-bold text-gray-900 line-clamp-2">
                        {article.postTitle}
                      </h3>
                    </div>
                  )}

                  {/* Post Snippet */}
                  <div className="p-4 pt-2">
                    <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                      {article.postSnippet}
                      <span className="text-gray-500 ml-1">... Read more</span>
                    </p>
                  </div>

                  {/* Post Image or Thumbnail */}
                  {(article.postImage?.asset?.url || article.thumbnailUrl || articleThumbnails[article.linkedinUrl]) && (
                    <div className="relative w-full h-50 bg-gray-100">
                      <Image
                        src={article.postImage?.asset?.url || article.thumbnailUrl || articleThumbnails[article.linkedinUrl]}
                        alt={article.postTitle || "Post image"}
                        fill
                        className="object-cover"
                        unoptimized={!!(article.thumbnailUrl || articleThumbnails[article.linkedinUrl])}
                        onError={(e) => {
                          // Hide image on error
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Link Preview (if no title shown above) */}
                  {!article.postTitle && (
                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
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

