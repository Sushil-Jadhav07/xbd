"use client";

import { useState, useEffect } from 'react';
import { MdImage } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import LeadFormModal from '../common/LeadFormModal';

const QuoteCarousel = ({ quoteCarouselData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fallback data
  const fallbackData = {
    subtitle: "Join thousands of leaders who've accelerated their growth with our proven framework.",
    quoteText: "The Only Thing That's Changed In The World Is Everything",
    primaryButton: { text: "Start My Growth" },
    secondaryButton: { text: "See How It Works" },
    image: { alt: "Growth Image" }
  };

  const data = quoteCarouselData || fallbackData;

  return (
    <>
    <section className="bg-[#f5f1eb] mx-[15px] pt-8 md:pt-12 pb-12 md:pb-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 lg:mb-6">
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-[#dbdbdb] rounded-3xl relative overflow-hidden">
          {/* Large Quote Mark */}
          <div className="absolute top-8 left-8 text-gray-400 text-8xl md:text-9xl font-serif leading-none opacity-50 z-10">
            ❝
          </div>

          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] md:min-h-[600px]">
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col items-center text-center justify-center relative z-20">
              <div className="space-y-8">
                {/* Quote Text */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  {data.quoteText}
                </h3>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row text-center justify-center items-center gap-4">
                  {data.primaryButton && (
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer font-semibold hover:bg-gray-800 transition-colors duration-200"
                    >
                      {data.primaryButton.text}
                    </button>
                  )}
                  
                  {data.secondaryButton && (
                    <Link
                      href={data.secondaryButton.link || '#'}
                      className="text-gray-900 dark:text-white font-semibold hover:text-black dark:hover:text-white transition-colors duration-200 underline decoration-2 underline-offset-4"
                    >
                      {data.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Right Image - Edge to Edge */}
            <div className="flex-1 relative">
              {/* Image Container */}
              <div className="relative overflow-hidden h-full bg-[#dbdbdb] dark:bg-gray-900 lg:rounded-r-3xl">
                {/* Single Image */}
                <div className="w-full h-full relative">
                  {/* Image */}
                  <div className="w-full h-full bg-[#dbdbdb] dark:bg-gray-900 flex items-center justify-center relative">
                    {data.image ? (
                      <Image 
                        src={typeof data.image === 'string' ? data.image : data.image}
                        alt={data.image.alt || "Growth Image"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <MdImage className="text-gray-500 dark:text-gray-300 text-5xl" />
                    )}
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LeadFormModal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Start My Growth"
      onSubmit={async (values) => {
        // TODO: integrate with your API
        console.log('Submitting form:', values);
      }}
    />
    </>
  );
};

export default QuoteCarousel;