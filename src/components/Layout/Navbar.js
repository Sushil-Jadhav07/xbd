"use client";

import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import LogoMain from "../../asset/logomain.png"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Book', href: '/book' },
    // { name: 'Learning Hub', href: '/learning-hub' },
    { name: 'About Anuj', href: '/about-anuj' },
    // { name: 'Work with Anuj', href: '/community' },
  ];

  return (
    <nav className="bg-[#f5f1eb] md:sticky md:top-0 md:z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-0 py-3">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="/" className="flex-shrink-0 w-[130px] cursor-pointer">
            <Image src={LogoMain} alt="Logo Main" />
          </a>

          {/* Right Side - Navigation Links and Contact Button */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-700 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Contact Button */}
            <a
              href="/contact"
              className="bg-gradient-to-br !from-[#9d7035] !to-[#c1a35e] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-800 focus:outline-none focus:text-gray-700 transition-colors duration-200"
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
        <div className="md:hidden bg-[#f5f1eb] border-t border-gray-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-black hover:text-gray-800 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Contact Button */}
            <a
              href="/contact"
              className="block mx-3 mt-4 bg-gradient-to-br from-[#9d7035] to-[#c1a35e] text-white px-6 py-2.5 rounded-lg font-medium text-center hover:bg-amber-700 transition-colors duration-200"
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
