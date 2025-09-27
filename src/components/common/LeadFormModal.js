"use client";

import { useEffect, useState } from 'react';

export default function LeadFormModal({ open, onClose, title = 'Book a Strategy Call', onSubmit }) {
  const [formValues, setFormValues] = useState({ name: '', email: '', contact: '' });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    if (!formValues.name || !formValues.email || !formValues.contact) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    setSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(formValues);
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      onClose?.();
      setFormValues({ name: '', email: '', contact: '' });
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.');
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

      <div className="relative z-10 w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
          <button type="button" aria-label="Close" className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="lead-name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="lead-email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="lead-contact" className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              id="lead-contact"
              name="contact"
              type="tel"
              value={formValues.contact}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              placeholder="Phone number"
              required
            />
          </div>

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black text-white px-5 py-3 rounded-lg font-semibold text-base hover:bg-gray-800 transition-colors disabled:opacity-70"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}


