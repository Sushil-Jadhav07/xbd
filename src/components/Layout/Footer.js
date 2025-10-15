"use client";

import { MdImage } from 'react-icons/md';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const navItems = [
    { name: 'Book', href: '/book' },
    { name: 'Learning Hub', href: '/learning-hub' },
    { name: 'About Anuj', href: '/about' },
    { name: 'Work with Anuj', href: '/work' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 mx-[15px] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="mb-6">
                <div className="bg-gray-700 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                  <MdImage className="text-gray-300 text-xl" />
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Accelerating exponential growth for leaders and organizations worldwide through proven frameworks and strategies.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-black dark:text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-black dark:text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
                    Growth Framework
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
                    Tools & Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-black dark:text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HiOutlineMail className="w-5 h-5 text-gray-800 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 dark:text-gray-400">Email us</p>
                    <a href="mailto:hello@anuj.com" className="text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200">
                      hello@anuj.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <HiOutlinePhone className="w-5 h-5 text-gray-800 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 dark:text-gray-400">Call us</p>
                    <a href="tel:+1234567890" className="text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  >
                    Start Your Growth
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2024 Anuj Pandey. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;