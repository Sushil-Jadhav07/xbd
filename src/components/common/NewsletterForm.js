'use client';

import { useState } from 'react';

const NewsletterForm = ({
  label = 'Newsletter',
  title = 'Join our newsletter',
  description = 'Get product thinking and growth insights straight to your inbox.',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  privacyNote = 'No spam, unsubscribe anytime.'
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    setLoading(true);
    try {
      await submitToMailchimp(email);
      setStatus({ type: 'success', message: 'Subscribed successfully.' });
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup failed:', error);
      setStatus({ type: 'error', message: error.message || 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  function submitToMailchimp(emailAddress) {
    return new Promise((resolve, reject) => {
      const MAILCHIMP_URL = 'https://xbd.us11.list-manage.com/subscribe/post-json';
      const u = '279a02443a57a9821b4e42c23';
      const id = 'c8c278b85a';

      const params = new URLSearchParams({
        u,
        id,
        f_id: '00642fe1f0',
        EMAIL: emailAddress,
        'b_279a02443a57a9821b4e42c23_c8c278b85a': ''
      });

      const callbackName = `newsletterCallback_${Date.now()}`;
      const script = document.createElement('script');
      script.src = `${MAILCHIMP_URL}?${params.toString()}&c=${callbackName}`;

      window[callbackName] = (data) => {
        delete window[callbackName];
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }

        if (data.result === 'success' || (data.msg && data.msg.includes('already subscribed'))) {
          resolve(data);
        } else {
          reject(new Error(data.msg || 'Subscription failed. Please try again.'));
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
            script.parentNode.removeChild(script);
          }
          reject(new Error('Request timeout. Please try again.'));
        }
      }, 10000);
    });
  }

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-gray-200 bg-white/70 backdrop-blur px-6 py-8 shadow-sm">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
          {label}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={loading}
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Subscribing…' : buttonText}
        </button>
      </form>

      {status.message && (
        <p
          className={`mt-4 text-sm ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status.message}
        </p>
      )}

      <p className="mt-4 text-center text-xs text-gray-500">{privacyNote}</p>
    </div>
  );
};

export default NewsletterForm;

