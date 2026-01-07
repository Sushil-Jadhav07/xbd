"use client";

import Link from 'next/link';
import ContactForm from '../common/Contactus';

const infoItems = [
  // {
  //   title: 'Talk to our team',
  //   description: 'Call us Monday to Friday, 9:00 AM – 6:00 PM IST for immediate assistance.',
  //   primary: '+1 (234) 567-890',
  //   href: 'tel:+1 (234) 567-890'
  // },
  {
    title: 'General enquiries',
    description: 'Drop us an email and we will get back to you within one business day.',
    primary: 'anuj@xbd.co.in',
    href: 'mailto:anuj@xbd.co.in'
  },
  {
    title: 'Visit the XBD office',
    description: 'A-123, Innovation Park, Bengaluru, Karnataka 560001, India',
    primary: 'Open 9:00 AM – 7:00 PM IST',
    href: 'https://maps.google.com/?q=A-123+Innovation+Park+Bengaluru'
  }
];

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="md:text-[42px] text-lg font-semibold text-[#b69352] tracking-wide uppercase mb-3">Contact</h1>
          <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-6">We would love to hear from you</h1>
          <p className="text-base text-gray-600">
            Whether you have a question about our programs, partnership opportunities, or anything else, the XBD team is ready to answer all your questions.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {infoItems.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
              <Link href={item.href} className="text-[#b69352] font-medium ">
                {item.primary}
              </Link>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <ContactForm />

          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why teams reach out</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e]" />
                  <p>Guidance on choosing the right XBD growth program for your organization.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e]" />
                  <p>Enterprise partnerships and custom curriculum requests.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e]" />
                  <p>Press, speaking engagements, or collaboration opportunities.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 text-white rounded-3xl p-10">
              <h2 className=" text-black text-2xl font-semibold mb-4">Prefer a quick call?</h2>
              <p className="text-gray-800 mb-6">Schedule a discovery call with our advisory team and explore how XBD can support your growth.</p>
              <Link href="/book-a-call" className="inline-block bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">Book a call</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
