import React from "react";
import Image from "next/image";

const fallbackData = {
  topLabel: "REWIRE",
  secondaryHeading: "LEAD THE CHANGE",
  mainHeading: "EXECUTIVE AI\nTRANSFORMATION\nLEADERSHIP\nPROGRAM",
  description: "TURN YOUR GROWTH STRATEGY INTO\nMEASURABLE OUTCOMES",
  keyFeatures: [
    { title: "Structured,", description: "outcome-first learning" },
    { title: "Ready-to-deploy", description: "frameworks & templates" },
    { title: "Peer", description: "collaboration & live clinics" },
  ],
  foundationJourneyText:
    "FROM FOUNDATION \u2192 VISIONARY \u2192 IMPLEMENTOR \u2192 PRACTITIONER",
  bannerImage: {
    asset: {
      url: "/Insights-Page-Banner.jpg",
    },
    alt: "Learning hub hero",
  },
};

const LearningBanner = ({ learningBannerData }) => {
  const data = fallbackData;
  const sanityBannerImage = learningBannerData?.bannerImage;
  const bannerImage =
    sanityBannerImage?.asset?.url
      ? {
          ...fallbackData.bannerImage,
          ...sanityBannerImage,
        }
      : fallbackData.bannerImage;
  const mainHeadingLines = data.mainHeading
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const normalizedFeatures =
    data.keyFeatures?.map((feature) => {
      if (typeof feature === "string") {
        return { title: feature, description: "" };
      }
      return {
        title: feature?.title || "",
        description: feature?.description || "",
      };
    }) || [];

  return (
    <section className="bg-white md:mx-[15px] mx-[5px] py-12 lg:py-14">
      <div className="max-w-8xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center">

          {/* LEFT: Image */}
          <div>
            <div className="relative rounded-[28px]  bg-white dark:bg-[#101010] overflow-hidden">
              {bannerImage?.asset?.url ? (
                <Image
                  src={bannerImage.asset.url}
                  alt={bannerImage.alt || "Learning banner"}
                  width={1200}
                  height={780}
                  className="w-full h-auto object-cover"
                  priority
                />
              ) : (
                <div className="h-[300px] md:h-[420px] w-full bg-gradient-to-br from-[#f9f9f9] to-[#d9d9d9]" />
              )}
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-4 lg:space-y-5">
            <h1 className="text-4xl mb-4 md:text-7xl font-black  text-[#9c7a1c] uppercase">
              {data.topLabel}
            </h1>

            <h2 className="text-xl md:text-4xl font-semibold uppercase text-[#9c7a1c]  leading-[0.4]">
              {data.secondaryHeading}
            </h2>

            <h3 className="text-lg mt-8 md:text-[40px] leading-[1] font-semibold uppercase text-black  ">
              {mainHeadingLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <p className="text-base md:text-xl font-semibold uppercase text-[#4f5561] leading-[1.1] max-w-[720px] whitespace-pre-line">
              {data.description}
            </p>

            {/* Features — no boxes */}
            <div className="grid grid-cols-1 max-w-[500px] sm:grid-cols-3 gap-3 md:gap-4 pt-1">
              {normalizedFeatures.slice(0, 3).map((feature, index) => (
                <div
                  key={`${feature.title}-${index}`}
                  className="flex flex-col gap-0.5"
                >
                  <p className="font-semibold text-base md:text-lg text-black  leading-[1.1]">
                    {feature.title}
                  </p>
                  {feature.description && (
                    <p className="text-sm md:text-lg text-[#9c7a1c] leading-[1.15] mt-0.5">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Journey text — full width, centered below both columns */}
          <div className="lg:col-span-2 col-span-1 text-center mt-2">
            <p className="text-xs md:text-[16px]  uppercase text-black ">
              {data.foundationJourneyText}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningBanner;
