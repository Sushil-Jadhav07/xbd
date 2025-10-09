'use client'
import React, { useState } from 'react'
import { MdImage, MdExpandMore } from 'react-icons/md'
import Image from 'next/image'

const CalltoAction = ({ callToActionData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: ''
  })

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
    socialLinks: {}
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

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Section - Visual Elements */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Top Block - Large Image */}
            <div className="bg-gray-200 rounded-lg h-64 lg:h-80 flex items-center justify-center relative overflow-hidden">
              {data.mainImage ? (
                <Image 
                  src={data.mainImage}
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
                {data.smallImage1 ? (
                  <Image 
                    src={data.smallImage1}
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
                {data.smallImage2 ? (
                  <Image 
                    src={data.smallImage2}
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
                    className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none"
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
                    className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none"
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
                      className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-400 focus:outline-none appearance-none"
                    >
                      {data.enquiryOptions?.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    <MdExpandMore className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
                  </div>
                </div>
              </div>
              
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
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg w-full">
                  {data.buttonText}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalltoAction