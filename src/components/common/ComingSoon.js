"use client";

import { useState, useEffect } from 'react';
import { HiOutlineSparkles, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';
import Image from 'next/image';

const ComingSoon = ({ 
  title = "Something Amazing is Coming",
  subtitle = "We're working hard to bring you something extraordinary. Stay tuned!",
  launchDate = "2024-12-31T00:00:00Z",
  backgroundImage = null,
  logo = null,
  showEmailSignup = true,
  showCountdown = true,
  socialLinks = [],
  onEmailSubmit = null
}) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(launchDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handlePreRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!email || !phone) return;

    setIsSubmitting(true);
    try {
      if (onEmailSubmit) {
        await onEmailSubmit({ email, phone });
      } else {
        // Default behavior - just simulate success
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error submitting pre-registration:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #9d7035 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #c1a35e 0%, transparent 50%)`
        }} />
      </div>

      {/* Background Image Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          {logo && (
            <div className="mb-8">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
          )}

          {/* Main Title */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
              <HiOutlineSparkles className="text-lg" />
              Coming Soon
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

         

          {/* Pre-Registration */}
          {showEmailSignup && (
            <div className="mb-12">
              <div className="max-w-md mx-auto">
                {!isSubmitted ? (
                  <form onSubmit={handlePreRegisterSubmit} className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                      <HiOutlineMail className="text-lg" />
                      <span className="text-sm font-medium">Pre-Register Now</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 cursor-pointer bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg  hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Pre-Register'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-green-400 mb-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">You're all set!</span>
                    </div>
                    <p className="text-gray-300 text-sm">Thank you for pre-registering!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white border-opacity-10">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500" />
    </div>
  );
};

export default ComingSoon;
