"use client";

import { useState } from 'react';
import Link from 'next/link';

const infoItems = [
  {
    title: 'Talk to our team',
    description: 'Call us Monday to Friday, 9:00 AM – 6:00 PM IST for immediate assistance.',
    primary: '+1 (234) 567-890',
    href: 'tel:+1 (234) 567-890'
  },
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
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function submitToMailchimp(formData) {
    return new Promise((resolve, reject) => {
      // Mailchimp contact form details
      const MAILCHIMP_URL = 'https://xbd.us11.list-manage.com/subscribe/post-json';
      const u = '279a02443a57a9821b4e42c23';
      const id = 'cc2b411598';
      
      // Build the URL with parameters
      const params = new URLSearchParams({
        u: u,
        id: id,
        EMAIL: formData.email,
        FNAME: formData.name,
        PHONE: formData.phone,
        MMERGE5: formData.company, // Organization field
        MMERGE2: formData.message, // Message field
        'b_279a02443a57a9821b4e42c23_cc2b411598': '', // Honeypot field
      });

      // Use JSONP to submit to Mailchimp (avoids CORS issues)
      const callbackName = 'mailchimpCallback_' + Date.now();
      const url = `${MAILCHIMP_URL}?${params.toString()}&c=${callbackName}`;

      // Create callback function
      window[callbackName] = (data) => {
        delete window[callbackName];
        document.body.removeChild(script);

        if (data.result === 'success') {
          resolve(data);
        } else {
          // Mailchimp returns result='error' even for "already subscribed"
          // Check the message to see if it's actually okay
          if (data.msg && (data.msg.includes('already subscribed') || data.msg.includes('is already'))) {
            resolve(data); // Treat as success
          } else {
            reject(new Error(data.msg || 'Submission failed'));
          }
        }
      };

      // Create and append script tag
      const script = document.createElement('script');
      script.src = url;
      script.onerror = () => {
        delete window[callbackName];
        document.body.removeChild(script);
        reject(new Error('Network error. Please try again.'));
      };
      document.body.appendChild(script);

      // Timeout after 10 seconds
      setTimeout(() => {
        if (window[callbackName]) {
          delete window[callbackName];
          if (script.parentNode) {
            document.body.removeChild(script);
          }
          reject(new Error('Request timeout. Please try again.'));
        }
      }, 10000);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validate required fields
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setSubmitting(true);

    try {
      await submitToMailchimp(formValues);
      
      setSuccessMessage('Thank you for contacting us! We will get back to you soon.');
      // Clear form on success
      setFormValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <p className="md:text-[42px] text-lg font-semibold text-[#b69352] tracking-wide uppercase mb-3">Contact</p>
          <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-6">We would love to hear from you</h1>
          <p className="text-base text-gray-600">
            Whether you have a question about our programs, partnership opportunities, or anything else, the XBD team is ready to answer all your questions.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
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
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="contact-name" className="text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="contact-name" 
                    name="name" 
                    type="text" 
                    placeholder="Your full name" 
                    value={formValues.name}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60" 
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="contact-email" className="text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="contact-email" 
                    name="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={formValues.email}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60" 
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="contact-phone" className="text-sm font-medium text-gray-700 mb-2">Phone number</label>
                  <input 
                    id="contact-phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    value={formValues.phone}
                    onChange={handleChange}
                    disabled={submitting}
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60" 
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="contact-company" className="text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    id="contact-company" 
                    name="company" 
                    type="text" 
                    placeholder="Company or organization" 
                    value={formValues.company}
                    onChange={handleChange}
                    disabled={submitting}
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="contact-message" className="text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows="5" 
                  placeholder="Share a few details about your enquiry" 
                  value={formValues.message}
                  onChange={handleChange}
                  disabled={submitting}
                  required
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white resize-vertical disabled:opacity-60" 
                />
              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-sm font-medium text-green-800">{successMessage}</p>
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm font-medium text-red-800">{errorMessage}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition-colors duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>

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
