import React, { useState } from "react";

const ToggleSection = () => {
  // Initial stats
  const initialStats = {
    traffic: 20000,
    speed: 8.5,
    bounce: 80,
    conversion: 30,
  };

  // States for SEO stats
  const [stats, setStats] = useState(initialStats);
  const [isSEO, setIsSEO] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle handler to increase stats when switched to "After SEO"
  const handleToggle = () => {
    setIsAnimating(true);
    setIsSEO(!isSEO);

    if (!isSEO) {
      setStats({
        traffic: 40000, // Increase organic traffic rate
        speed: 4.0,     // Decrease page speed time
        bounce: 60,     // Decrease bounce rate
        conversion: 50, // Increase conversion rate
      });
    } else {
      // Reset stats to initial state if toggled off
      setStats(initialStats);
    }

    // Reset animation flag after animation completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Calculate percentage change for each stat
  const calculateChange = (current, initial) => {
    const change = ((current - initial) / initial) * 100;
    return change > 0 ? `+${change.toFixed(0)}%` : `${change.toFixed(0)}%`;
  };

  // Icon components for each stat
  const TrafficIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );

  const SpeedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const BounceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const ConversionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Turning SEO Traffic into Conversions
        </div>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          See how our SEO and digital marketing strategies take your online business from invisible to impactful.
        </p>

        {/* Visibility Boosted */}
        <div className="text-red-600 text-sm font-semibold mb-8 tracking-wider">
          VISIBILITY BOOSTED
        </div>

        {/* SEO Toggle */}
        <div className="mb-12 flex items-center justify-center">
          <label htmlFor="seo-toggle" className={`text-gray-800 font-medium text-lg mr-4 ${!isSEO ? 'font-bold' : ''}`}>
            Before SEO
          </label>
          <div className="relative">
            <input
              id="seo-toggle"
              type="checkbox"
              checked={isSEO}
              onChange={handleToggle}
              className="sr-only"
            />
            <div
              className={`block w-14 h-8 rounded-full ${isSEO ? 'bg-green-500' : 'bg-gray-300'} cursor-pointer transition-colors duration-300`}
              onClick={handleToggle}
            ></div>
            <div
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${isSEO ? 'transform translate-x-6' : ''}`}
              onClick={handleToggle}
            ></div>
          </div>
          <label htmlFor="seo-toggle" className={`text-gray-800 font-medium text-lg ml-4 ${isSEO ? 'font-bold' : ''}`}>
            After SEO
          </label>
        </div>

        {/* SEO Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          <div className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${isAnimating ? 'animate-pulse' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-blue-500">
                <TrafficIcon />
              </div>
              {isSEO && (
                <span className="text-green-500 text-sm font-semibold">
                  {calculateChange(stats.traffic, initialStats.traffic)}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {stats.traffic.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Organic Traffic Rate</div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(stats.traffic / 50000) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${isAnimating ? 'animate-pulse' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-blue-500">
                <SpeedIcon />
              </div>
              {isSEO && (
                <span className="text-green-500 text-sm font-semibold">
                  {calculateChange(initialStats.speed, stats.speed)}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {stats.speed} sec
            </div>
            <div className="text-sm text-gray-600">Page Speed Time</div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${100 - (stats.speed / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${isAnimating ? 'animate-pulse' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-blue-500">
                <BounceIcon />
              </div>
              {isSEO && (
                <span className="text-green-500 text-sm font-semibold">
                  {calculateChange(stats.bounce, initialStats.bounce)}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {stats.bounce}%
            </div>
            <div className="text-sm text-gray-600">Overall Bounce Rate</div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${stats.bounce}%` }}
              ></div>
            </div>
          </div>

          <div className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${isAnimating ? 'animate-pulse' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-blue-500">
                <ConversionIcon />
              </div>
              {isSEO && (
                <span className="text-green-500 text-sm font-semibold">
                  {calculateChange(stats.conversion, initialStats.conversion)}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {stats.conversion}%
            </div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${stats.conversion}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {isSEO ? "SEO Results Achieved" : "Ready to Boost Your SEO?"}
          </h3>
          <p className="text-gray-600 mb-6">
            {isSEO 
              ? "Our comprehensive SEO strategy has significantly improved your website's performance. The increased organic traffic, faster page speed, reduced bounce rate, and higher conversion rate demonstrate the effectiveness of our approach."
              : "Implementing a strong SEO strategy can transform your online presence. Toggle to see the potential improvements in key metrics that directly impact your business growth."}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            {isSEO ? "Learn More About Our Process" : "Get Started With SEO"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleSection;