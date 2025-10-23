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
        // Otherwise, submit to our Mailchimp API
        const response = await fetch('/api/lead/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage(result.message || 'Thank you! We\'ll be in touch soon.');
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
        } else {
          setErrorMessage(result.error || 'Something went wrong. Please try again.');
        }
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
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