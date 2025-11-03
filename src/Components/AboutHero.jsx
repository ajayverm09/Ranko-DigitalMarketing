import React, { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    // Reset form
    setEmail('');
  };

  return (
    <section className="relative md:-mt-25 bg-linear-to-br from-blue-50 via-white to-blue-100 py-5 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0  opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl md:mt-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              {/* Logo Section */}
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 p-2">
                <img 
                  src="https://ranko.themejunction.net/wp-content/uploads/2025/10/favicon-2.png" 
                  alt="Company Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted <span className="text-blue-600">SEO & Digital Marketing</span> Experts!
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Passionate about driving measurable results through strategic SEO and cutting-edge digital marketing solutions. 
              With years of experience in the digital landscape, we have helped businesses achieve their goals and grow their online presence.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href='/blogs' className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started Today
              </a>
              <a href='/contact' className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Contact Us
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex text-yellow-400">
                <span className="text-2xl">&#9733;</span>
                <span className="text-2xl">&#9733;</span>
                <span className="text-2xl">&#9733;</span>
                <span className="text-2xl">&#9733;</span>
                <span className="text-2xl">&#9733;</span>
              </div>
              <span className="ml-2 text-gray-700 font-medium">4.9/5 (250+ reviews)</span>
            </div>
          </div>
          
          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/digital-marketing/600/400.jpg" 
              alt="Digital Marketing" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs transform rotate-3">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">300% Increase</p>
                  <p className="text-sm text-gray-600">in organic traffic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;