import React from 'react';
import { ArrowRight, TrendingUp, TrendingDown, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Discover & Development",
      description: "We begin by understanding your business, goals, and target audience in market.",
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/09/process-img-1.png",
      stat: {
        label: "Total Click",
        value: "+8.5%",
        trend: "up",
        chartImage: "https://ranko.themejunction.net/wp-content/uploads/2025/09/process-img-1.png"
      }
    },
    {
      id: 2,
      title: "Launch & Execution",
      description: "Once the strategy is in place, our team gets to work. We implement the agreed.",
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/09/process-img-2.png",
      stat: {
        label: "Execution",
        value: "-3.33%",
        trend: "down",
        chartImage: "https://ranko.themejunction.net/wp-content/uploads/2025/09/process-img-2.png"
      }
    },
    {
      id: 3,
      title: "Speed & Optimization",
      description: "Regular reporting allows us to assess results, make data-driven adjustments, and refine.",
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/09/process-img-3.png",
      stat: {
        label: "Success Rate",
        value: "95%",
        trend: "up",
        chartImage: "https://ranko.themejunction.net/wp-content/uploads/2025/09/process-img-3.png"
      }
    }
  ];

  return (
    <div className="bg-linear-to-br from-blue-600 to-indigo-700 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Our Simple Process</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 md:space-y-20">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <div key={step.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8 lg:gap-16`}>
                {/* Step Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="mb-3">
                    <span className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 text-sm font-bold rounded-full">
                      STEP {step.id}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-blue-100 leading-relaxed mb-6">{step.description}</p>
                </div>

                {/* Stat Card */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                  <div className="bg-blue-800 rounded-xl p-6 md:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-md border border-blue-700 hover:border-yellow-400 hover:border-opacity-50">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-semibold text-white">{step.stat.label}</h4>
                      <div className={`p-2 rounded-full ${step.stat.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} bg-opacity-20`}>
                        {step.stat.trend === 'up' ? (
                          <TrendingUp className="w-6 h-6 text-green-400" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-red-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-baseline mb-6">
                      <p className={`text-5xl font-bold ${step.stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {step.stat.value}
                      </p>
                    </div>
                    
                    {/* Chart Image */}
                    <div className="flex justify-center">
                      <img 
                        src={step.stat.chartImage} 
                        alt={`${step.stat.label} chart`}
                        className="h-32 object-contain filter brightness-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
            <a href='/contact' className="group flex flex-row md:px-8 px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Project
              <ArrowRight className="ml-2 mt-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-4 text-blue-100 text-lg">Ready to transform your business? Let's talk.</p>
        </div>

        {/* Process Flow Indicator for Desktop */}
        <div className="hidden lg:flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  index === 0 ? 'bg-yellow-400 border-yellow-400' : 'bg-blue-800 border-blue-600'
                }`}>
                  {index === 0 ? (
                    <CheckCircle className="w-6 h-6 text-blue-900" />
                  ) : (
                    <span className="text-white font-bold">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-blue-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;