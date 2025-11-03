import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp, Loader, CheckCircle, Check, Award, Users, Zap, Shield, Headphones } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError("");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer comprehensive digital marketing services including SEO Strategy, Analytics Reporting, PPC Advertising, Social Media Management, Content Creation, and Keyword Optimization."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. Typically, you can expect to see initial results within 3-6 months, with significant improvements in rankings and traffic after 6-12 months of consistent effort."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes from startups to enterprises. We customize our strategies based on your specific needs, budget, and goals."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the scope of services required. We offer customized packages after understanding your business needs and goals. Contact us for a personalized quote."
    },
    {
      question: "Can you help with local SEO?",
      answer: "Absolutely! We specialize in local SEO strategies to help businesses improve their visibility in local search results and attract more customers from their geographic area."
    }
  ];

  return (
    <div className="min-h-screen md:-mt-23 bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative bg-linear-to-r from-blue-600 to-blue-800 text-white md:py-40 py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/contact-hero/1920/600.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Ready to grow your business? Let's start the conversation.
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8" id="contact-form">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            ) : null}
            
            {error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border outline-0 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="seo">SEO Strategy</option>
                  <option value="analytics">Analytics Reporting</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="social">Social Media Management</option>
                  <option value="content">Content Creation</option>
                  <option value="keywords">Keyword Optimization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 outline-0 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="mr-2 animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
            
            {/* Additional Content Below Send Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="shrink-0 bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <p className="text-sm text-gray-600">Our team will review your inquiry within 24 hours</p>
                </div>
                <div className="flex items-start">
                  <div className="shrink-0 bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <p className="text-sm text-gray-600">We'll prepare a personalized strategy based on your needs</p>
                </div>
                <div className="flex items-start">
                  <div className="shrink-0 bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <p className="text-sm text-gray-600">Schedule a free consultation call to discuss your project</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="text-blue-600 mr-2" size={20} />
                  <h4 className="font-medium text-gray-900">Privacy Guaranteed</h4>
                </div>
                <p className="text-sm text-gray-600">Your information is secure with us. We never share your data with third parties without your consent.</p>
              </div>
              
              <div className="mt-4 flex items-center">
                <Headphones className="text-blue-600 mr-2" size={20} />
                <p className="text-sm text-gray-600">Need immediate assistance? Call us at <a href="tel:+10095447818" className="font-medium text-blue-600 hover:underline">+1 (009) 544-7818</a></p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600">993 Renner Burg, West Rond, MT 94251-030</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:+10095447818" className="text-gray-600 hover:text-blue-600">
                      +1 (009) 544-7818
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:support@ranko.com" className="text-gray-600 hover:text-blue-600">
                      support@ranko.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 10:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="rounded-lg overflow-hidden h-64">
                {/* Replace with your actual map integration */}
                <iframe
                  title="Ranko Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.6372318486!2d-74.01167968459418!3d40.71427997933039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb36b3b%3A0x7e5b8e5c5e5c5e5c!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1635959046266!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center">
                993 Renner Burg, West Rond, MT
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <Award className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our team consists of certified digital marketing experts with years of experience in helping businesses grow online.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <Users className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">We don't believe in one-size-fits-all solutions. Every strategy is tailored to your specific business needs and goals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <Zap className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Results</h3>
                  <p className="text-gray-600">Our proven methodologies deliver measurable results quickly, helping you see a return on your investment sooner.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <Check className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Reporting</h3>
                  <p className="text-gray-600">We provide detailed reports and analytics so you can track your progress and see exactly how our efforts are impacting your business.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-gray-600">We start by understanding your business, target audience, and goals to create a solid foundation for our strategy.</p>
                </div>
              </div>
              <div className="flex">
                <div className="shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy Development</h3>
                  <p className="text-gray-600">Based on our findings, we develop a comprehensive digital marketing strategy tailored to your specific needs.</p>
                </div>
              </div>
              <div className="flex">
                <div className="shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600">Our team executes the strategy with precision, utilizing the latest tools and techniques to achieve optimal results.</p>
                </div>
              </div>
              <div className="flex">
                <div className="shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis & Optimization</h3>
                  <p className="text-gray-600">We continuously monitor performance, analyze data, and optimize our approach to ensure ongoing success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section with Image */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* FAQ Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/faq-support/600/500.jpg"
                alt="FAQ Support"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            {/* FAQ Accordion */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${
                        expandedFaq === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => toggleFaq(index)}
                      aria-expanded={expandedFaq === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className={`font-medium ${expandedFaq === index ? 'text-blue-600' : 'text-gray-900'}`}>
                        {faq.question}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp className="text-blue-600" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div id={`faq-answer-${index}`} className="px-6 pb-4 bg-blue-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Online Presence?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help your business grow with our digital marketing expertise.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;