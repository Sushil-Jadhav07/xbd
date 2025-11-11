"use client";

import { useEffect, useState } from 'react';

export default function LeadFormModal({ open, onClose, title = 'Book a 30-min Growth Strategy Call', onSubmit }) {
  const [formValues, setFormValues] = useState({ 
    name: '', 
    email: '', 
    organization: '', 
    designation: '', 
    country: '', 
    primaryGoal: '',
    context: '',
    companySize: '',
    preferredTime: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
    if (!formValues.name || !formValues.email || !formValues.organization || 
        !formValues.designation || !formValues.country || !formValues.primaryGoal || !formValues.context) {
      setErrorMessage('Please fill in all required fields.');
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
          organization: '', 
          designation: '', 
          country: '', 
          primaryGoal: '',
          context: '',
          companySize: '',
          preferredTime: ''
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
        ORG: formData.organization,
        DES: formData.designation,
        COUNTRY: formData.country,
        MESSAGE: formData.context,
        GOAL: formData.primaryGoal,
        SIZE: formData.companySize || '',
        TIME: formData.preferredTime || '',
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
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md md:max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">{title}</h1>
          <button 
            type="button" 
            aria-label="Close" 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer text-2xl leading-none" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">A few basics so we can make your session count.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name and Email in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full name *
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
                placeholder="e.g., Anuj Pandey"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Work email *
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
                placeholder="you@company.com"
                required
                disabled={submitting}
              />
            </div>
          </div>

          {/* Organization and Designation in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Organization *
              </label>
              <input
                id="lead-organization"
                name="organization"
                type="text"
                value={formValues.organization}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
                placeholder="e.g., Adani Airports / Mid-market SaaS"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <label htmlFor="lead-designation" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Role / designation *
              </label>
              <input
                id="lead-designation"
                name="designation"
                type="text"
                value={formValues.designation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
                placeholder="e.g., Group CIO / CMO / COO / Founder"
                required
                disabled={submitting}
              />
            </div>
          </div>

          {/* Country field */}
          <div>
            <label htmlFor="lead-country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Country / region *
            </label>
            <input
              id="lead-country"
              name="country"
              type="text"
              value={formValues.country}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
              placeholder="e.g., India / UAE / Singapore / US / EU"
              required
              disabled={submitting}
            />
          </div>

          {/* Primary Goal dropdown */}
          <div>
            <label htmlFor="lead-primaryGoal" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Primary goal *
            </label>
            <select
              id="lead-primaryGoal"
              name="primaryGoal"
              value={formValues.primaryGoal}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
              required
              disabled={submitting}
            >
              <option value="">Select your primary goal</option>
              <option value="Seek strategic direction and clarity on growth">Seek strategic direction and clarity on growth</option>
              <option value="Explore Collaboration / Advisory Possibilities">Explore Collaboration / Advisory Possibilities</option>
              <option value="Explore Learning & Development Opportunities for my organisation">Explore Learning & Development Opportunities for my organisation</option>
              <option value="Keynote">Keynote</option>
              <option value="Other">Other (please describe below)</option>
            </select>
          </div>

          {/* Brief context or challenge field */}
          <div>
            <label htmlFor="lead-context" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Anything specific you&apos;d like to cover? *
            </label>
            <textarea
              id="lead-context"
              name="context"
              value={formValues.context}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500 resize-vertical"
              placeholder="What's the #1 bottleneck or outcome you want from this call?"
              required
              disabled={submitting}
            />
          </div>

          {/* Optional: Company size dropdown */}
          <div>
            <label htmlFor="lead-companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company size (optional)
            </label>
            <select
              id="lead-companySize"
              name="companySize"
              value={formValues.companySize}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
              disabled={submitting}
            >
              <option value="">Select company size</option>
              <option value="1-50">1-50</option>
              <option value="51-500">51-500</option>
              <option value="501-5000">501-5000</option>
              <option value="5000+">5000+</option>
            </select>
          </div>

          {/* Optional: Preferred time window dropdown */}
          <div>
            <label htmlFor="lead-preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Preferred time window (optional)
            </label>
            <select
              id="lead-preferredTime"
              name="preferredTime"
              value={formValues.preferredTime}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 dark:focus:border-gray-500"
              disabled={submitting}
            >
              <option value="">Select preferred time</option>
              <option value="Morning">Morning (your local time)</option>
              <option value="Afternoon">Afternoon (your local time)</option>
              <option value="Evening">Evening (your local time)</option>
            </select>
          </div>

          {/* Security message */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Your information is secure and used only to schedule your session.</span>
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
            className="w-full bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-lg font-semibold text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Claim My Strategy Call'}
          </button>
        </form>
      </div>
    </div>
  );
}