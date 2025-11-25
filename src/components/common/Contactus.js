"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function submitToMailchimp(formData) {
    return new Promise((resolve, reject) => {
      const MAILCHIMP_URL = 'https://xbd.us11.list-manage.com/subscribe/post-json';
      const u = '279a02443a57a9821b4e42c23';
      const id = 'c3602f37ac';

      const params = new URLSearchParams({
        u,
        id,
        f_id: '00652fe1f0',
        EMAIL: formData.email,
        FNAME: formData.name,
        PHONE: formData.phone,
        COMPANY: formData.company,
        MESSAGE: formData.message,
        'b_279a02443a57a9821b4e42c23_c3602f37ac': '',
      });

      const callbackName = 'contactFormCallback_' + Date.now();
      const url = `${MAILCHIMP_URL}?${params.toString()}&c=${callbackName}`;
      const script = document.createElement('script');
      script.src = url;

      window[callbackName] = (data) => {
        delete window[callbackName];
        if (script.parentNode) {
          document.body.removeChild(script);
        }

        if (data.result === 'success' || (data.msg && data.msg.includes('already subscribed'))) {
          resolve(data);
        } else {
          reject(new Error(data.msg || 'Submission failed'));
        }
      };
      script.onerror = () => {
        delete window[callbackName];
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        reject(new Error('Network error. Please try again.'));
      };
      document.body.appendChild(script);

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

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setSubmitting(true);

    try {
      await submitToMailchimp(formValues);
      setSuccessMessage('Thank you for contacting us! We will get back to you soon.');
      setFormValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="contact-name" className="text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formValues.name}
              onChange={handleChange}
              disabled={submitting}
              required
              className="rounded-lg text-gray-700 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact-email" className="text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formValues.email}
              onChange={handleChange}
              disabled={submitting}
              required
              className="rounded-lg text-gray-700 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact-phone" className="text-sm font-medium text-gray-700 mb-2">
              Phone number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={formValues.phone}
              onChange={handleChange}
              disabled={submitting}
              className="rounded-lg text-gray-700 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact-company" className="text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              placeholder="Company or organization"
              value={formValues.company}
              onChange={handleChange}
              disabled={submitting}
              className="rounded-lg text-gray-700 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white disabled:opacity-60"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact-message" className="text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Share a few details about your enquiry"
            value={formValues.message}
            onChange={handleChange}
            disabled={submitting}
            required
            className="rounded-lg text-gray-700 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b69352] focus:border-transparent bg-white resize-vertical disabled:opacity-60"
          />
        </div>

        {successMessage && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <p className="text-sm font-medium text-green-800">{successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200">
            <p className="text-sm font-medium text-red-800">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition-colors duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
