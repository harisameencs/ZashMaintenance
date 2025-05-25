import React, { useEffect } from 'react';
import { Shield, Users, Award, ThumbsUp } from 'lucide-react';
import { Link } from '../components/Link';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Zash Maintenance Services';
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zash Maintenance</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner for comprehensive maintenance solutions since 2010.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded in 2010, Zash Maintenance Services began with a simple mission: to provide reliable, high-quality maintenance solutions for residential and commercial properties. What started as a small team of dedicated professionals has grown into a comprehensive maintenance company serving the Greater London area.
                </p>
                <p>
                  Our founder, James Zash, identified a critical gap in the market – maintenance services that truly put customers first. Too often, property owners struggled with unreliable contractors, poor communication, and substandard workmanship. James assembled a team of experienced professionals who shared his vision for exceptional service and technical excellence.
                </p>
                <p>
                  Over the years, we've expanded our service offerings to include residential maintenance, removal services, boiler repair, landscaping, pest control, and cleaning services. Throughout our growth, we've maintained our commitment to quality, reliability, and customer satisfaction.
                </p>
                <p>
                  Today, Zash Maintenance Services is a trusted name in the industry, known for our professionalism, attention to detail, and dedication to solving our customers' maintenance challenges.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3862376/pexels-photo-3862376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Zash Maintenance Team" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at Zash Maintenance Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, showing up on time and completing work as scheduled.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We take pride in our workmanship and use only the best materials and techniques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our customer interactions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <ThumbsUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We listen to our customers' needs and tailor our services accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              The experienced professionals guiding Zash Maintenance Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="James Zash" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">James Zash</h3>
                <p className="text-blue-700 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years of experience in the maintenance industry, James founded Zash Maintenance Services to deliver exceptional service to property owners.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sarah Reynolds" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Sarah Reynolds</h3>
                <p className="text-blue-700 mb-4">Operations Director</p>
                <p className="text-gray-600">
                  Sarah oversees all service operations, ensuring our teams deliver consistent, high-quality work to every customer.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="David Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">David Chen</h3>
                <p className="text-blue-700 mb-4">Technical Director</p>
                <p className="text-gray-600">
                  David leads our technical team, bringing innovation and expertise to our maintenance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Zash Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your maintenance needs and discover why so many property owners trust Zash.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;