import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LearningBanner = ({ learningBannerData }) => {
  // Fallback data
  const fallbackData = {
    topLabel: "Empower your Growth",
    mainHeading: "Master the Framework and Lead the Change",
    description: "Unlock your potential with structured learning and hands-on pilots designed to drive exponential growth for your organization.",
    keyFeatures: [
      "Actionable playbooks and templates you can apply this week",
      "Run a 6-week pilot with measurable KPIs",
      "Peer collaboration and live coaching"
    ],
    primaryButton: { text: "Enroll Now", link: "#" },
    secondaryButton: { text: "Preview Free Class", link: "#" },
    tertiaryButton: { text: "Program Details", link: "#" },
    disclaimerText: "Low-risk: Cancel within 14 days for a full refund. Teams discount available."
  }

  const data = learningBannerData || fallbackData;

  return (
    <div className="bg-white mx-[15px] lg:py-16 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image */}
          <div className="bg-gray-200 rounded-lg h-96 lg:h-full flex items-center justify-center">
            {data.bannerImage?.asset?.url ? (
              <Image
                src={data.bannerImage.asset.url}
                alt={data.bannerImage.alt || "Learning Hub Banner"}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Top Label */}
            <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              {data.topLabel}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              {data.mainHeading}
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-lg text-black leading-relaxed">
              {data.description}
            </p>

            {/* Key Features/Benefits */}
            <div className="space-y-3">
              {data.keyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-black">{feature}</p>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {data.primaryButton && (
                <Link
                  href={data.primaryButton.link || '#'}
                  className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  {data.primaryButton.text}
                </Link>
              )}
              {data.secondaryButton && (
                <Link
                  href={data.secondaryButton.link || '#'}
                  className="px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  {data.secondaryButton.text}
                </Link>
              )}
              {data.tertiaryButton && (
                <Link
                  href={data.tertiaryButton.link || '#'}
                  className="px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  {data.tertiaryButton.text}
                </Link>
              )}
            </div>

            {/* Disclaimer/Guarantee */}
            <div className="flex items-center space-x-2 pt-4">
              <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <p className="text-sm text-gray-600">
                {data.disclaimerText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningBanner;
