import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      // Here you would typically send the email to your backend
      console.log("Subscribing with email:", email);
      setSubscribed(true);
      setEmail("");
      // Reset the subscribed state after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#ECF0F9] md:mx-20 md:my-10 md:rounded-4xl py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left section - Office Info */}
          <div className="space-y-4">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('office')}
            >
              <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
              <div className="lg:hidden">
                {openSection === 'office' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <div className={`${openSection === 'office' ? 'block' : 'hidden'} lg:block`}>
              <address className="text-gray-700 not-italic">
                993 Renner Burg, West Rond, MT 94251-030
              </address>
              <p className="text-gray-700 font-bold">
                <span>Phone:</span>{" "}
                <a href="tel:+10095447818" className="hover:text-blue-600 transition-colors">
                  +1 (009) 544-7818
                </a>
              </p>
              <p className="text-gray-700 font-bold">
                <span>Email:</span>{" "}
                <a href="mailto:support@ranko.com" className="hover:text-blue-600 transition-colors">
                  support@ranko.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Hours:</span> Mon-Fri 10am-10pm
              </p>
            </div>
          </div>

          {/* Middle section - Company Links */}
          <div className="space-y-4">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('company')}
            >
              <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
              <div className="lg:hidden">
                {openSection === 'company' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <ul className={`${openSection === 'company' ? 'block' : 'hidden'} lg:block space-y-2 text-gray-700`}>
              <li>
                <a href="/about" className="hover:text-blue-600 transition-colors">
                   About
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-blue-600 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - Services */}
          <div className="space-y-4">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('services')}
            >
              <h3 className="text-xl font-semibold text-gray-900">Our Services</h3>
              <div className="lg:hidden">
                {openSection === 'services' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <ul className={`${openSection === 'services' ? 'block' : 'hidden'} lg:block space-y-3 text-gray-700`}>
              <li>
                <a href="/services/seo-strategy" className="hover:text-blue-600 transition-colors">
                  SEO Strategy
                </a>
              </li>
              <li>
                <a href="/services/analytics" className="hover:text-blue-600 transition-colors">
                  Analytics Reporting
                </a>
              </li>
              <li>
                <a href="/services/social" className="hover:text-blue-600 transition-colors">
                  Social Management
                </a>
              </li>
              <li>
                <a href="/services/content" className="hover:text-blue-600 transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="/services/keywords" className="hover:text-blue-600 transition-colors">
                  Keyword Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="bg-blue-600 text-white p-6 mt-6 rounded-lg">
            <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubscribe} className="mt-4">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-2 p-2 rounded-md border outline-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-300"
              />
              <button 
                type="submit"
                className="w-full mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-sm">Thank you for subscribing!</p>
            )}
            <p className="mt-2 text-sm">Protecting your privacy</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          {/* Logo on the left */}
          <div className="shrink-0 mb-4 sm:mb-0">
            <a href="/" className="block">
              <img 
                src="https://ranko.themejunction.net/wp-content/uploads/2025/09/primary-logo.png" 
                alt="Ranko Logo" 
                className="h-8 w-auto"
              />
            </a>
          </div>
          
          {/* Copyright in the center */}
          <p className="text-gray-700 text-sm grow md:pl-88 text-center sm:text-left sm:mx-4">© 2025 <span className="font-bold">Ranko</span> All rights reserved</p>
          
          {/* Social links on the right */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Facebook */}
            <a 
              href="https://facebook.com/ranko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/ranko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/ranko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;