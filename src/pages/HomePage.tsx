import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqSection from '../components/FaqSection';

const HomePage: React.FC = () => {
  // Set document title
  React.useEffect(() => {
    document.title = 'Zash Maintenance Services | Professional Maintenance Solutions';
  }, []);

  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;