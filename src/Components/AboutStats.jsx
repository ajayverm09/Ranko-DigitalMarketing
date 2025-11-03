import React, { useState, useEffect, useRef } from "react";

const CircularProgress = ({ percentage, label, color = "#3b82f6" }) => {
  const [count, setCount] = useState(0);
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < percentage) {
            return prevCount + 1;
          }
          clearInterval(interval);
          return prevCount;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg
          className="absolute transform -rotate-90 w-32 h-32"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1.5s ease-in-out",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{count}%</span>
        </div>
      </div>
      <p className="text-sm text-white mt-2 text-center max-w-xs">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { id: 1, value: "500+", label: "Happy Clients" },
    { id: 2, value: "98%", label: "Success Rate" },
    { id: 3, value: "10+", label: "Years Experience" },
    { id: 4, value: "24/7", label: "Support Available" },
  ];

  return (
    <section ref={sectionRef} className="py-5 md:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud of our track record in helping businesses succeed online through strategic SEO and digital marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Stats and Progress Circles with Background Image */}
          <div className="relative rounded-xl overflow-hidden shadow-xl min-h-[600px] lg:min-h-[700px]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
              style={{ backgroundImage: "url('https://ranko.themejunction.net/wp-content/uploads/2025/10/about-4.png')" }}
            ></div>
            
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 space-y-8 h-full md:mt-70 flex flex-col justify-center">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className={`text-3xl font-bold text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                         style={{ animationDelay: `${stat.id * 0.1}s` }}>
                      {stat.value}
                    </div>
                    <p className="text-sm text-blue-100 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Progress Circles */}
              <div className="flex justify-center space-x-8">
                <CircularProgress percentage={85} label="Total New Customers" />
                <CircularProgress percentage={92} label="Client Retention" color="#10b981" />
                <CircularProgress percentage={78} label="ROI Increase" color="#f59e0b" />
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, and Values */}
          <div className="space-y-8">
            <div className={`bg-white p-6 rounded-lg shadow-md ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                 style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-blue-600 text-xl font-semibold">01</span>
                <h2 className="text-2xl font-semibold text-gray-900">Mission</h2>
              </div>
              <p className="text-gray-700">
                To empower businesses of all sizes by providing data-driven SEO and digital marketing solutions that increase online visibility, drive targeted traffic, and deliver measurable growth. Our goal is to help clients succeed in the digital landscape.
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg shadow-md ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                 style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-blue-600 text-xl font-semibold">02</span>
                <h2 className="text-2xl font-semibold text-gray-900">Vision</h2>
              </div>
              <p className="text-gray-700">
                To become a global leader in SEO and digital marketing, transforming how businesses connect with their audiences online. We aim to continually evolve our practices, setting the standard for ethical, cutting-edge digital marketing solutions.
              </p>
            </div>

            <div className={`bg-white p-6 rounded-lg shadow-md ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                 style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-blue-600 text-xl font-semibold">03</span>
                <h2 className="text-2xl font-semibold text-gray-900">Values</h2>
              </div>
              <p className="text-gray-700">
                In a fast-evolving digital world, we stay ahead by continuously learning and integrating the latest trends and technologies in SEO and digital marketing. We deliver results that exceed expectations through innovation, integrity, and client-focused solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default StatsSection;