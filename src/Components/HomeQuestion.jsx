import { useState } from 'react';
import { Clock, Target, MessageSquare, Smartphone, Search, ChevronDown } from 'lucide-react';

function Question() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How long does it take to see results?",
      answer: "The timeline for seeing results varies depending on your specific goals and the strategies implemented. For SEO improvements, you can expect to see initial progress within 3-4 months, with significant results typically appearing after 6-12 months. Social media campaigns often show engagement metrics within the first 2-4 weeks, while PPC advertising can generate immediate traffic and conversions. We provide regular progress reports and adjust our strategies based on performance data to ensure we're on track to meet your objectives.",
      icon: Clock
    },
    {
      question: "Do you offer customized marketing strategies?",
      answer: "Absolutely! We believe that one-size-fits-all approaches don't work in digital marketing. Every business is unique, with different target audiences, competitive landscapes, and goals. Our process begins with a comprehensive audit of your current marketing efforts, competitor analysis, and deep understanding of your brand voice and objectives. Based on this research, we develop a tailored strategy that aligns with your budget and timeline. We're flexible and adapt our approach as we gather data and insights about what works best for your specific market.",
      icon: Target
    },
    {
      question: "How often will we communicate?",
      answer: "We prioritize transparent communication and keep you informed at every step. You'll receive a detailed performance report every month highlighting key metrics, achievements, and areas for improvement. Additionally, we schedule bi-weekly check-in calls to discuss progress, address concerns, and plan upcoming initiatives. For urgent matters, we're available via email or scheduled calls. We also provide access to a real-time dashboard where you can monitor campaign performance at your convenience. Our goal is to ensure you always know how your marketing investment is performing.",
      icon: MessageSquare
    },
    {
      question: "Can you manage our social media accounts?",
      answer: "Yes, we offer comprehensive social media management services across all major platforms including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. Our services include content creation and curation, community management, social media advertising, influencer partnerships, and analytics reporting. We develop a content calendar aligned with your brand voice and business goals, ensuring consistent posting and engagement. Our team stays updated with the latest platform algorithms and trends to maximize your reach and engagement. We can either take full control of your accounts or work collaboratively with your team, depending on your preference.",
      icon: Smartphone
    },
    {
      question: "How do you approach keyword optimization?",
      answer: "Our keyword optimization approach is multi-faceted and data-driven. We begin with extensive keyword research using advanced tools to identify high-value search terms relevant to your business. This includes analyzing search volume, competition level, user intent, and relevance to your offerings. We categorize keywords into primary, secondary, and long-tail groups, then strategically incorporate them into your website content, meta tags, headers, and image alt text. We continuously monitor keyword rankings and adjust our strategy based on performance metrics. Our approach also includes semantic SEO to understand context and user intent beyond exact keyword matches, ensuring your content aligns with how people actually search.",
      icon: Search
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <div className="bg-white py-5 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our services</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/3">
            <img 
              src="https://www.bsmtech.co.in/wp-content/uploads/2025/09/Digital-Marketing-services-1.png" 
              alt="FAQ illustration" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          
          {/* Right FAQ Section */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md ${
                      activeIndex === index ? 'shadow-md' : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className={`w-full text-left text-lg font-medium py-4 px-6 flex justify-between items-center transition-colors duration-150 ${
                        activeIndex === index 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-900 hover:bg-gray-50 focus:bg-gray-50'
                      }`}
                      aria-expanded={activeIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <div className="flex items-center">
                        <IconComponent 
                          className={`w-6 h-6 mr-3 ${
                            activeIndex === index ? 'text-blue-600' : 'text-gray-500'
                          }`} 
                        />
                        <span>{item.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeIndex === index 
                            ? 'text-blue-600 transform rotate-180' 
                            : 'text-gray-500'
                        }`}
                      />
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? 'max-h-96' : 'max-h-0'
                      }`}
                      aria-hidden={activeIndex !== index}
                    >
                      <div className="py-4 px-6 text-gray-600 bg-gray-50 border-t border-gray-100">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;