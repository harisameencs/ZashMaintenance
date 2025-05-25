import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Zash Maintenance Services';
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or ready to schedule a service? 
            Get in touch with our team for prompt assistance.
          </p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to answer your questions and provide the maintenance solutions you need. 
                Reach out to our team through any of the methods below.
              </p>

              <div className="space-y-6 mb-8">

<div className="flex items-start">
  <div className="flex-shrink-0 mt-1">
    <MessageCircle size={24} className="text-green-500" />
  </div>
  <div className="ml-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-1">WhatsApp</h3>
    <a
      href="https://wa.me/447454392199"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-green-600"
    >
      +447454392199
    </a>
  </div>
</div>


                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail size={24} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@zashservices.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin size={24} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">Bristol</p>
                    <p className="text-gray-600">London</p>
                    <p className="text-gray-600">United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock size={24} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Open 24/7</p>
                  </div>
                </div>
              </div>

              {/* Emergency Services */}
              {/* <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Services</h3>
                <p className="text-gray-700 mb-3">
                  For urgent maintenance issues requiring immediate attention, 
                  please call our emergency hotline available 24/7.
                </p>
                <a 
                  href="tel:+44987654321" 
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Emergency Hotline
                </a>
              </div> */}
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;