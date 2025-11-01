'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Custom styles for Swiper
const swiperStyles = `
  .testimonials-swiper .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #d1d5db;
    opacity: 1;
    transition: all 0.3s ease;
  }
  
  .testimonials-swiper .swiper-pagination-bullet-active {
    background: #000;
    width: 32px;
    border-radius: 6px;
  }
  
  .testimonials-swiper .swiper-pagination {
    position: static !important;
    margin-top: 2rem;
  }
  
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  .swiper-button-prev-custom {
    left: -4rem;
  }
  
  .swiper-button-next-custom {
    right: -4rem;
  }
`

const Testimonial = ({ testimonialData }) => {
  // Fallback data
  const fallbackData = {
    title: "Trusted by Industry Leaders Worldwide",
    subtitle: "Recognized by top publications & executives shaping the future",
    logos: [
      { name: "NY TIMES" },
      { name: "FORBES" },
      { name: "MICROSOFT" },
      { name: "LINKEDIN" },
      { name: "ECONOMIST" }
    ],
    testimonials: [
      {
        quote: "The insights provided transformed our innovation strategy and helped us achieve breakthrough results in months.",
        author: "James Wilson",
        title: "CEO, Global Innovations",
        rating: 5
      },
      {
        quote: "A game-changing perspective on AI ecosystems with immediately applicable strategies. Extremely practical.",
        author: "Sarah Chen",
        title: "CEO, TechFuture Solutions",
        rating: 5
      },
      {
        quote: "Our digital transformation approach shifted entirely. Worth every minute invested—highly recommended.",
        author: "David Rodriguez",
        title: "Director of Innovation, Enterprise Media",
        rating: 5
      },
      {
        quote: "Our digital transformation approach shifted entirely. Worth every minute invested—highly recommended.",
        author: "David Rodriguez",
        title: "Director of Innovation, Enterprise Media",
        rating: 5
      },
      {
        quote: "Our digital transformation approach shifted entirely. Worth every minute invested—highly recommended.",
        author: "David Rodriguez",
        title: "Director of Innovation, Enterprise Media",
        rating: 5
      },
      {
        quote: "Our digital transformation approach shifted entirely. Worth every minute invested—highly recommended.",
        author: "David Rodriguez",
        title: "Director of Innovation, Enterprise Media",
        rating: 5
      }
    ]
  }

  const data = testimonialData || fallbackData
  const testimonials = data.testimonials || fallbackData.testimonials

  return (
    <>
      <style jsx>{swiperStyles}</style>
      <div className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-12 relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <Image 
          src={BgPattern} 
          alt="Background Pattern" 
          fill 
          className="object-cover"
          priority
        />
      </div> */}

      

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            {data.title}
          </h2>
          <p className="text-base lg:text-xl text-black max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        {/* Logos Section */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-16">
          {data.logos?.map((logo, index) => (
            <div key={index} className="bg-gray-100 rounded-lg px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-200">
              {logo.logo ? (
                <div className="w-6 h-6 relative">
                  <Image 
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              )}
              <span className="text-black font-medium text-sm">{logo.name}</span>
            </div>
          ))}
        </div> */}
        
        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
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
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-full">
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <span key={starIndex} className="text-black text-lg">★</span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-black mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Information */}
                  <div className="flex items-center gap-3">
                    {testimonial.authorImage ? (
                      <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image 
                          src={testimonial.authorImage}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-black font-bold text-sm">{testimonial.author}</p>
                      <p className="text-gray-600 text-xs">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 cursor-pointer hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          
          <div className="swiper-button-next-custom absolute top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 cursor-pointer hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-3 mt-8"></div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Testimonial