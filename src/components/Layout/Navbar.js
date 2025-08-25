"use client";

import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Book', href: '/book' },
    { name: 'Learning Hub', href: '/learning-hub' },
    { name: 'About Anuj', href: '/about' },
    { name: 'Work with Anuj', href: '/community' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-300 md:sticky md:top-0 md:z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 md:py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-gray-200 rounded-lg p-3 w-24 h-10 flex items-center justify-center">
              <MdImage className="text-gray-400 text-xl" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            {/* Contact Button */}
            <a
              href="/contact"
              className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-black transition-colors duration-200"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-black font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Contact Button */}
            <a
              href="/contact"
              className="block mx-3 mt-4 bg-black text-white px-6 py-2.5 rounded-lg font-medium text-center hover:cursor-pointer hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;