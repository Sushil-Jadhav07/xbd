'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonial = ({ testimonialData }) => {
  // Helper function to get initials from author name
  const getInitials = (name) => {
    if (!name) return ''
    const words = name.trim().split(/\s+/)
    if (words.length === 0) return ''
    
    // If first word is 2 characters or less, use it as initial
    if (words[0].length <= 2) {
      return words[0].toUpperCase()
    }
    
    // Otherwise, take first char of first word and first char of last word
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase()
    }
    
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase()
  }

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
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-testimonial .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-testimonial .swiper-pagination-bullet-active {
          background: linear-gradient(to bottom right, #9d7035, #c1a35e);
          width: 24px;
          border-radius: 5px;
        }
      `}} />
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
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            {data.title}
          </h1>
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
        <div className="relative pb-0">
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
              nextEl: '.swiper-button-next-testimonial',
              prevEl: '.swiper-button-prev-testimonial',
            }}
            pagination={{
              el: '.swiper-pagination-testimonial',
              clickable: true,
              dynamicBullets: true,
              type: 'bullets',
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
            className="pb-4"
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
                          {getInitials(testimonial.author)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-black font-bold text-sm">{testimonial.author}</p>
                      <h1 className="text-gray-600 text-xs">{testimonial.title}</h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Left Navigation Arrow */}
          <button 
            className="swiper-button-prev-testimonial absolute left-0 md:-left-[50px] top-[40%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            className="swiper-button-next-testimonial absolute right-0 md:right-[-50px] top-[40%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Custom Pagination - Absolutely Centered at Bottom */}
          <div className="swiper-pagination-testimonial absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2"></div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Testimonial