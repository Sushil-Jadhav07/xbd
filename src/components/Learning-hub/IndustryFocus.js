import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IndustryFocus = ({ industryFocusData }) => {
  // Fallback data
  const fallbackData = {
    focusLabel: "Instructor-Led Focus",
    mainTitle: "Product • Experience • Value",
    subTitle: "Practical templates and live coaching",
    courseOverview: "Short, outcome-first modules. Each module includes a template you can run as a 1-week micro-pilot. Clear decision rules and rollouts to scale wins.",
    videoSection: {
      videoTitle: "Meet the Instructor",
      videoDescription: "Short 60-90s: why this curriculum matters and the outcomes you can expect.",
      mediaType: "url",
      videoUrl: "/Video3_programme-summary-final.mp4"
    },
    instructorSection: {
      title: "Meet the Instructor",
      description: "Short 60-90s: why this curriculum matters and the outcomes you can expect.",
      trustText: "Trusted by leaders"
    },
    quoteBlock: {
      quoteText: "Most transformation programs fail at the last mile. The X Framework fixes that — by turning strategy into measurable outcomes.",
      attribution: "Anuj Pandey, Author & Founder, XBD Consulting LLP"
    },
    learningOptions: {
      title: "Learning Options",
      metrics: [
        { value: "50K+", label: "Students" },
        { value: "5★", label: "Rating" },
        { value: "6 weeks", label: "Pilot" }
      ],
      formatTitle: "Format",
      formatDescription: "Self-paced modules + live workshops + cohort activation lab"
    },
    featureSections: [
      {
        category: "Product",
        title: "Design — Frameworks & Tools",
        description: "Blueprints to design products that meet needs at the point of origin and convert quickly."
      },
      {
        category: "Experience",
        title: "Design — Community & Sessions",
        description: "Live cohort sessions for rapid feedback and peer learning to reduce time-to-insight."
      },
      {
        category: "Value",
        title: "Design — Activation & Live Labs",
        description: "Actionable activation labs that turn experiments into reusable assets and measurable revenue streams."
      }
    ],
    ctaSection: {
      primaryButton: { text: "Apply to Cohort", link: "#" },
      secondaryLink: { text: "Download summary (PDF)", url: "#" },
      disclaimer: "6-week pilot template included. Limited seats per cohort."
    }
  };

  const data = industryFocusData || fallbackData;

  // Get video data
  const videoSection = data.videoSection || {};
  const videoUrl = videoSection.videoUrl;
  const uploadedVideo = videoSection.uploadedVideo?.asset?.url;
  const videoThumbnail = videoSection.videoThumbnail?.asset?.url;
  const mediaType = videoSection.mediaType || 'url';
  
  // Determine which video to use
  const finalVideoUrl = mediaType === 'upload' ? uploadedVideo : videoUrl;
  const hasVideo = finalVideoUrl && finalVideoUrl.trim() !== '';

  return (
    <div className="bg-white mx-[15px] lg:py-16 py-8 lg:px-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 grid-flow-row lg:gap-12 gap-4">
          
          {/* Left Column */}
          <div className="space-y-8 order-2 lg:order-1 lg:col-span-3">
            
            {/* Video Player */}
            <div className='bg-gray-200 rounded-lg p-4'>
            <div className="bg-white rounded-lg h-80 relative overflow-hidden">
              {hasVideo ? (
                <video 
                  className="w-full h-full object-contain rounded-lg"
                  controls
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  poster={videoThumbnail}
                >
                  <source src={finalVideoUrl} type="video/mp4" />
                  <source src={finalVideoUrl} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">No video available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Meet the Instructor Section */}
            {data.instructorSection && (
              <div className='bg-gray-200 rounded-lg p-4 mt-4'>
                <h3 className="text-xl font-bold text-black mb-3">{data.instructorSection.title}</h3>
                <p className="text-gray-700 mb-2">
                  {data.instructorSection.description}
                </p>
                {data.instructorSection.trustText && (
                  <p className="text-sm text-gray-500">{data.instructorSection.trustText}</p>
                )}
              </div>
            )}
            </div>

            {/* Quote Section */}
            {data.quoteBlock && (
              <div className='bg-white rounded-lg p-4 mt-4'>
                {data.quoteBlock.quoteText && (
                  <h3 className="md:text-lg text-base font-medium text-black mt-3 mb-3">
                    {data.quoteBlock.quoteText}
                  </h3>
                )}
                {data.quoteBlock.attribution && (
                  <p className="text-gray-700 italic text-sm mb-2">
                    {data.quoteBlock.attribution}
                  </p>
                )}
              </div>
            )}
            {/* Learning Options Section */}
              {/* Key Metrics */}
            {/* <div className='bg-gray-200 rounded-lg lg:p-6 p-3'>
              <h3 className="text-xl font-bold text-black mb-4">{data.learningOptions?.title}</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                {data.learningOptions?.metrics?.map((metric, index) => (
                  <div key={index} className="bg-gray-300 rounded-lg p-4 text-center">
                    <div className="lg:text-2xl text-base font-bold text-black">{metric.value}</div>
                    <div className="lg:text-sm text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
              <h6 className='text-black text-base font-semibold'>{data.learningOptions?.formatTitle}</h6>
              <p className="text-gray-700">
                {data.learningOptions?.formatDescription}
              </p>
            </div> */}
            
          </div>

          {/* Right Column */}
          <div className="space-y-6 order-1 lg:order-2 lg:col-span-4">
            
            {/* Focus Label */}
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
                {data.focusLabel}
              </span>
            </div>

            {/* Main Course Title */}
            <div className="mb-4">
              <h1 className="text-2xl md:text-5xl font-medium text-black leading-tight mb-2">
                {data.mainTitle}
              </h1>
              <h2 className="text-2xl md:text-5xl font-medium text-black">
                {data.subTitle}
              </h2>
            </div>

            {/* Course Overview */}
            <p className="lg:text-lg text-sm text-gray-700 leading-relaxed mb-6">
              {data.courseOverview}
            </p>

            {/* Feature Sections */}
            <div className="space-y-4 mb-8">
              {data.featureSections?.map((section, index) => (
                <div key={index} className="bg-gray-200 rounded-lg lg:p-6 p-3">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {section.category}
                    </div>
                    <div className="flex-1">
                      <h3 className="lg:text-lg text-base font-semibold text-black mb-2">
                        {section.title}
                      </h3>
                      <p className="lg:text-sm text-xs text-gray-700">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action and Additional Information */}
            <div className="space-y-4">
              <div className="flex flex-row lg:gap-4 gap-2 items-center">
                {data.ctaSection?.primaryButton && (
                  <Link
                    href={data.ctaSection.primaryButton.link || '#'}
                    className="bg-black text-sm lg:text-base text-white lg:px-8 px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    {data.ctaSection.primaryButton.text}
                  </Link>
                )}
                {data.ctaSection?.secondaryLink && (
                  <Link
                    href={data.ctaSection.secondaryLink.url || '#'}
                    className="text-black text-sm lg:text-base underline hover:text-gray-700 transition-colors"
                  >
                    {data.ctaSection.secondaryLink.text}
                  </Link>
                )}
              </div>
              
              {data.ctaSection?.disclaimer && (
                <p className="text-sm text-gray-600">
                  {data.ctaSection.disclaimer}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryFocus;
