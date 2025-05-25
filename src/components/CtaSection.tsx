import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';
import { Link } from './Link';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-blue-100">
              Contact us today for a free consultation and quote for your maintenance needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/447454392199" 
              className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              <PhoneCall size={20} className="mr-2" />
              Call Now
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              <Calendar size={20} className="mr-2" />
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;