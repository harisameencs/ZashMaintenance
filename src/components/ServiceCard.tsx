import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Service } from '../types';
import { Link } from './Link';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon component from lucide-react
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons];
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group"
    >
      <div className="p-6">
        <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center mb-4 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        <Link 
          to={`/services/${service.id}`} 
          className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors"
        >
          Learn More 
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;