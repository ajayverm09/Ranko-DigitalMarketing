import React, { useState } from 'react';
import { TrendingUp, Users, CheckCircle, ArrowRight, Search, Star, Zap, Shield } from 'lucide-react';

const SeoMarketing = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalysis = (e) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden md:-mt-23 bg-linear-to-br from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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

      <div className="relative max-w-7xl md:mt-25 mt-15 mx-auto px-6 lg:px-8 py-10 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Zap className="mr-1" size={16} />
              Trusted by 500+ businesses worldwide
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dominate Search Rankings with Expert <span className="text-blue-600">SEO</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-lg">
                Transform your online presence and drive sustainable growth with our proven digital marketing strategies.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-gray-400 mr-1" />
                <span className="text-gray-600 font-medium">500+ Happy Clients</span>
              </div>
            </div>

            {/* CTA Form */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Your Free SEO Audit</h3>
              <form onSubmit={handleAnalysis} className="flex flex-col sm:flex-row gap-3">
                <div className="relative grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="url"
                    placeholder="Enter Website URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-10 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center disabled:opacity-70 font-medium"
                >
                  {isAnalyzing ? (
                    <span>Analyzing...</span>
                  ) : (
                    <>
                      Start Analysis
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </form>
              
              {showResults && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-green-800">Analysis Complete!</h4>
                      <p className="text-green-700 text-sm mt-1">
                        Your website analysis is ready. Our team will contact you within 24 hours with detailed insights.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <TrendingUp className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">200% Traffic Growth</h4>
                  <p className="text-gray-600 text-sm">Average client results</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">White-Hat Methods</h4>
                  <p className="text-gray-600 text-sm">100% Google compliant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="flex flex-col items-center space-y-8">
            {/* Main Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="SEO Expert" 
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <TrendingUp className="text-green-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Rankings</p>
                    <p className="text-sm font-bold text-gray-900">+87%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <Users className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Traffic</p>
                    <p className="text-sm font-bold text-gray-900">+150%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Ranko transformed our online presence. We went from page 3 to #1 for our main keywords in just 4 months!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SeoMarketing;