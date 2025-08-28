'use client'
import React, { useState, useEffect } from 'react'

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const logos = [
    { name: "NY TIMES", icon: "📰" },
    { name: "FORBES", icon: "💼" },
    { name: "MICROSOFT", icon: "🪟" },
    { name: "LINKEDIN", icon: "💼" },
    { name: "ECONOMIST", icon: "📊" }
  ]

  const testimonials = [
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
      quote: "This framework revolutionized how we approach growth. The results speak for themselves.",
      author: "Emily Johnson",
      title: "CTO, Innovation Labs",
      rating: 5
    },
    {
      quote: "Finally, a practical guide that bridges theory and execution. Game-changing insights.",
      author: "Michael Chen",
      title: "VP Strategy, Future Corp",
      rating: 5
    },
    {
        quote: "Finally, a practical guide that bridges theory and execution. Game-changing insights.",
        author: "Michael Chen",
        title: "VP Strategy, Future Corp",
        rating: 5
      }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
  }

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg lg:text-xl text-black max-w-3xl mx-auto">
            Recognized by top publications & executives shaping the future
          </p>
        </div>
        
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {logos.map((logo, index) => (
            <div key={index} className="bg-gray-100 rounded-lg px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-black font-medium text-sm">{logo.name}</span>
            </div>
          ))}
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                
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
                  <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-black font-bold text-sm">{testimonial.author}</p>
                    <p className="text-gray-600 text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
          >
            ←
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
          >
            →
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-sm transition-all duration-200 ${
                index === currentSlide ? 'bg-black' : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
