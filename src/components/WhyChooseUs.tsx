import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield size={36} className="text-blue-700" />,
      title: 'Fully Licensed & Insured',
      description: 'All our work is covered by comprehensive insurance and performed by licensed professionals.',
    },
    {
      icon: <Clock size={36} className="text-blue-700" />,
      title: 'Fast Response Times',
      description: 'We prioritize quick response times for all maintenance needs, especially emergencies.',
    },
    {
      icon: <Award size={36} className="text-blue-700" />,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with comprehensive guarantees and warranties.',
    },
    {
      icon: <Users size={36} className="text-blue-700" />,
      title: 'Experienced Team',
      description: 'Our team of professionals brings years of experience to every maintenance job.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zash</h2>
          <p className="text-xl text-gray-600">
            We're committed to providing exceptional maintenance services with these key advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;