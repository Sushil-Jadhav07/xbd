'use client'
import React, { useState } from 'react';

const Faqs = ({ faqsData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  // Fallback data
  const fallbackData = {
    sectionBadge: "Support",
    mainTitle: "Frequently Asked",
    highlightedTitle: "Questions",
    subtitle: '',
    faqs: [
      {
        question: "Can this programme be customised for our industry?",
        answer: "Yes. The REWIRE framework is sector-agnostic by design but has been delivered in financial services, retail, telecom, and industrial contexts. We adapt case studies, live activation labs, and implementation playbooks to your specific operating environment."
      },
      {
        question: "What does success look like after the programme?",
        answer: " Participants leave with deployed artefacts — not just insights. For corporate cohorts: an AI Governance Charter, a CoE Blueprint, a 90-day pilot plan, and a Capability Architecture. These are live documents, not slide decks."
      },
      {
        question: "How is this different from other AI leadership programmes?",
        answer: "Most programmes train individuals to use AI tools. REWIRE trains leadership teams to redesign how their organisation operates with AI — from decision architecture to talent models to value networks. The focus is institutionalisation, not adoption."
      }

    ],
    ctaSection: null
  };

  const data = faqsData || fallbackData;

  const sectionBadge = data.sectionBadge || "FAQ";
  const mainTitle =
    data.mainTitle || data.sectionTitle || fallbackData.mainTitle;
  const highlightedTitle =
    data.highlightedTitle ||
    (data.sectionTitle ? "" : fallbackData.highlightedTitle);
  const subtitle = data.subtitle || fallbackData.subtitle;
  const faqs = data.faqs || fallbackData.faqs;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative min-h-screen bg-white md:mx-[15px] mx-[5px] py-12 lg:py-16 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#9d7035] to-[#c1a35e] tracking-wider uppercase">
              {sectionBadge}
            </span>
          </div>
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {mainTitle}
              {highlightedTitle && (
                <>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9d7035] to-[#c1a35e]">
                    {highlightedTitle}
                  </span>
                </>
              )}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#c1a35e] hover:shadow-xl transition-all duration-300"
            >
              <button
                className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between gap-4 text-left"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9d7035]/10 text-[#9d7035] flex items-center justify-center text-sm font-semibold group-hover:bg-[#9d7035] group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </span>
                  <span className="text-base md:text-xl font-semibold text-gray-900 group-hover:text-[#9d7035] transition-colors duration-300">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'rotate-180 border-[#9d7035] bg-[#9d7035]'
                      : 'group-hover:border-[#9d7035]'
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-gray-600'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 pl-16 md:pl-24">
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
