"use client";

import { useEffect, useState } from 'react';

export default function LeadFormModal({ open, onClose, title = 'Book a Strategy Call', onSubmit }) {
  const [formValues, setFormValues] = useState({ 
    name: '', 
    email: '', 
    organization: '', 
    designation: '', 
    country: '', 
    message: '' 
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

    // Validate all fields
    if (!formValues.name || !formValues.email || !formValues.organization || 
        !formValues.designation || !formValues.country || !formValues.message) {
      setErrorMessage('Please fill in all fields.');
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
          message: '' 
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
        MESSAGE: formData.message,
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

      <div className="relative z-10 w-full max-w-md sm:max-w-xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
          <button 
            type="button" 
            aria-label="Close" 
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl leading-none" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name and Email in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
                placeholder="Your full name"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
                placeholder="you@example.com"
                required
                disabled={submitting}
              />
            </div>
          </div>

          {/* Organization and Designation in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lead-organization" className="block text-sm font-medium text-gray-700">
                Organization *
              </label>
              <input
                id="lead-organization"
                name="organization"
                type="text"
                value={formValues.organization}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
                placeholder="Your organization name"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <label htmlFor="lead-designation" className="block text-sm font-medium text-gray-700">
                Designation *
              </label>
              <input
                id="lead-designation"
                name="designation"
                type="text"
                value={formValues.designation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
                placeholder="Your designation"
                required
                disabled={submitting}
              />
            </div>
          </div>

          {/* Country field */}
          <div>
            <label htmlFor="lead-country" className="block text-sm font-medium text-gray-700">
              Country *
            </label>
            <input
              id="lead-country"
              name="country"
              type="text"
              value={formValues.country}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              placeholder="Your country"
              required
              disabled={submitting}
            />
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700">
              Message *
            </label>
            <textarea
              id="lead-message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 resize-vertical"
              placeholder="Tell us about your requirements or any questions you have..."
              required
              disabled={submitting}
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
            className="w-full bg-black text-white px-5 py-3 rounded-lg font-semibold text-base hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}