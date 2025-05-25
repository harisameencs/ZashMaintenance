import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">Zash</span>
            <span className="text-2xl font-light text-green-600">Maintenance</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-800 hover:text-blue-700 transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium text-gray-800 hover:text-blue-700 transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium text-gray-800 hover:text-blue-700 transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-800 hover:text-blue-700 transition-colors">
              Contact
            </Link>
            <a 
              href="https://wa.me/447454392199" 
              className="flex items-center font-medium text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span>Emergency Call</span>
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center">
            <a 
              href="https://wa.me/4473405083" 
              className="mr-4 p-2 text-blue-700 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              <Phone size={20} />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-blue-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-800 hover:text-blue-700 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="font-medium text-gray-800 hover:text-blue-700 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-800 hover:text-blue-700 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-800 hover:text-blue-700 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://wa.me/4473405083" 
              className="flex items-center justify-center font-medium text-white bg-blue-700 hover:bg-blue-800 px-4 py-3 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              <span>Emergency Call</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;