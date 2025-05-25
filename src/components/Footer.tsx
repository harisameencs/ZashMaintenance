import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">Zash</span>
              <span className="text-2xl font-light text-green-400">Maintenance</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional maintenance services for residential and commercial properties.
              We provide exceptional service with a focus on quality and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/residential" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Residential Services
                </Link>
              </li>
              <li>
                <Link to="/services/removal" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Removal Services
                </Link>
              </li>
              <li>
                <Link to="/services/boiler-repair" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Boiler Repair
                </Link>
              </li>
              <li>
                <Link to="/services/landscaping" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Landscaping
                </Link>
              </li>
              <li>
                <Link to="/services/pest-control" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Pest Control
                </Link>
              </li>
              <li>
                <Link to="/services/cleaning" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cleaning Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-blue-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-400" />
                <span className="text-gray-400">+44 7454 392199</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400" />
                <a href="info@zashservices.co.uk" className="text-gray-400 hover:text-blue-400 transition-colors">
                info@zashservices.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-400 mt-1" />
                <span className="text-gray-400">Flat, White Lion Church Road, Yate, Bristol, England, BS37 5BG</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-blue-400 mt-1" />
                <div className="text-gray-400">
                  <p>Open 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Zash Maintenance Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;