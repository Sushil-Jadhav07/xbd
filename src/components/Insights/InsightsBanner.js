'use client';

import React from 'react';
import Image from 'next/image';
import FallbackBannerImage from "../../asset/InsightsBanner.webp";

const InsightsBanner = ({ insightsBannerData }) => {
  const bannerImage = insightsBannerData?.bannerImage?.asset?.url || FallbackBannerImage;
  const altText = insightsBannerData?.bannerImage?.alt || "Insights Banner";

  return (
    <section className=' md:mx-[15px] mx-[5px] py-12 lg:py-16'>
      <div className="relative w-full h-[400px] md:h-[900px] overflow-hidden">
        <Image
          src={bannerImage}
          alt={altText}
          fill
          className="object-contain"
          priority
          quality={100}
        />
      </div>
    </section>
  );
};

export default InsightsBanner;

