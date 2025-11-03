import React, { useState, useRef, useEffect } from 'react';
import { Award, Calendar, Trophy, Star, ArrowRight } from 'lucide-react';

const AwardItem = ({ award, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <Trophy className="h-5 w-5 text-blue-600" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{award.title}</h4>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{award.year}</span>
        </div>
      </div>
    </div>
  );
};

const Awards = () => {
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

  const awards = [
    {
      title: "Pioneers of Digital Innovation Award in SEO",
      year: "2025"
    },
    {
      title: "Excellence in User Experience Design Award",
      year: "2024"
    },
    {
      title: "Best Interactive Website Design of the Year",
      year: "2022"
    },
    {
      title: "Creative Visionary Award for Web Design",
      year: "2021"
    }
  ];

  return (
    <section ref={sectionRef} className="py-5 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section: Image */}
          <div className={`relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
            <div className="relative">
              <img
                src="https://ranko.themejunction.net/wp-content/uploads/2025/10/award-banner.png"
                alt="Award Trophy"
                className="w-full rounded-lg shadow-xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-12 w-12 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          {/* Right section: Text */}
          <div className={`space-y-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-200`}>
            <div>
              <span className="text-red-500 text-lg font-semibold uppercase tracking-wider">Our Awards</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Recognized for <span className="text-blue-600">Excellence</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We're proud to be recognized by industry leaders for our innovative approach to digital marketing and web design. These awards reflect our commitment to delivering exceptional results for our clients.
              </p>
            </div>

            {/* Awards List */}
            <div className="space-y-2">
              {awards.map((award, index) => (
                <AwardItem key={index} award={award} index={index} />
              ))}
            </div>

          </div>
        </div>

        {/* Additional Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-300`}>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Industry Awards</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;