import React, { useState, useEffect } from 'react';
import { CheckCircle, TrendingUp, Award, Users, Target, BarChart3, Star, ArrowRight, Play, Quote, Zap, Shield, X, Globe, Lightbulb, Clock } from 'lucide-react';

const HomeAbout = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [animatedStats, setAnimatedStats] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger animation when stats section is in view
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimatedStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-linear-to-br from-gray-50 via-white to-blue-50 py-6 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Pattern with Parallax Effect */}
      <div className="absolute inset-0 opacity-5" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-600 to-blue-800"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>

      {/* Floating Elements - Hidden on small screens */}
      <div className="hidden sm:block absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Enhanced Design */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-linear-to-r from-blue-100 to-purple-100 text-blue-800 mb-4 sm:mb-6 shadow-md">
            <Award className="mr-1 sm:mr-2" size={16} />
            10+ Years of Digital Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Ranko</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            We're a passionate team of digital marketers, SEO specialists, content creators, and data analysts dedicated to driving your business growth.
          </p>
        </div>

        {/* Main Content with Improved Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
          {/* Left Section: Enhanced Image and Stats */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image with Decorative Elements */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
              <img
                src="https://ranko.themejunction.net/wp-content/uploads/2025/09/about-1.webp"
                alt="Digital Marketing Team"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stats Badges with Enhanced Design */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-gray-100 transform transition-all duration-300 hover:scale-110">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">10+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-gray-100 transform transition-all duration-300 hover:scale-110">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    <TrendingUp className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Growth Rate</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">+150%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Enhanced Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Enhanced Tabs with Modern Design */}
            <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-lg">
              {['mission', 'values', 'team'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg font-medium text-sm sm:text-base transition-all ${
                    activeTab === tab
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Enhanced Tab Content */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform transition-all duration-500">
              {activeTab === 'mission' && (
                <div className="animate-fadeIn">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                    We're dedicated to helping businesses grow through innovative digital marketing strategies. With 10 years of combined experience, we deliver cutting-edge solutions that drive measurable results and foster sustainable growth.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Personalized Service</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Tailored strategies to meet your unique business needs</p>
                      </div>
                    </div>
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Innovative Solutions</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Cutting-edge techniques that keep you ahead of the competition</p>
                      </div>
                    </div>
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Transparent Reporting</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Clear insights into your campaign performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="animate-fadeIn">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Values</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                    Our core values guide everything we do, from how we approach challenges to how we interact with our clients.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <Target className="text-blue-600 mb-2 sm:mb-3" size={24} />
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Results-Driven</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Focused on delivering measurable outcomes</p>
                    </div>
                    <div className="bg-linear-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl border border-purple-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <Users className="text-purple-600 mb-2 sm:mb-3" size={24} />
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Client-Centric</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Your success is our priority</p>
                    </div>
                    <div className="bg-linear-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl border border-green-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <TrendingUp className="text-green-600 mb-2 sm:mb-3" size={24} />
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Growth-Focused</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Committed to continuous improvement</p>
                    </div>
                    <div className="bg-linear-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-xl border border-orange-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <BarChart3 className="text-orange-600 mb-2 sm:mb-3" size={24} />
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Data-Informed</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Decisions backed by analytics</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="animate-fadeIn">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Team</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                    Meet the talented individuals who make up our diverse team of digital marketing experts.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Team Member"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Sarah Johnson</h4>
                        <p className="text-gray-600 text-sm">CEO & Founder</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Team Member"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Michael Chen</h4>
                        <p className="text-gray-600 text-sm">Head of SEO</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b332c1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Team Member"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Emily Rodriguez</h4>
                        <p className="text-gray-600 text-sm">Content Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced CTA Button */}
            <button className="w-full sm:w-auto bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center font-medium text-base sm:text-lg shadow-lg transform hover:scale-105">
              Explore More
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section with Animation */}
        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 ${animatedStats ? 'animate-count' : ''}`}>500+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Happy Clients</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 ${animatedStats ? 'animate-count' : ''}`}>98%</h3>
            <p className="text-gray-600 text-sm sm:text-base">Success Rate</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <BarChart3 className="text-purple-600" size={24} />
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 ${animatedStats ? 'animate-count' : ''}`}>150%</h3>
            <p className="text-gray-600 text-sm sm:text-base">Avg. Traffic Growth</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="text-orange-600" size={24} />
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 ${animatedStats ? 'animate-count' : ''}`}>24/7</h3>
            <p className="text-gray-600 text-sm sm:text-base">Support</p>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Globe className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm sm:text-base">We help businesses worldwide expand their digital presence and reach new markets.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Lightbulb className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
            <p className="text-gray-600 text-sm sm:text-base">We stay ahead of industry trends with cutting-edge strategies and technologies.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Clock className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Timely Results</h3>
            <p className="text-gray-600 text-sm sm:text-base">We deliver measurable improvements quickly without compromising on quality.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes count {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-count {
          animation: count 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HomeAbout;