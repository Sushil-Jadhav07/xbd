import React from 'react';
import Link from 'next/link';

const Programs = ({ programsData }) => {
  // Fallback data
  const fallbackData = {
    sectionTitle: "Programs & Offerings",
    subtitle: "Different leaders learn differently. Pick the format that matches your growth goals.",
    earlyAccessSection: {
      heading: "Get Early Access Pricing",
      noteLabel: "Note under table:",
      noteText: "Self-paced program opens soon. Pre-launch members receive lifetime template updates + 25% off inaugural pricing."
    },
    programs: [
      {
        programType: "self-paced",
        title: "Exponential by Design Mastery",
        description: "Learn at your own speed, anytime. Flexible modules + templates",
        price: "Rs: 1999/-",
        features: [
          "60 hours of content",
          "Templates & playbooks",
          "Certificate on completion"
        ],
        attributes: [
          { icon: "clock", text: "60 hours" },
          { icon: "location", text: "Anywhere" },
          { icon: "mode", text: "Hybrid Mode" }
        ],
        primaryButton: { text: "Join The Waitlist", link: "#" },
        secondaryButton: { text: "Preview", link: "#" },
        rating: { score: "5.0", learners: "50k learners" },
        footerText: "30-day money-back guarantee"
      },
      {
        programType: "cohorted",
        title: "5-Day Onsite Masterclass Workshops",
        description: "Interactive sessions for hands-on mastery with your team. Cohorted",
        price: "On request",
        features: [
          "Hands-on activation labs — convert learnings to pilots",
          "Custom playbook built for your org",
          "Facilitator-led cohort with peer benchmarking"
        ],
        attributes: [
          { icon: "clock", text: "40 hours" },
          { icon: "location", text: "On request" },
          { icon: "mode", text: "Onsite mode" }
        ],
        primaryButton: { text: "Request Info", link: "#" },
        secondaryButton: { text: "Apply", link: "#" },
        rating: { score: "4.9★", learners: "Avg cohort rating" },
        footerText: "Limited seats"
      },
      {
        programType: "beginners",
        title: "Coaching & Mentorship",
        description: "Executive coaching, cohort mentorship and activation support.",
        price: "Custom",
        features: [
          "1:1 coaching",
          "Practitioner cohorts",
          "Implementation support"
        ],
        attributes: [
          { icon: "clock", text: "2 hours" },
          { icon: "location", text: "Anywhere" },
          { icon: "mode", text: "Hybrid Mode" }
        ],
        primaryButton: { text: "Book Consult", link: "#" },
        secondaryButton: { text: "Preview", link: "#" },
        rating: { score: "5.0", learners: "50k learners" },
        footerText: "30-day money-back guarantee"
      }
    ]
  }

  // Merge fallback data with fetched data, ensuring subtitle and earlyAccessSection are always available
  const data = programsData ? {
    ...fallbackData,
    ...programsData,
    subtitle: programsData.subtitle || fallbackData.subtitle,
    earlyAccessSection: programsData.earlyAccessSection || fallbackData.earlyAccessSection
  } : fallbackData;

  const getIcon = (iconType) => {
    const icons = {
      clock: (
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      location: (
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      mode: (
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };
    return icons[iconType] || icons.clock;
  };

  return (
    <div className="bg-[#f5f1eb] mx-[15px] lg:py-16 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-medium text-black lg:mb-4 mb-4">
          {data.sectionTitle}
        </h2>

        {/* Subtitle */}
        {data.subtitle && (
          <p className="text-lg text-black lg:mb-4 mb-4">
            <span className='font-bold'>Choose How You Learn:</span> {data.subtitle}
          </p>
        )}

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4">
          {data.programs?.map((program, index) => (
            <div key={index} className="bg-gray-100 rounded-lg lg:p-6 p-3 relative">
              {/* Program Header */}
              <div className='grid grid-cols-3 grid-flow-row lg:gap-4 gap-2'>
                <div className="lg:mb-4 mb-2 col-span-2">
                  <div className="text-sm text-gray-600 mb-1 capitalize">{program.programType.replace('-', ' ')}</div>
                  <h3 className="lg:text-xl text-lg font-bold text-black">{program.title}</h3>
                </div>
                <div className="col-span-1 px-3 py-2 lg:h-[70px] h-[65px] rounded-lg bg-gray-200">
                  <div className="text-gray-700 py-1 rounded text-xs font-medium">
                    {program.programType === 'self-paced' ? 'Pre-Launch Offer Discount' : 
                     program.programType === 'cohorted' ? 'Cohorted' : 'Beginners'}
                  </div>
                  <div className="text-[0.9rem] font-bold text-black">{program.price}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                {program.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2 mb-6">
                {program.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    <span className="lg:text-sm text-xs text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Attribute Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.attributes?.map((attr, attrIndex) => (
                  <div key={attrIndex} className="flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-full">
                    {getIcon(attr.icon)}
                    <span className="text-xs text-gray-700">{attr.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {program.primaryButton && (
                  <Link
                    href={program.primaryButton.link || '#'}
                    className="flex-1 flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    {program.primaryButton.text}
                  </Link>
                )}
                {program.secondaryButton && (
                  <Link
                    href={program.secondaryButton.link || '#'}
                    className="flex-1 flex items-center justify-center border border-gray-300 text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    {program.secondaryButton.text}
                  </Link>
                )}
              </div>

              {/* Footer */}
              {/* <div className="text-center flex items-center justify-between">
                {program.rating && (
                  <div className="flex items-center justify-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{program.rating.score}</span>
                    <span className="text-sm text-gray-600">{program.rating.learners}</span>
                  </div>
                )}
                {program.footerText && (
                  <div className="text-xs text-gray-600">{program.footerText}</div>
                )}
              </div> */}
            </div>
          ))}
        </div>

        {/* Early Access Pricing Section */}
        {data.earlyAccessSection && (
          <div className="mt-12 lg:mt-16">
            {data.earlyAccessSection.heading && (
              <h3 className="text-2xl md:text-3xl font-medium text-black mb-4">
                {data.earlyAccessSection.heading}
              </h3>
            )}
            {data.earlyAccessSection.noteLabel && data.earlyAccessSection.noteText && (
              <div className="mt-4">
                <p className="text-base font-bold text-black mb-1">
                  {data.earlyAccessSection.noteLabel}
                </p>
                <p className="text-base italic text-black">
                  {data.earlyAccessSection.noteText}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;