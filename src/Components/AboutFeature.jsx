import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, Shield, Users, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-blue-600 hover:text-white group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 p-4 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:bg-blue-600 group-hover:bg-opacity-20">
          <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-4 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-700 mb-6 group-hover:text-white group-hover:text-opacity-90 transition-colors duration-300">{description}</p>
      <a href="/blogs" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group-hover:text-white transition-colors duration-300">
        Learn More
        <ArrowRight className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
};

const FeatureSection = () => {
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

  const features = [
    {
      icon: TrendingUp,
      title: "Hit Your Growth Goals",
      description: "Our tailored SEO strategies are designed to align with your specific goals, whether you're looking to increase website traffic, boost leads, or improve conversions. We create customized plans that deliver measurable results."
    },
    {
      icon: Shield,
      title: "Outshine Competitors",
      description: "Through meticulous keyword research, advanced on-page optimization, and authoritative backlink building, we position your website ahead of competitors in search rankings and industry visibility."
    },
    {
      icon: Users,
      title: "Trust in Open Partnership",
      description: "From the outset, we provide clear expectations and regular updates on our progress. You'll receive comprehensive reports that outline our impact and transparent communication throughout our partnership."
    }
  ];

  return (
    <section ref={sectionRef} className="py-5 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          <span className="text-red-500 text-lg font-semibold uppercase tracking-wider">Our Features</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">
            Empowering Solutions for Business <span className="text-blue-600">Optimization</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive digital marketing solutions tailored to your unique business needs. Our expert team combines industry knowledge with cutting-edge techniques to deliver exceptional results.
          </p>
          <a href="#" className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Explore All Features
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              delay={100 * (index + 1)}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className={`mt-16 bg-white rounded-xl shadow-lg p-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-300`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Transform Your Online Presence?</h3>
              <p className="text-gray-700">Get in touch with our team today to discuss how we can help you achieve your digital marketing goals.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;