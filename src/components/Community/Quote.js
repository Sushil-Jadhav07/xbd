'use client'
import React, { useState, useEffect } from 'react'
import { MdImage } from 'react-icons/md'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Quote = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const quotes = [
    {
      quote: "The Only Thing That's Changed In The World Is Everything",
      author: "Exponential Growth",
      cta: "Start My Growth",
      link: "See How It Works"
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts",
      author: "Leadership Journey",
      cta: "Begin My Journey",
      link: "Learn More"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams",
      author: "Dream Big",
      cta: "Dream With Us",
      link: "Explore Possibilities"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower",
      author: "Innovation Mindset",
      cta: "Innovate Now",
      link: "See Examples"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quotes.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white py-8 lg:py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        <div className="bg-gray-100 rounded-lg min-h-[550px] h-full lg:h-[600px] relative overflow-hidden">
          
          {/* Carousel Container */}
          <div 
            className="relative h-full"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {quotes.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-600 ease-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full scale-95' 
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-12 items-center h-full p-0 lg:p-0">
                  
                  {/* Left Side - Quote Content */}
                  <div className="text-left col-span-1 lg:col-span-4 lg:text-left px-6 py-3 lg:p-8">
                    {/* Quote Icon */}
                    <div className="text-gray-400 text-4xl lg:text-6xl xl:text-8xl mb-1 lg:mb-6 xl:mb-8">
                      "
                    </div>
                    
                    {/* Quote Text */}
                    <blockquote className="text-xl lg:text-2xl xl:text-4xl font-bold text-black mb-4 lg:mb-6 xl:mb-8 leading-tight">
                      {item.quote}
                    </blockquote>
                    
                    {/* Author */}
                    <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 xl:mb-10 italic">
                      — {item.author}
                    </p>
                    
                    {/* Call-to-Action Elements */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                      <button className="bg-black text-white py-2 lg:py-3 px-6 lg:px-8 rounded-lg text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors duration-200">
                        {item.cta}
                      </button>
                      <a href="#" className="text-black font-medium hover:text-gray-700 transition-colors duration-200 flex items-center justify-center lg:justify-start text-sm lg:text-base">
                        {item.link}
                      </a>
                    </div>
                  </div>
                  
                  {/* Right Side - Image Placeholder */}
                  <div className="flex justify-center col-span-1 lg:col-span-3 lg:justify-end p-0 lg:p-0">
                    <div className="bg-gray-300 rounded-lg w-full h-[280px] lg:h-[500px] xl:h-[600px] flex items-center justify-center">
                      <div className="bg-gray-400 rounded-lg p-3 lg:p-4 w-16 h-12 lg:w-20 lg:h-16 flex items-center justify-center">
                        <MdImage className="text-gray-500 text-xl lg:text-2xl" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
          >
            <MdKeyboardArrowLeft className="text-xl lg:text-2xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
          >
            <MdKeyboardArrowRight className="text-xl lg:text-2xl" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-black' : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Quote
