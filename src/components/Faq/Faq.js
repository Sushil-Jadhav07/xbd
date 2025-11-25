'use client';

import { useState, useEffect } from 'react';
import { getFaqPageData } from '@/lib/sanityQueries';

export const metadata = {
  title: "FAQ | XBD",
  description: "Frequently asked questions about XBD programs and services.",
};

// Fallback data in case Sanity CMS is not available
const fallbackData = {
  sectionBadge: "Support",
  mainTitle: "Frequently Asked",
  highlightedTitle: "Questions",
  subtitle: "Everything you need to know about our programs and services.",
  faqItems: [
    {
      question: "Who is this for?",
      answer: "CXOs, founders, business heads, and consultants who want to design exponential growth for their organizations — not just talk about it.",
    },
    {
      question: "How is it different from other strategy programs?",
      answer: "XBD bridges the last mile from concept to pilot. You'll finish each module with a deployable artifact tested in real industries.",
    },
    {
      question: "When does the program start?",
      answer: "The self-paced version opens soon. Early registrants get first access and exclusive pre-launch pricing.",
    },
    {
      question: "How much time do I need each week?",
      answer: "2–3 focused hours per week is enough to complete the program in 6 weeks.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes. If you complete the first module and find it doesn't deliver value, we'll refund 100% within 7 days — no questions asked.",
    },
  ],
  ctaSection: {
    title: "Still have questions?",
    description: "Our team is here to help. Reach out and we'll get back to you as soon as possible.",
    buttonText: "Contact Us",
    buttonLink: "#contact"
  }
};

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqData, setFaqData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFaqPageData();
        // Only update if we got valid data from Sanity
        if (data && data.faqItems && data.faqItems.length > 0) {
          setFaqData(data);
        }
      } catch (error) {
        console.error('Error loading FAQ data from Sanity, using fallback data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="relative min-h-screen bg-white py-12 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#c1a35e] border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading FAQs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-white py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
         <div className="mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#9d7035] to-[#c1a35e] tracking-wide uppercase">
              {faqData.sectionBadge}
            </span>
          </div>
           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {faqData.mainTitle}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9d7035] to-[#c1a35e]">
              {faqData.highlightedTitle}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {faqData.subtitle}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
             {faqData.faqItems?.map((item, idx) => (
            <div
              key={idx}
               className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#c1a35e] hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                   <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9d7035]/10 text-[#9d7035] flex items-center justify-center text-sm font-semibold group-hover:bg-[#9d7035] group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </span>
                   <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#9d7035] transition-colors duration-300">
                    {item.question}
                  </span>
                </div>
                <div
                   className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 ${
                     openIndex === idx
                       ? 'rotate-180 border-[#9d7035] bg-[#9d7035]'
                       : 'group-hover:border-[#9d7035]'
                   }`}
                >
                  <svg
                   className={`w-4 h-4 transition-colors duration-300 ${
                       openIndex === idx ? 'text-white' : 'text-gray-600'
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
                  openIndex === idx
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pl-20">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        {faqData.ctaSection && (
         <div className="mt-16 bg-white rounded-3xl p-12 text-center shadow-2xl">
          <h1 className="text-3xl font-bold text-black mb-4">
            {faqData.ctaSection.title}
          </h1>
           <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            {faqData.ctaSection.description}
          </p>
           <a 
            href={faqData.ctaSection.buttonLink || '/contact'}
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl bg-[#c1a35e] text-white hover:shadow-lg transition-all duration-300"
           >
            {faqData.ctaSection.buttonText}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        )}
      </div>
    </section>
  );
}