import React, { useState, useRef, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const TeamMember = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const memberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={memberRef}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        
        {/* Social Overlay */}
        <div className={`absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end justify-center pb-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-3">
            {member.social.facebook && (
              <a href={member.social.facebook} className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                <Facebook size={18} />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                <Twitter size={18} />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                <Instagram size={18} />
              </a>
            )}
            {member.social.email && (
              <a href={`mailto:${member.social.email}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-gray-500 text-sm">
          <Phone size={14} className="mr-1" />
          <span>{member.phone}</span>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
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

  const teamMembers = [
    {
      name: "Robert Fox",
      position: "Business Director",
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/10/person-4.png",
      bio: "Strategic thinker with 15+ years of experience in business development and team leadership.",
      phone: "+1 (555) 123-4567",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        email: "robert.fox@example.com"
      }
    },
    {
      name: "Dianne Russell",
      position: "CEO & Owner",
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/10/person-1.png",
      bio: "Visionary leader driving digital transformation and innovation in the marketing landscape.",
      phone: "+1 (555) 234-5678",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
        email: "dianne.russell@example.com"
      }
    },
    {
      name: "Eleanor Pena",
      position: "Operations Head",
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/10/person-2.png",
      bio: "Process optimization expert ensuring seamless operations and exceptional client experiences.",
      phone: "+1 (555) 345-6789",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        email: "eleanor.pena@example.com"
      }
    },
    {
      name: "Cameron William",
      position: "Marketing Lead",
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/10/person-3.png",
      bio: "Creative marketing strategist specializing in brand development and customer engagement.",
      phone: "+1 (555) 456-7890",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
        email: "cameron.william@example.com"
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-5 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          <span className="text-red-500 text-lg font-semibold uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Meet Our <span className="text-blue-600">Digital Experts</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our talented team of digital marketing professionals is dedicated to helping your business succeed. 
            With diverse expertise and a passion for innovation, we deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;