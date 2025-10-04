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
        <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-lg p-4 w-16 h-16 flex items-center justify-center shadow-sm overflow-hidden">
          <Image
            src={urlFor(feature.image).width(64).height(64).url()}
            alt={feature.image.alt || feature.title}
            width={64}
            height={64}
            className="object-cover rounded"
          />
        </div>
      );
    } else {
      const Icon = getIcon(feature.iconType);
      return (
        <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-lg p-4 w-16 h-16 flex items-center justify-center shadow-sm">
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
                <div className="space-y-4 h-full">
                  {/* Icon or Image */}
                  {renderIconOrImage(feature)}

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Button (conditional) */}
                  {feature.hasButton && (
                    <div className="pt-2">
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