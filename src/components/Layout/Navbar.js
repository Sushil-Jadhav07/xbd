"use client";

import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdImage } from 'react-icons/md';
import LogoMain from "../../asset/logomain.png"
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Book', href: '/book' },
    { name: 'Learning Hub', href: '/learning-hub' },
    { name: 'About Anuj', href: '/about-anuj' },
    { name: 'Work with Anuj', href: '/community' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-300 dark:border-gray-800 md:sticky md:top-0 md:z-50 transition-colors">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 md:py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/"  className="flex-shrink-0 w-[130px]">
            <Image src={LogoMain} alt="Logo Main" />
            {/* <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3 w-24 h-10 flex items-center justify-center transition-colors">
              <MdImage className="text-gray-400 dark:text-gray-300 text-xl" />
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle className="ml-2" />
            
            {/* Contact Button */}
            <a
              href="/contact"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 ml-2"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme toggle on mobile */}
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none focus:text-black dark:focus:text-white transition-colors duration-200"
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
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Contact Button */}
            <a
              href="/contact"
              className="block mx-3 mt-4 bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg font-medium text-center hover:cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
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
