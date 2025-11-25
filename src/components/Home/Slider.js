"use client";

import { useMemo, useState } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';
import { HiOutlineDocument, HiOutlinePlay, HiOutlinePhone, HiOutlineMicrophone } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import JoinWaitlistForm from '../common/JoinWaitlistForm';
import StrategySessionForm from '../common/StrategySessionForm';
import KeynoteRequestForm from '../common/KeynoteRequestForm';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ resourcesSliderData }) => {
  // Fallback data
  const fallbackData = {
    label: "RESOURCES",
    title: "Get the Tools to",
    highlightText: "Accelerate Your Leadership Growth",
    subtitle: "We've distilled decades of growth into four simple starting points.",
    resources: [
      {
        title: "Read the Playbook That's Fueling 15X Growth Stories",
        description: "Complete Return OS framework & implementation guide",
        meta: "212 Pages",
        buttonText: "Get the Book",
        iconType: "document"
      },
      {
        title: "Master the Framework That's Redefining Market Leaders",
        description: "Step-by-step X Framework training with real-world case studies",
        meta: "6 Weeks Live + On-Demand",
        buttonText: "Join the Waitlist",
        iconType: "play",
        formType: "waitlist"
      },
      {
        title: "Get the Strategy That's Driving Boardroom-Level Breakthroughs",
        description: "Tailored growth roadmaps & leadership advisory for rapid scaling",
        meta: "60-Min Strategy Call",
        buttonText: "Book Your Session",
        iconType: "phone",
        formType: "strategy"
      },
      {
        title: "Experience the Talk That's Inspiring Industry Game Changers",
        description: "High-impact leadership sessions for transformation & alignment",
        meta: "45-90 Min Session",
        buttonText: "Book the Keynote",
        iconType: "microphone",
        formType: "keynote"
      }
    ]
  };

  const data = resourcesSliderData || fallbackData;
  const [activeForm, setActiveForm] = useState(null);

  const buttonTextFormMap = useMemo(() => ({
    'join the waitlist': 'waitlist',
    'book your session': 'strategy',
    'book the keynote': 'keynote',
  }), []);

  const handleOpenForm = (formType) => {
    if (!formType) return;
    setActiveForm(formType);
  };

  const handleCloseForm = () => setActiveForm(null);

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'document':
        return HiOutlineDocument;
      case 'play':
        return HiOutlinePlay;
      case 'phone':
        return HiOutlinePhone;
      case 'microphone':
        return HiOutlineMicrophone;
      default:
        return HiOutlineDocument;
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-slider .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-slider .swiper-pagination-bullet-active {
          background: linear-gradient(to bottom right, #9d7035, #c1a35e);
          width: 24px;
          border-radius: 5px;
        }
      `}} />
      <section className=" bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-12 md:py-20 lg:py-24  relative overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={starsBg}
          alt="Stars background"
          fill
          className="object-cover"
          priority
        />
      </div> */}
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-4 lg:mb-8">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            <HiOutlineSparkles className="text-lg" />
            {data.label}
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {data.title} <span className="font-black bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent">{data.highlightText}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-700 max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-slider',
              prevEl: '.swiper-button-prev-slider',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-slider',
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
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="pb-4"
          >
            {data.resources?.map((resource, index) => {
              const IconComponent = getIcon(resource.iconType);
              const formType = resource.formType || buttonTextFormMap[resource.buttonText?.toLowerCase?.()];
              return (
                <SwiperSlide key={index}>
                  <div className="px-2 h-full">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col">
                      {/* Image Placeholder */}
                      <div className="bg-[#dbdbdbcd] rounded-xl aspect-[4/3] flex items-center justify-center mb-6 relative overflow-hidden">
                        <div className="bg-gray-400 rounded-lg p-3 w-16 h-12 flex items-center justify-center">
                          <MdImage className="text-gray-500 text-xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col space-y-4">
                        {/* Title */}
                        <h1 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                          {resource.title}
                        </h1>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">
                          {resource.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <IconComponent className="w-4 h-4" />
                          {resource.meta}
                        </div>

                        {/* Button */}
                        {formType ? (
                          <button
                            type="button"
                            onClick={() => handleOpenForm(formType)}
                            className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors duration-200 w-full mt-4"
                          >
                            {resource.buttonText}
                          </button>
                        ) : (
                          <Link 
                            href={resource.buttonLink || '#'}
                            className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors duration-200 w-full mt-4"
                          >
                            {resource.buttonText}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Left Navigation Arrow */}
          <button 
            className="swiper-button-prev-slider absolute left-0 md:-left-[50px] top-[35%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            className="swiper-button-next-slider absolute right-0 md:right-[-50px] top-[35%] md:top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination - Absolutely Centered at Bottom */}
          <div className="swiper-pagination-slider absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2"></div>
        </div>
      </div>
      <JoinWaitlistForm open={activeForm === 'waitlist'} onClose={handleCloseForm} />
      <StrategySessionForm open={activeForm === 'strategy'} onClose={handleCloseForm} />
      <KeynoteRequestForm open={activeForm === 'keynote'} onClose={handleCloseForm} />
    </section>
    </>
  );
};

export default Slider;