'use client'
import React, { useState } from 'react'
import { MdImage, MdExpandMore } from 'react-icons/md'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

// Import fallback images
import fallbackMainImage from '../../asset/industry/1.webp'
import fallbackSmallImage1 from '../../asset/industry/2.webp'
import fallbackSmallImage2 from '../../asset/industry/3.webp'

const CalltoAction = ({ callToActionData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Fallback data
  const fallbackData = {
    formTitle: "Book a free 15-minute discovery",
    formSubtitle: "Available for hybrid & onsite events worldwide",
    namePlaceholder: "Your Name",
    emailPlaceholder: "YourCompany@gmail.com",
    enquiryOptions: ["Keynote/Conference", "Workshop", "Consulting", "Other"],
    buttonText: "Request a call",
    privacyText: "We respect your privacy — we only use contact details to respond.",
    privacyLinkText: "Privacy",
    socialLinks: {},
    mainImage: { asset: { url: fallbackMainImage } },
    smallImage1: { asset: { url: fallbackSmallImage1 } },
    smallImage2: { asset: { url: fallbackSmallImage2 } }
  }

  const data = callToActionData || fallbackData

  // Set initial enquiry type
  React.useEffect(() => {
    if (data.enquiryOptions && data.enquiryOptions.length > 0) {
      setFormData(prev => ({ ...prev, enquiryType: data.enquiryOptions[0] }))
    }
  }, [data.enquiryOptions])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function submitToMailchimp(formData) {
    return new Promise((resolve, reject) => {
      // Mailchimp CallToAction form details
      const MAILCHIMP_URL = 'https://xbd.us11.list-manage.com/subscribe/post-json';
      const u = '279a02443a57a9821b4e42c23';
      const id = '480c6e3d8c';
      
      // Build the URL with parameters
      const params = new URLSearchParams({
        u: u,
        id: id,
        EMAIL: formData.email,
        FNAME: formData.name,
        MMERGE8: formData.enquiryType, // enquiry_type field
        'b_279a02443a57a9821b4e42c23_480c6e3d8c': '', // Honeypot field
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.enquiryType) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setSubmitting(true);

    try {
      await submitToMailchimp(formData);
      
      setSuccessMessage('Thank you! We will be in touch shortly.');
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        enquiryType: data.enquiryOptions?.[0] || ''
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Section - Visual Elements */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Top Block - Large Image */}
            <div className="bg-gray-200 rounded-lg h-64 lg:h-80 flex items-center justify-center relative overflow-hidden">
              {data.mainImage?.asset?.url ? (
                <Image 
                  src={data.mainImage.asset.url}
                  alt={data.mainImage.alt || "Call to action"}
                  fill
                  className="object-cover"
                />
              ) : data.mainImage?.fallbackImage ? (
                <Image 
                  src={data.mainImage.fallbackImage}
                  alt="Call to action"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                  <MdImage className="text-gray-500 text-3xl" />
                </div>
              )}
            </div>
            
            {/* Bottom Block - Two Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-lg h-48 lg:h-64 flex items-center justify-center relative overflow-hidden">
                {data.smallImage1?.asset?.url ? (
                  <Image 
                    src={data.smallImage1.asset.url}
                    alt={data.smallImage1.alt || "Small image 1"}
                    fill
                    className="object-cover"
                  />
                ) : data.smallImage1?.fallbackImage ? (
                  <Image 
                    src={data.smallImage1.fallbackImage}
                    alt="Small image 1"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gray-400 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                    <MdImage className="text-gray-500 text-2xl" />
                  </div>
                )}
              </div>
              <div className="bg-gray-200 rounded-lg h-48 lg:h-64 flex items-center justify-center relative overflow-hidden">
                {data.smallImage2?.asset?.url ? (
                  <Image 
                    src={data.smallImage2.asset.url}
                    alt={data.smallImage2.alt || "Small image 2"}
                    fill
                    className="object-cover"
                  />
                ) : data.smallImage2?.fallbackImage ? (
                  <Image 
                    src={data.smallImage2.fallbackImage}
                    alt="Small image 2"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gray-400 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                    <MdImage className="text-gray-500 text-2xl" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Section - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg p-6 lg:p-8">
              
              {/* Header */}
              <div className="text-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  {data.formTitle}
                </h3>
                <p className="text-sm text-gray-700">
                  {data.formSubtitle}
                </p>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Form Fields */}
                <div className="space-y-6 mb-8">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-black font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={data.namePlaceholder}
                      disabled={submitting}
                      required
                      className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none disabled:opacity-60"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label className="block text-black font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={data.emailPlaceholder}
                      disabled={submitting}
                      required
                      className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none disabled:opacity-60"
                    />
                  </div>
                  
                  {/* Enquiry Type Field */}
                  <div>
                    <label className="block text-black font-medium mb-2">Enquiry type</label>
                    <div className="relative">
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        disabled={submitting}
                        required
                        className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none appearance-none disabled:opacity-60"
                      >
                        {data.enquiryOptions?.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                      <MdExpandMore className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Success Message */}
                {successMessage && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-sm font-medium text-green-800 text-center">{successMessage}</p>
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm font-medium text-red-800 text-center">{errorMessage}</p>
                  </div>
                )}
                
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mb-8">
                  {data.socialLinks?.linkedin && (
                    <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-600 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200">
                      <span className="text-white text-sm font-bold">in</span>
                    </a>
                  )}
                  {data.socialLinks?.facebook && (
                    <a href={data.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-600 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200">
                      <span className="text-white text-sm font-bold">f</span>
                    </a>
                  )}
                  {data.socialLinks?.twitter && (
                    <a href={data.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-gray-600 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200">
                      <span className="text-white text-lg font-bold">X</span>
                    </a>
                  )}
                </div>
                
                {/* Submit Button */}
                <div className="text-center mb-6">
                  <button 
                    type="submit"
                    disabled={submitting}
                    className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting...' : data.buttonText}
                  </button>
                </div>
                
                {/* Privacy Statement */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {data.privacyText}{' '}
                    {data.privacyLinkText && (
                      <a href="#" className="text-black underline hover:text-gray-700">
                        {data.privacyLinkText}
                      </a>
                    )}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalltoAction