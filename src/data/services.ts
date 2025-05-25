import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Services',
    shortDescription: 'Complete home maintenance solutions',
    description: 'Our comprehensive residential services cover everything from general repairs to complete home maintenance. We handle electrical work, plumbing issues, HVAC maintenance, and more to keep your home running smoothly.',
    icon: 'Home',
    benefits: [
      'Regular maintenance prevents costly repairs',
      'Professional technicians for all home systems',
      'Emergency services available 24/7',
      'Customized maintenance plans'
    ],
    image: '/masonry-portfolio-1.jpg'
  },
  {
    id: 'removal',
    title: 'Removal Services',
    shortDescription: 'Efficient waste and junk removal',
    description: 'Our removal services provide efficient and environmentally responsible disposal of waste, junk, and unwanted items. We handle everything from small residential cleanouts to large commercial projects.',
    icon: 'Truck',
    benefits: [
      'Eco-friendly disposal practices',
      'Same-day service available',
      'Handles items of all sizes',
      'Competitive pricing with no hidden fees'
    ],
    image: 'https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'boiler-repair',
    title: 'Boiler Repair',
    shortDescription: 'Expert boiler maintenance and repair',
    description: 'Our certified technicians provide comprehensive boiler repair and maintenance services. We specialize in diagnosing issues quickly and providing efficient, long-lasting repairs for all boiler types and brands.',
    icon: 'Thermometer',
    benefits: [
      'Certified and experienced technicians',
      'Same-day emergency repairs',
      'Maintenance plans to prevent breakdowns',
      'All major brands serviced'
    ],
    image: 'https://www.pexels.com/photo/crop-man-harvesting-honey-in-countryside-area-5247947?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    shortDescription: 'Beautiful outdoor space design and maintenance',
    description: 'Our landscaping services transform and maintain your outdoor spaces with expert design, installation, and ongoing care. From lawn maintenance to complete landscape redesigns, we help create beautiful, functional outdoor environments.',
    icon: 'Flower2',
    benefits: [
      'Customized landscape designs',
      'Regular maintenance programs',
      'Seasonal services and preparations',
      'Eco-friendly practices and products'
    ],
    image: 'https://images.pexels.com/photos/589/garden-flower-grass-park.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    shortDescription: 'Effective and safe pest elimination',
    description: 'Our pest control services provide safe, effective solutions for all types of pest problems. We use environmentally responsible methods to eliminate current infestations and prevent future ones, keeping your property pest-free.',
    icon: 'Bug',
    benefits: [
      'Child and pet-friendly treatments',
      'Preventative programs available',
      'Targets all common pests',
      'Satisfaction guaranteed'
    ],
    image: 'https://images.pexels.com/photos/8551102/pexels-photo-8551102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    shortDescription: 'Thorough professional cleaning',
    description: 'Our professional cleaning services provide thorough, detailed cleaning for homes and businesses. From regular maintenance cleaning to deep cleaning projects, we ensure your spaces are spotless, healthy, and welcoming.',
    icon: 'Sparkles',
    benefits: [
      'Customized cleaning plans',
      'Eco-friendly products available',
      'Trained and vetted cleaning staff',
      'Satisfaction guaranteed'
    ],
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};