import React, { useEffect } from 'react';
import { services } from '../data/services';
import { Link } from '../components/Link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Zash Maintenance Services';
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Maintenance Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We provide comprehensive maintenance solutions tailored to your specific needs.
            Explore our range of professional services below.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => {
              // Dynamically get the icon component from lucide-react with proper typing
              const IconComponent = (LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.HelpCircle;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[300px] object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="h-16 w-16 bg-blue-100 rounded-md flex items-center justify-center mb-6 text-blue-700">
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                            <ArrowRight size={12} className="text-green-600" />
                          </div>
                          <p className="ml-3 text-gray-600">{benefit}</p>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your maintenance needs or request a quote.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Contact Us
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;