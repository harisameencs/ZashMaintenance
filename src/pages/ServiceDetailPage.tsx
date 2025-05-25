import React, { useEffect, useState } from 'react';
import { getServiceById } from '../data/services';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { Link } from '../components/Link';
import ContactForm from '../components/ContactForm';
import { Service } from '../types';

interface ServiceDetailPageProps {
  serviceId: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const foundService = getServiceById(serviceId);
    if (foundService) {
      setService(foundService);
      document.title = `${foundService.title} | Zash Maintenance Services`;
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service not found</h2>
        <Link to="/services" className="text-blue-700 hover:underline">
          View all services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(${service.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/70 z-0"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <Link to="/services" className="inline-flex items-center text-white mb-4 hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            {service.description}
          </p>
          <a 
            href="https://wa.me/4473405083" 
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <Phone size={18} className="mr-2" />
            Get Emergency Service
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits</h2>
              
              <div className="space-y-4 mb-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check size={16} className="text-green-600" />
                    </div>
                    <p className="ml-3 text-lg text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional {service.title} You Can Trust</h3>
                <p className="text-gray-600 mb-4">
                  At Zash Maintenance, we take pride in delivering exceptional {service.title.toLowerCase()}. Our trained and experienced professionals use the latest techniques and equipment to ensure high-quality results.
                </p>
                
                <p className="text-gray-600 mb-4">
                  We understand that every property has unique requirements, which is why we offer customized solutions tailored to your specific needs. Our team conducts thorough assessments to identify the most effective approach for your situation.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-4">
                  Our process begins with a comprehensive evaluation of your property's needs. We then develop a detailed plan that outlines the scope of work, timeline, and expected outcomes. Throughout the project, we maintain open communication to ensure your complete satisfaction.
                </p>
                
                <p className="text-gray-600 mb-8">
                  We use only high-quality materials and industry-best practices to deliver results that last. Our commitment to excellence has earned us a reputation for reliability and professionalism in the maintenance industry.
                </p>
              </div>
            </div>

            {/* Sidebar with Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Request This Service</h3>
                <ContactForm />
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Emergency Service</h3>
                <p className="text-gray-600 mb-4">
                  Need urgent assistance? Our emergency team is available 24/7.
                </p>
                <a 
                  href="https://wa.me/4473405083" 
                  className="inline-flex items-center w-full justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Call +44 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your service or request a free quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/4473405083" 
              className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;