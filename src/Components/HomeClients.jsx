import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingCart, Briefcase, ShoppingBag, Home, Activity, Monitor } from "lucide-react";

const ClientSection = () => {
  const [activeClient, setActiveClient] = useState(0);
  const [animateStats, setAnimateStats] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const sliderRef = useRef(null);
  const autoRotateRef = useRef(null);

  const clients = [
    {
      name: "TechStart Inc.",
      industry: "Technology",
      icon: Monitor,
      image: "https://picsum.photos/seed/techstart/600/400.jpg",
      backgroundColor: "bg-blue-500",
      testimonial: "The SEO strategy implemented by this team transformed our online presence. We're now ranking on the first page for our key terms.",
      results: {
        traffic: "+245%",
        conversion: "+180%",
        ranking: "#1-3 positions"
      },
      beforeAfter: {
        before: "Page 5 search results",
        after: "Top 3 rankings"
      }
    },
    {
      name: "GreenLeaf Organics",
      industry: "E-commerce",
      icon: ShoppingCart,
      image: "https://picsum.photos/seed/greenleaf/600/400.jpg",
      backgroundColor: "bg-green-500",
      testimonial: "Our organic traffic has tripled since implementing their content strategy. The ROI has been phenomenal.",
      results: {
        traffic: "+320%",
        conversion: "+150%",
        ranking: "#1-5 positions"
      },
      beforeAfter: {
        before: "1,200 monthly visitors",
        after: "5,040 monthly visitors"
      }
    },
    {
      name: "FinanceFlow Solutions",
      industry: "Financial Services",
      icon: Briefcase,
      image: "https://picsum.photos/seed/financeflow/600/400.jpg",
      backgroundColor: "bg-purple-500",
      testimonial: "The PPC campaigns they designed for us exceeded our targets by 40%. Highly recommend their expertise.",
      results: {
        traffic: "+180%",
        conversion: "+220%",
        ranking: "Top 5 rankings"
      },
      beforeAfter: {
        before: "2.5% conversion rate",
        after: "8.0% conversion rate"
      }
    },
    {
      name: "Bloom Boutique",
      industry: "Retail",
      icon: ShoppingBag,
      image: "https://picsum.photos/seed/bloom/600/400.jpg",
      backgroundColor: "bg-pink-500",
      testimonial: "Our social media engagement has skyrocketed. Sales from social channels have increased by 300%.",
      results: {
        traffic: "+290%",
        conversion: "+165%",
        ranking: "#1-4 positions"
      },
      beforeAfter: {
        before: "50 social interactions/month",
        after: "1,200 social interactions/month"
      }
    },
    {
      name: "HomeStyle Interiors",
      industry: "Home & Design",
      icon: Home,
      image: "https://picsum.photos/seed/homestyle/600/400.jpg",
      backgroundColor: "bg-orange-500",
      testimonial: "The website redesign and SEO optimization brought in qualified leads that actually convert. Amazing results!",
      results: {
        traffic: "+210%",
        conversion: "+190%",
        ranking: "#1-3 positions"
      },
      beforeAfter: {
        before: "15 leads/month",
        after: "87 leads/month"
      }
    },
    {
      name: "FitLife Gym",
      industry: "Health & Fitness",
      icon: Activity,
      image: "https://picsum.photos/seed/fitlife/600/400.jpg",
      backgroundColor: "bg-teal-500",
      testimonial: "Our local SEO strategy has put us on the map. Membership inquiries have doubled in just 3 months.",
      results: {
        traffic: "+175%",
        conversion: "+200%",
        ranking: "#1 position locally"
      },
      beforeAfter: {
        before: "25 new members/month",
        after: "75 new members/month"
      }
    },
  ];

  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto-rotate functionality for mobile
  useEffect(() => {
    if (isMobile && autoRotate && clients.length > 0) {
      autoRotateRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    }
    
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [isMobile, autoRotate, activeClient, clients.length]);

  // Handle manual client selection
  const handleClientSelect = (index) => {
    if (index !== activeClient) {
      setIsTransitioning(true);
      setActiveClient(index);
      setAnimateStats(true);
      // Pause auto-rotation when user manually selects a slide
      if (isMobile) {
        setAutoRotate(false);
        // Resume auto-rotation after 10 seconds of inactivity
        setTimeout(() => {
          setAutoRotate(true);
        }, 10000);
      }
      setTimeout(() => {
        setIsTransitioning(false);
        setAnimateStats(false);
      }, 500);
    }
  };

  // Navigate to next slide
  const nextSlide = () => {
    if (clients.length === 0) return;
    
    setIsTransitioning(true);
    setActiveClient((prev) => (prev + 1) % clients.length);
    setAnimateStats(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setAnimateStats(false);
    }, 500);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    if (clients.length === 0) return;
    
    setIsTransitioning(true);
    setActiveClient((prev) => (prev - 1 + clients.length) % clients.length);
    setAnimateStats(true);
    // Pause auto-rotation when user manually navigates
    if (isMobile) {
      setAutoRotate(false);
      // Resume auto-rotation after 10 seconds of inactivity
      setTimeout(() => {
        setAutoRotate(true);
      }, 10000);
    }
    setTimeout(() => {
      setIsTransitioning(false);
      setAnimateStats(false);
    }, 500);
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    const touchStart = e.targetTouches[0].clientX;
    sliderRef.current = { ...sliderRef.current, touchStart };
    // Pause auto-rotation when user starts touching
    if (isMobile) {
      setAutoRotate(false);
    }
  };

  const handleTouchEnd = (e) => {
    if (!sliderRef.current || !sliderRef.current.touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = sliderRef.current.touchStart - touchEnd;
    
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    
    sliderRef.current = { ...sliderRef.current, touchStart: null };
    
    // Resume auto-rotation after 10 seconds of inactivity
    if (isMobile) {
      setTimeout(() => {
        setAutoRotate(true);
      }, 10000);
    }
  };

  // Get icon color based on background color
  const getIconColor = (backgroundColor) => {
    const colorMap = {
      'bg-blue-500': 'text-blue-600',
      'bg-green-500': 'text-green-600',
      'bg-purple-500': 'text-purple-600',
      'bg-pink-500': 'text-pink-600',
      'bg-orange-500': 'text-orange-600',
      'bg-teal-500': 'text-teal-600'
    };
    return colorMap[backgroundColor] || 'text-gray-600';
  };

  // Calculate progress bar width based on before/after values
  const calculateProgressWidth = (before, after) => {
    // Simple calculation for demo purposes
    return Math.min(85, Math.max(15, Math.random() * 70 + 15));
  };

  // Get the current client icon component
  const currentClientIcon = clients[activeClient]?.icon;

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 p-4 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Real Results from Our Clients
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
          See how our solutions have transformed businesses across various industries with measurable results.
        </p>
      </div>

      {/* Slider Container */}
      {clients.length > 0 && currentClientIcon && (
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute md:-left-16 hidden md:block top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Previous client"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute md:-right-16 hidden md:block top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Next client"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Mobile Auto-rotation Indicator */}
          {isMobile && autoRotate && (
            <div className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 rounded-full px-3 py-1 text-xs text-gray-600">
              Auto-playing
            </div>
          )}

          {/* Slider Content */}
          <div 
            className="bg-white rounded-xl shadow-xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img
                    src={clients[activeClient].image}
                    alt={clients[activeClient].name}
                    className="w-full h-48 md:h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 md:p-3">
                    <currentClientIcon className={`w-6 h-6 md:w-8 md:h-8 ${getIconColor(clients[activeClient].backgroundColor)}`} />
                  </div>
                </div>
                <div className="md:w-1/2 p-4 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className={`mr-3 md:mr-4 p-2 md:p-3 rounded-lg ${clients[activeClient].backgroundColor} bg-opacity-20`}>
                      <currentClientIcon className={`w-6 h-6 md:w-8 md:h-8 ${getIconColor(clients[activeClient].backgroundColor)}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{clients[activeClient].name}</h3>
                      <p className="text-sm md:text-base text-gray-600">{clients[activeClient].industry}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4 md:mb-6 border-l-4 border-blue-500 pl-3 md:pl-4 text-sm md:text-base">
                    "{clients[activeClient].testimonial}"
                  </blockquote>
                  
                  <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                    <div className={`text-center ${animateStats ? 'animate-pulse' : ''}`}>
                      <div className="text-lg md:text-2xl font-bold text-blue-600">{clients[activeClient].results.traffic}</div>
                      <div className="text-xs md:text-sm text-gray-600">Traffic</div>
                    </div>
                    <div className={`text-center ${animateStats ? 'animate-pulse' : ''}`}>
                      <div className="text-lg md:text-2xl font-bold text-green-600">{clients[activeClient].results.conversion}</div>
                      <div className="text-xs md:text-sm text-gray-600">Conversion</div>
                    </div>
                    <div className={`text-center ${animateStats ? 'animate-pulse' : ''}`}>
                      <div className="text-sm md:text-lg font-bold text-purple-600">{clients[activeClient].results.ranking}</div>
                      <div className="text-xs md:text-sm text-gray-600">Ranking</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs md:text-sm font-medium text-gray-500">Before</span>
                      <span className="text-xs md:text-sm font-medium text-gray-500">After</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm text-gray-700 truncate mr-2">{clients[activeClient].beforeAfter.before}</span>
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0" />
                      <span className="text-xs md:text-sm font-semibold text-gray-900 truncate ml-2">{clients[activeClient].beforeAfter.after}</span>
                    </div>
                    <div className="mt-2 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${clients[activeClient].backgroundColor} transition-all duration-1000`}
                        style={{ width: `${calculateProgressWidth(clients[activeClient].beforeAfter.before, clients[activeClient].beforeAfter.after)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClientSelect(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeClient === index
                    ? 'bg-indigo-600 w-6 md:w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to client ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSection;