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
            Pre-Order Book Now
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
            <a
              href={websiteShopLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Shop from our website
            </a>
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

