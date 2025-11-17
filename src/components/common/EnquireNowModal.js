"use client";

import { useEffect, useState } from 'react';

export default function EnquireNowModal({ open, onClose, stageName = '', onSubmit }) {
  const [formValues, setFormValues] = useState({ 
    name: '', 
    email: '', 
    phoneNumber: '',
    stage: stageName
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Update stage when stageName prop changes
    setFormValues(prev => ({ ...prev, stage: stageName }));
  }, [stageName]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validate all required fields
    if (!formValues.name || !formValues.email || !formValues.phoneNumber || !formValues.stage) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formValues.phoneNumber) || formValues.phoneNumber.length < 10) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    setSubmitting(true);

    try {
      // If custom onSubmit is provided, use it
      if (onSubmit) {
        await onSubmit(formValues);
        setSuccessMessage('Thank you! We\'ll be in touch soon.');
      } else {
        // Submit to Mailchimp using JSONP to avoid CORS issues
        await submitToMailchimp(formValues);
        
        setSuccessMessage('Thank you! We will contact you soon.');
        // Clear form on success
        setFormValues({ 
          name: '', 
          email: '', 
          phoneNumber: '',
          stage: stageName
        });
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose?.();
          setSuccessMessage('');
        }, 2000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function submitToMailchimp(formData) {
    return new Promise((resolve, reject) => {
      // Mailchimp form details from embed code
      const MAILCHIMP_URL = 'https://xbd.us11.list-manage.com/subscribe/post-json';
      const u = '279a02443a57a9821b4e42c23';
      const id = '345dda8b10';
      
      // Build the URL with parameters
      const params = new URLSearchParams({
        u: u,
        id: id,
        EMAIL: formData.email,
        FNAME: formData.name,
        PHONE: formData.phoneNumber,
        STAGE: formData.stage,
        'b_279a02443a57a9821b4e42c23_345dda8b10': '', // Honeypot field
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
            reject(new Error(data.msg || 'Subscription failed'));
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Enquire Now</h1>
          <button 
            type="button" 
            aria-label="Close" 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer text-2xl leading-none" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Fill in your details and we'll get back to you soon.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name field */}
          <div>
            <label htmlFor="enquire-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full name *
            </label>
            <input
              id="enquire-name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c1a35e] focus:border-[#c1a35e]"
              placeholder="e.g., John Doe"
              required
              disabled={submitting}
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="enquire-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email *
            </label>
            <input
              id="enquire-email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c1a35e] focus:border-[#c1a35e]"
              placeholder="you@example.com"
              required
              disabled={submitting}
            />
          </div>

          {/* Phone Number field */}
          <div>
            <label htmlFor="enquire-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone number *
            </label>
            <input
              id="enquire-phone"
              name="phoneNumber"
              type="tel"
              value={formValues.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c1a35e] focus:border-[#c1a35e]"
              placeholder="e.g., +91 9876543210"
              required
              disabled={submitting}
            />
          </div>

          {/* Stage field */}
          <div>
            <label htmlFor="enquire-stage" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Stage *
            </label>
            <input
              id="enquire-stage"
              name="stage"
              type="text"
              value={formValues.stage}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c1a35e] focus:border-[#c1a35e]"
              placeholder="e.g., FOUNDATION"
              required
              disabled={submitting}
            />
          </div>

          {/* Security message */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Your information is secure and will be used only to contact you.</span>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-800 dark:text-green-300">{successMessage}</p>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <p className="text-sm font-medium text-red-800 dark:text-red-300">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white px-5 py-3 rounded-lg font-semibold text-base hover:from-[#8a6230] hover:to-[#b0924d] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}

