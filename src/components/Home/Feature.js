"use client";

import { HiOutlineSparkles, HiOutlineEye, HiOutlineLink } from 'react-icons/hi';
import Link from 'next/link';
import { SiMaterialdesignicons } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Feature = ({ whatIsExponentialData }) => {
  // Fallback to static data if no Sanity data
  const staticFeatures = [
    {
      title: "Design at the Core",
      description: "Integrate design thinking into your company's core to ensure growth occurs naturally, rather than relying on luck.",
      hasButton: true,
      iconType: "design",
    },
    {
      title: "System-Level Vision",
      description: "View your business as a cohesive system and leverage unseen opportunities for remarkable outcomes.",
      hasButton: false,
      iconType: "eye",
    },
    {
      title: "Network Power",
      description: "Unite converged systems so every move amplifies your reach and accelerates market dominance.",
      hasButton: false,
      iconType: "link",
    },
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'design':
        return SiMaterialdesignicons;
      case 'eye':
        return HiOutlineEye;
      case 'link':
        return HiOutlineLink;
      default:
        return HiOutlineSparkles;
    }
  };

  const renderIconOrImage = (feature) => {
    if (feature.useImage && feature.image) {
      return (
        <div className="relative w-[250px] h-full rounded-2xl overflow-hidden shadow-xl ">
          <Image
            src={urlFor(feature.image).width(1000).height(1000).url()}
            alt={feature.image.alt || feature.title}
            width={500}
            height={500}
            className="object-contain w-full h-full"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d7035]/10 to-[#c1a35e]/10 pointer-events-none"></div>
        </div>
      );
    } else {
      const Icon = getIcon(feature.iconType);
      return (
        <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-lg">
          <Icon className="text-white text-2xl" />
        </div>
      );
    }
  };

  // Use Sanity data if available, otherwise use static data
  const features = whatIsExponentialData?.features || staticFeatures;
  const title = whatIsExponentialData?.title || "What is";
  const highlightText = whatIsExponentialData?.highlightText || "Exponential by Design";
  const subtitle = whatIsExponentialData?.subtitle || "The 3 Shifts That Turn Ordinary Companies Into Market Leaders";

  // Debug logging to check image data
  console.log('WhatIsExponential Data:', whatIsExponentialData);
  console.log('Features with images:', features.map(f => ({ 
    title: f.title, 
    useImage: f.useImage, 
    hasImage: !!f.image,
    imageUrl: f.image ? urlFor(f.image).url() : 'No image'
  })));

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 lg:px-24">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title} <span className="font-black">{highlightText}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl">
            {subtitle}
          </p>
        </div>

        {/* Features Carousel */}
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
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
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
                spaceBetween: 40,
              },
            }}
            className="pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-6 h-full flex flex-col">
                  {/* Icon or Image */}
                  <div className="flex justify-left">
                    {renderIconOrImage(feature)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-left">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-left flex-grow">
                    {feature.description}
                  </p>

                  {/* Button (conditional) */}
                  {feature.hasButton && (
                    <div className="pt-4 flex justify-center">
                      <Link
                        href={feature.buttonLink || '#'}
                        className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                      >
                        {feature.buttonText || "Take a quick look"}
                      </Link>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-[-4rem] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-[-4rem] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Feature;