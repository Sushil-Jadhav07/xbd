"use client";

import { HiOutlineSparkles, HiOutlineEye, HiOutlineLink } from 'react-icons/hi';
import Link from 'next/link';
import { SiMaterialdesignicons } from "react-icons/si";

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

  // Use Sanity data if available, otherwise use static data
  const features = whatIsExponentialData?.features || staticFeatures;
  const title = whatIsExponentialData?.title || "What is";
  const highlightText = whatIsExponentialData?.highlightText || "Exponential by Design";
  const subtitle = whatIsExponentialData?.subtitle || "The 3 Shifts That Turn Ordinary Companies Into Market Leaders";

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title} <span className="font-black">{highlightText}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = getIcon(feature.iconType);
            return (
              <div key={index} className="space-y-4">
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#9d7035] to-[#c1a35e] rounded-lg p-4 w-16 h-16 flex items-center justify-center shadow-sm">
                  <Icon className="text-white text-2xl" />
                </div>

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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;