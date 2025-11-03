import React, { useState } from "react";

const ExpertSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const services = [
    {
      title: "SEO Strategy",
      description: "Our comprehensive SEO approach combines technical optimization, content marketing, and strategic link building to improve your search rankings, increase organic traffic, and drive conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Analytics Reporting",
      description: "We provide detailed analytics and reporting to track your SEO performance, identify opportunities, and make data-driven decisions that continuously improve your online presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "PPC Advertising",
      description: "Our pay-per-click campaigns are designed to maximize ROI with targeted ads, strategic bidding, and continuous optimization to reach your ideal customers at the right moment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Social Management",
      description: "We manage your social media presence with engaging content, community building, and strategic campaigns to increase brand awareness and foster customer loyalty.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "pink"
    },
    {
      title: "Content Creation",
      description: "Our content team creates compelling, SEO-optimized content that resonates with your audience, establishes authority, and drives meaningful engagement with your brand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Keyword Optimization",
      description: "We identify and target high-value keywords that align with your business goals, ensuring your content ranks for terms that drive qualified traffic and conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      color: "yellow"
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600",
      yellow: "bg-yellow-100 text-yellow-600"
    };
    return colorMap[color] || "bg-blue-100 text-blue-600";
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Expert Solutions for SEO</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          We help your business rank higher in search engines with targeted SEO strategies that drive measurable results.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-20 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`h-2 ${service.color === 'blue' ? 'bg-blue-500' : 
              service.color === 'green' ? 'bg-green-500' : 
              service.color === 'purple' ? 'bg-purple-500' : 
              service.color === 'pink' ? 'bg-pink-500' : 
              service.color === 'indigo' ? 'bg-indigo-500' : 
              'bg-yellow-500'}`}></div>
            <div className="p-6">
              <div className={`inline-flex p-3 rounded-lg ${getColorClasses(service.color)} mb-4 transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6 line-clamp-3">{service.description}</p>
              <a 
                href='/blogs' 
                className={`inline-flex items-center font-semibold ${
                  service.color === 'blue' ? 'text-blue-600 hover:text-blue-800' : 
                  service.color === 'green' ? 'text-green-600 hover:text-green-800' : 
                  service.color === 'purple' ? 'text-purple-600 hover:text-purple-800' : 
                  service.color === 'pink' ? 'text-pink-600 hover:text-pink-800' : 
                  service.color === 'indigo' ? 'text-indigo-600 hover:text-indigo-800' : 
                  'text-yellow-600 hover:text-yellow-800'
                } transition-colors duration-300`}
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ExpertSection;