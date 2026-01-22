"use client";

import { useEffect } from 'react';

export default function ShopModal({ open, onClose, isInIndia = false }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  // Amazon links
  const amazonIndiaLink = "https://www.amazon.in/dp/B0GDJQPS52";
  const amazonInternationalLink = "https://www.amazon.in/dp/B0GDJQPS52"; // Update with actual Amazon International link
  const websiteShopLink = "https://xbd-2.myshopify.com/";
  const kindleLink = "https://www.amazon.com/Exponential-Design-Growth-Designed-AI-First-ebook/dp/B0GDJQPS52/ref=sr_1_1?crid=1CCGJUOLKMOGU&dib=eyJ2IjoiMSJ9.vYk6UmxRtKXiN5A_uXRpYRp9Cgf1efXj-zf1xk9lKmAOGwqSgB1Ee3y1ccGM1rNHoOkexKfevjvww6ODgebS-SkFBHQb0pwqxz4VZwdAGHOy1VCyn3GjaZpnZBbe4yX-DxeD4GPuU8BuUyZN2qmae-zN3Whm1QUjJF50avrCAaC0E1sroHVzEURtCgf7lc5vBh74r6iZXAYVyKMZ2LfjhG6Aqrm_blrf4vzLJy6CyyE.D2iOWPZAOKhqEBgjclcGYrgfjQjwpEO5bRHi228qVSE&dib_tag=se&keywords=exponential+by+design&qid=1768984513&sprefix=%2Caps%2C298&sr=8-1";
  const paperbackLink = "https://www.amazon.com/Exponential-Design-Growth-Designed-AI-First/dp/8199321741/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.vYk6UmxRtKXiN5A_uXRpYRp9Cgf1efXj-zf1xk9lKmAOGwqSgB1Ee3y1ccGM1rNHoOkexKfevjvww6ODgebS-SkFBHQb0pwqxz4VZwdAGHOy1VCyn3GjaZpnZBbe4yX-DxeD4GPuU8BuUyZN2qmae-zN3Whm1QUjJF50avrCAaC0E1sroHVzEURtCgf7lc5vBh74r6iZXAYVyKMZ2LfjhG6Aqrm_blrf4vzLJy6CyyE.D2iOWPZAOKhqEBgjclcGYrgfjQjwpEO5bRHi228qVSE&qid=1768984513&sr=8-1";
  const hardcoverLink = "https://www.amazon.com/Exponential-Design-Growth-Designed-AI-First/dp/8199321768/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.vYk6UmxRtKXiN5A_uXRpYRp9Cgf1efXj-zf1xk9lKmAOGwqSgB1Ee3y1ccGM1rNHoOkexKfevjvww6ODgebS-SkFBHQb0pwqxz4VZwdAGHOy1VCyn3GjaZpnZBbe4yX-DxeD4GPuU8BuUyZN2qmae-zN3Whm1QUjJF50avrCAaC0E1sroHVzEURtCgf7lc5vBh74r6iZXAYVyKMZ2LfjhG6Aqrm_blrf4vzLJy6CyyE.D2iOWPZAOKhqEBgjclcGYrgfjQjwpEO5bRHi228qVSE&qid=1768984513&sr=8-1";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Order Book Now
          </h1>
          <button 
            type="button" 
            aria-label="Close" 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer text-2xl leading-none" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* Show Amazon only if NOT in India */}
          {!isInIndia && (
            <>
              <a
                href={amazonInternationalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Shop from Amazon
              </a>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <span className="font-semibold">Note:</span> Paperback, Hardback and Hardback with Dust Cover will be available from 21st January
                </p>
              </div>
            </>
          )}

          {/* Show Website only if in India */}
          {isInIndia && (
            <>
              <a
                href={websiteShopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Shop from our website
              </a>
              <a
                href={kindleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Order from Kindle
              </a>
              <a
                href={hardcoverLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Order from Hardcover
              </a>
              <a
                href={paperbackLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Order from Paperback
              </a>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

