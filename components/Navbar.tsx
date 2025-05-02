'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import SkillsModal from './SkillsModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 shadow-gray-400 shadow-lg bg-black py-1 px-3">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="text-white text-3xl font-bold hover:shadow-white hover:text-blue-500 dark:hover:text-white transition-colors duration-200 hover:scale-120">
              JH
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-center items-center gap-12 text-white">
              <Link href="/" className="hover:text-blue-500 dark:hover:text-white transition-colors duration-200 hover:scale-120">
                /home
              </Link>
              <Link href="/about" className="hover:text-blue-500 dark:hover:text-white transition-colors duration-200 hover:scale-120">
                /about
              </Link>
              <Link href="/projects" className="hover:text-blue-500 dark:hover:text-white transition-colors duration-200 hover:scale-120">
                /projects
              </Link>
              <Link href="https://docs.google.com/document/d/19Zy4uEAaRvMSY3OW7eU6h4_Ib9oJnvuB-Ew25i7NfZY/edit?usp=sharing" target="_blank" className="hover:text-blue-500 dark:hover:text-white transition-colors duration-200 hover:scale-120">
                /resume
              </Link>
              <button
                onClick={() => setIsSkillsOpen(true)}
                className="hover:text-blue-500 dark:hover:text-white transition-colors duration-200 hover:scale-120"
              >
                /skills
              </button>
              {/* Socials */}
              <div className="flex items-center space-x-4 text-2xl">
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
                className="text-white  hover:text-blue-500 focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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

          {/* Mobile Menu Items */}
          {isOpen && (
            <div className="mt-4 space-y-4 lg:hidden text-white">
              <Link href="/" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/projects" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="https://docs.google.com/document/d/19Zy4uEAaRvMSY3OW7eU6h4_Ib9oJnvuB-Ew25i7NfZY/edit?usp=sharing" target="_blank" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>
                Resume
              </Link>
              <Link
                onClick={() => {
                  setIsSkillsOpen(true);
                  setIsOpen(false);
                }}
                href="/"
                className="block hover:text-blue-500"
              >
                Skills
              </Link>
              {/* Socials */}
              <div className="flex justify-start space-x-4 text-2xl pt-2">
                <a href="https://github.com/jhernandez504" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <FaGithub className="hover:text-blue-500" />
                </a>
                <a href="https://dev.to/jhernandez504" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <FaDev className="hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/in/jeremyhernandez504/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <FaLinkedin className="hover:text-blue-500" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>


      {/* Skills Modal */}
      {isSkillsOpen && (
        <SkillsModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
