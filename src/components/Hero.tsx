import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/hero-bg (1).jpg')",
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/70 z-0"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 md:py-40 lg:py-48 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Expert Maintenance Services for Your Home & Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Professional, reliable, and comprehensive maintenance solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Explore Our Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;