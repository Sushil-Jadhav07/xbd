'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Testimonial = ({ testimonialData }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

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

  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 3 : 1
    }
    return 1
  }

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView())

  // Update items per view on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => {
      const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1
      return prev >= maxIndex ? 0 : prev + 1
    })
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => {
      const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1
      return prev <= 0 ? maxIndex : prev - 1
    })
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Auto-advance carousel - DISABLED
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide()
  //   }, 6000)
  //   return () => clearInterval(timer)
  // }, [testimonials.length, itemsPerView])

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            {data.title}
          </h2>
          <p className="text-lg lg:text-xl text-black max-w-3xl mx-auto">
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
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-3 ${itemsPerView === 3 ? 'w-1/3' : 'w-full'}`}
                >
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
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            <MdChevronLeft className="text-2xl" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            <MdChevronRight className="text-2xl" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(Math.ceil(testimonials.length / itemsPerView))].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full disabled:cursor-not-allowed ${
                index === currentSlide 
                  ? 'bg-black w-8' 
                  : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial