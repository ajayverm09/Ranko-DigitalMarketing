import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine active link based on current path
  const getActiveLink = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/blogs') return 'blogs';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const [activeLink, setActiveLink] = useState(getActiveLink());

  // Update active link when route changes
  useEffect(() => {
    setActiveLink(getActiveLink());
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white md:mx-20 md:rounded-b-4xl shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <nav className="px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://ranko.themejunction.net/wp-content/uploads/2025/09/primary-logo.png"
            alt="Logo"
            className="h-8 transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8 items-center">
          <a 
            href="/" 
            className={`relative text-gray-800 transition-all duration-300 py-1 group ${activeLink === 'home' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeLink === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </a>
          <a 
            href="/about" 
            className={`relative text-gray-800 transition-all duration-300 py-1 group ${activeLink === 'about' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('about')}
          >
            About
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeLink === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </a>
          <a 
            href="/blogs" 
            className={`relative text-gray-800 transition-all duration-300 py-1 group ${activeLink === 'blogs' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('blogs')}
          >
            Blog
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeLink === 'blogs' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </a>
          <a 
            href="/contact" 
            className={`relative text-gray-800 transition-all duration-300 py-1 group ${activeLink === 'contact' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeLink === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </a>
          <button className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="flex flex-col space-y-4 py-4 px-6">
          <a
            href="/"
            className={`relative text-gray-800 transition-all duration-300 py-1 flex items-center ${activeLink === 'home' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('home')}
          >
            <span className={`absolute left-0 top-0 h-full w-1 bg-blue-600 transition-all duration-300 ${activeLink === 'home' ? 'opacity-100' : 'opacity-0'}`}></span>
            <span className={`ml-2 transition-all duration-300 ${activeLink === 'home' ? 'ml-4' : ''}`}>Home</span>
          </a>
          <a
            href="/about"
            className={`relative text-gray-800 transition-all duration-300 py-1 flex items-center ${activeLink === 'about' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('about')}
          >
            <span className={`absolute left-0 top-0 h-full w-1 bg-blue-600 transition-all duration-300 ${activeLink === 'about' ? 'opacity-100' : 'opacity-0'}`}></span>
            <span className={`ml-2 transition-all duration-300 ${activeLink === 'about' ? 'ml-4' : ''}`}>About</span>
          </a>
          <a
            href="/blogs"
            className={`relative text-gray-800 transition-all duration-300 py-1 flex items-center ${activeLink === 'blogs' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('blogs')}
          >
            <span className={`absolute left-0 top-0 h-full w-1 bg-blue-600 transition-all duration-300 ${activeLink === 'blogs' ? 'opacity-100' : 'opacity-0'}`}></span>
            <span className={`ml-2 transition-all duration-300 ${activeLink === 'blogs' ? 'ml-4' : ''}`}>Blog</span>
          </a>
          <a
            href="/contact"
            className={`relative text-gray-800 transition-all duration-300 py-1 flex items-center ${activeLink === 'contact' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            onClick={() => handleLinkClick('contact')}
          >
            <span className={`absolute left-0 top-0 h-full w-1 bg-blue-600 transition-all duration-300 ${activeLink === 'contact' ? 'opacity-100' : 'opacity-0'}`}></span>
            <span className={`ml-2 transition-all duration-300 ${activeLink === 'contact' ? 'ml-4' : ''}`}>Contact</span>
          </a>
          <button className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;