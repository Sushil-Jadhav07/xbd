"use client";
import Link from 'next/link'
import Image from 'next/image'

const ExponentialEconomy = ({ exponentialData }) => {
  if (!exponentialData) return null;

  return (
    <section className="bg-[#ffff] mx-[15px] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Main Question */}
          <p className="text-black text-base md:text-lg mb-4">
            {exponentialData.mainQuestion || 'Do you want to be part of this'}{" "}
            <span className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] bg-clip-text text-transparent font-bold">
              {exponentialData.highlightedWord || 'Exponential'}
            </span>{" "}
            economy?
          </p>

          {/* Framework Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
            {exponentialData.frameworkTitle || 'How to Transform: The \'X\' Framework'}
          </h1>

          {/* Description */}
          <p className="text-black text-sm md:text-base max-w-5xl mx-auto leading-relaxed mb-8">
            {exponentialData.description || 'Our proprietary framework, backed by tools simplifies this complex assignment. This framework squeezes and extracts the growth secrets behind the prominently exponential organizations like Google, Amazon, Uber, NVIDIA and now OpenAI to distill the complexity into a simple framework to lead exponential growth. Every successful transformation maps back to the converging and diverging forces that create multiplier effects, creating agile and adaptable entities that evolve with the market.'}
          </p>
        </div>

        {/* Main X Framework Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Center - Banner Image */}
          <div className="relative w-full flex items-center justify-center">
            {exponentialData.bannerImage?.asset?.url && (
              <div className="relative w-full max-w-7xl aspect-video">
                <Image
                  src={exponentialData.bannerImage.asset.url}
                  alt={exponentialData.bannerImage.alt || 'X Framework Banner'}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            )}
          </div>


        </div>

        {/* Learn More Button */}
        {/* <div className="text-left mt-6">
          {exponentialData.learnMoreButton && (
            <Link
              href={exponentialData.learnMoreButton.link || '#'}
              className="bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              {exponentialData.learnMoreButton.text || 'Learn More'}
            </Link>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default ExponentialEconomy;