'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-950 shadow-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-black dark:text-white text-3xl font-bold hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-120">
            JH
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 ttext-black dark:text-white">
            <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-120">
              About
            </Link>
            <Link href="/projects" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-120">
              Projects
            </Link>
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-120">
              Home
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4 ml-4 text-2xl">
              <a href="https://github.com/jhernandez504" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-200 hover:scale-120" />
              </a>
              <a href="https://dev.to/jhernandez504" target="_blank" rel="noopener noreferrer">
                <FaDev className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-200 hover:scale-120" />
              </a>
              <a href="https://www.linkedin.com/in/jeremyhernandez504/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-200 hover:scale-120" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="mt-4 space-y-4 lg:hidden text-black dark:text-white">
            <Link href="/about" className="block hover:text-gray-900 dark:hover:text-white">About</Link>
            <Link href="/projects" className="block hover:text-gray-900 dark:hover:text-white">Projects</Link>
            <Link href="/" className="block hover:text-gray-900 dark:hover:text-white">Home</Link>
            <div className="flex justify-start space-x-4 text-2xl pt-2">
              <a href="https://github.com/jhernandez504" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-black dark:hover:text-white" />
              </a>
              <a href="https://dev.to/jhernandez504" target="_blank" rel="noopener noreferrer">
                <FaDev className="hover:text-black dark:hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/jeremyhernandez504/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




{/* <nav className="py-4 border-b">
      <ul className="flex gap-6 justify-center text-lg font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>
    </nav> */}