import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect py-2 border-b border-primary border-opacity-20' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center border border-primary border-opacity-30">
              <span className="text-primary text-xs font-mono">HK</span>
            </div>
            <div className="text-xs font-mono text-slate-400">
              <span className="text-primary">SYSTEM</span>_NAVIGATION
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`nav-link font-mono text-xs ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                <span className="text-primary mr-1">{String(index + 1).padStart(2, '0')}.</span>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-primary focus:outline-none border border-primary border-opacity-30 rounded-md p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t border-primary border-opacity-20 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`block nav-link font-mono text-xs ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary mr-1">{String(index + 1).padStart(2, '0')}.</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 