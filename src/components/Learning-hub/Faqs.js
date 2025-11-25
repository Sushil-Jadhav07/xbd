'use client'
import React, { useState } from 'react';

const Faqs = ({ faqsData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  // Fallback data
  const fallbackData = {
    sectionTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "Who is this course for?",
        answer: "CXOs, business leaders, strategists and consultants who want to master exponential growth."
      },
      {
        question: "What formats are available?",
        answer: "Self-paced modules, live workshops, and cohort activation labs with flexible learning options."
      },
      {
        question: "How do I enroll a team?",
        answer: "Contact us for team enrollment options and custom pricing for organizations."
      },
      {
        question: "What is the refund policy?",
        answer: "30-day money-back guarantee with no questions asked."
      }
    ]
  };

  const data = faqsData || fallbackData;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-12 lg:py-16 lg:px-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center space-x-3 lg:mb-8 mb-4">
          <div className="w-6 h-6 text-gray-600">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM13 9a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
            FAQ
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 lg:mb-12">
          {data.sectionTitle}
        </h1>

        {/* FAQ Items */}
        <div className="space-y-4">
          {data.faqs?.map((faq, index) => (
            <div key={index} className="bg-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-300 hover:rounded-lg transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-black font-medium text-lg">
                  {faq.question}
                </span>
                <div className="w-5 h-5 text-black">
                  {openIndex === index ? (
                    // Upward arrow for expanded
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    // Downward arrow for collapsed
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
              
              {/* Answer Section */}
              {openIndex === index && (
                <div className="px-6 pb-4 mt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
