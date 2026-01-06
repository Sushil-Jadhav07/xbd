'use client'
import React from 'react'
import { useState } from 'react'
import { MdImage } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import ShopModal from '../common/ShopModal'
import PreviewChapterForm from '../common/PreviewChapterForm'

const BookBanner = ({ bookBannerData }) => {
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isInIndia, setIsInIndia] = useState(false);
  const [isCheckingLocation, setIsCheckingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);
  
  // Fallback data
  const fallbackData = {
    categoryTag: "Book",
    titleLine1: "Unlock Exponential",
    titleLine2: "Growth Lead Smarter,",
    titleLine3: "Scale Faster",
    description: "A strategic playbook for leaders who want to harness AI, design, and systems thinking to stay ahead of disruption.",
    keyFeatures: [
      "See the X Framework in action",
      "Run a 6-week pilot with templates",
      "Make confident decisions with peer-tested playbooks"
    ],
    infoTags: ["Hardcover & eBook", "For CXOs and transformation leaders"],
    primaryButton: { text: "Pre-Order Book Now" },
    secondaryButton: { text: "Preview Free Chapter" },
    trustIndicator: "Trusted by 5,000+ leaders and endorsed by global experts."
  };

  const data = bookBannerData || fallbackData;

  // Fallback: Get country from IP address
  const getCountryFromIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return data.country_code || null;
    } catch (error) {
      console.error('Error getting country from IP:', error);
      return null;
    }
  };

  // Function to get country from coordinates using reverse geocoding
  const getCountryFromCoordinates = async (latitude, longitude) => {
    try {
      // Using OpenStreetMap Nominatim API (free, no API key required)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            'User-Agent': 'XBD Book Store' // Required by Nominatim
          }
        }
      );
      const data = await response.json();
      return data.address?.country_code?.toUpperCase() || null;
    } catch (error) {
      console.error('Error getting country from coordinates:', error);
      // Fallback to IP-based geolocation
      return await getCountryFromIP();
    }
  };

  // Check if location services are available and enabled
  const checkLocationPermission = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      return Promise.reject(new Error('Geolocation is not supported by your browser'));
    }
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        reject,
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 300000 // Cache for 5 minutes
        }
      );
    });
  };

  // Main function to check location and determine if user is in India
  const handleGetCopyClick = async () => {
    setIsCheckingLocation(true);
    setLocationError(null);

    try {
      // First, try to get precise location
      const position = await checkLocationPermission();
      const { latitude, longitude } = position.coords;
      const countryCode = await getCountryFromCoordinates(latitude, longitude);
      
      if (countryCode === 'IN') {
        setIsInIndia(true);
      } else {
        setIsInIndia(false);
      }
      setIsShopModalOpen(true);
    } catch (error) {
      console.error('Location error:', error);
      
      // If user denied location or error occurred, try IP-based detection
      try {
        const countryCode = await getCountryFromIP();
        if (countryCode === 'IN') {
          setIsInIndia(true);
        } else {
          setIsInIndia(false);
        }
        setIsShopModalOpen(true);
      } catch (ipError) {
        console.error('IP geolocation error:', ipError);
        setLocationError('Unable to determine your location. Showing default options.');
        // Default to showing both options if we can't determine location
        setIsInIndia(true);
        setIsShopModalOpen(true);
      }
    } finally {
      setIsCheckingLocation(false);
    }
  };

  // Prefer Sanity link for primary CTA; fallback to modal only if link is missing
  const renderPrimaryButton = () => {
    if (!data.primaryButton) return null;
    const btn = data.primaryButton;
    const href = btn.link;

    if (href) {
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200 text-base"
          >
            {btn.text}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200 text-base"
        >
          {btn.text}
        </Link>
      );
    }

    // Fallback: open shop modal with location check
    return (
      <button
        type="button"
        onClick={handleGetCopyClick}
        disabled={isCheckingLocation}
        className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200 text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isCheckingLocation ? 'Checking location...' : btn.text}
      </button>
    );
  };

  return (
    <>
    <div className="bg-white md:mx-[15px] mx-[5px] py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Book Cover */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg h-80 lg:h-full flex items-center justify-center relative overflow-hidden">
              {data.bookCoverImage ? (
                (() => {
                  // Handle Sanity image structure
                  let imageUrl = null
                  if (typeof data.bookCoverImage === 'string') {
                    imageUrl = data.bookCoverImage
                  } else if (data.bookCoverImage.asset?.url) {
                    imageUrl = data.bookCoverImage.asset.url
                  } else if (data.bookCoverImage.asset) {
                    try {
                      imageUrl = urlFor(data.bookCoverImage).width(2000).height(2000).url()
                    } catch (e) {
                      console.error('Error processing image:', e)
                    }
                  }
                  
                  return imageUrl ? (
                    <Image 
                      src={imageUrl}
                      alt={data.bookCoverImage.alt || "Book Cover"}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  ) : (
                    <>
                      <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                        <MdImage className="text-gray-500 text-3xl" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                    </>
                  )
                })()
              ) : (
                <>
                  <div className="bg-gray-400 rounded-lg p-6 w-24 h-20 flex items-center justify-center">
                    <MdImage className="text-gray-500 text-3xl" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20"></div>
                </>
              )}
            </div>
          </div>
          
          {/* Right Column - Book Details */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Category Tag */}
            {/* <h4 className="inline-block bg-gray-100 text-black text-xs px-4 py-2 rounded-full font-medium">
              {data.categoryTag}
            </h4> */}
            
            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl  font-medium text-black leading-tight">
                {data.titleLine1}
              </h1>
              <h1 className="text-3xl md:text-4xl  font-medium text-black leading-tight">
                {data.titleLine2}
              </h1>
              <h1 className="text-3xl md:text-4xl  font-bold text-black leading-tight">
                {data.titleLine3}
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-black max-w-4xl leading-relaxed">
              {data.description}
            </p>
            
            {/* Key Features */}
            {data.keyFeatures && (
              <ul className="space-y-3">
                {data.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-black text-lg mt-0">•</span>
                    <span className="text-black text-sm mt-1">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Information Tags */}
            {data.infoTags && (
              <div className="flex flex-wrap gap-3">
                {data.infoTags.map((tag, index) => (
                  <h4 key={index} className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full">
                    {tag}
                  </h4>
                ))}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {renderPrimaryButton()}
              {data.secondaryButton && (
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-white text-black px-8 py-4 rounded-lg text-center md:text-left font-medium border-2 border-black hover:bg-gray-50 transition-colors duration-200 text-base"
                >
                  {data.secondaryButton.text}
                </button>
              )}
            </div>
            
            {/* Trust Indicator */}
            {/* <div className="flex items-center gap-2 pt-4">
              <span className="text-black text-lg">★</span>
              <p   className="text-black text-base">
                {data.trustIndicator}
              </p>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
    <ShopModal
      open={isShopModalOpen}
      onClose={() => {
        setIsShopModalOpen(false);
        setLocationError(null);
      }}
      isInIndia={isInIndia}
    />
    {locationError && (
      <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm">
        <p className="text-sm">{locationError}</p>
      </div>
    )}
    <PreviewChapterForm
      open={isPreviewOpen}
      onClose={() => setIsPreviewOpen(false)}
    />
    </>
  )
}

export default BookBanner