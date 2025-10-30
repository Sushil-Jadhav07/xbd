'use client';

import { useState } from 'react';

export const metadata = {
  title: "FAQ | XBD",
  description: "Frequently asked questions about XBD programs and services.",
};

const faqs = [
  {
    q: "What is XBD and who is it for?",
    a: "XBD helps leaders and organizations adopt exponential frameworks to accelerate growth and innovation.",
  },
  {
    q: "How do I join the Learning Hub?",
    a: "Visit the Learning Hub page to explore programs and enroll directly online.",
  },
  {
    q: "Do you offer custom workshops for teams?",
    a: "Yes. We tailor workshops and keynotes to your goals. Use the Contact page to start a conversation.",
  },
  {
    q: "Can I get a consultation before signing up?",
    a: "Absolutely. Book an intro call via the Contact page and we'll guide you to the right track.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
         <div className="mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#9d7035] to-[#c1a35e] tracking-wide uppercase">
              Support
            </span>
          </div>
           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9d7035] to-[#c1a35e]">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Everything you need to know about our programs and services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
             {faqs.map((item, idx) => (
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
                    {item.q}
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
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
         <div className="mt-16 bg-white rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-black mb-4">
            Still have questions?
          </h3>
           <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out and we'll get back to you as soon as possible.
          </p>
           <button className="cursor-pointer inline-flex items-center gap-3 px-8 py-4  font-semibold rounded-xl bg-[#c1a35e] text-white hover:shadow-lg transition-all duration-300">
            Contact Us
            <svg
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}