import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

      {/* Customer Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <div className="flex items-center text-sm text-gray-600">
            <span>{testimonial.role}</span>
            <span className="mx-2">•</span>
            <span>{testimonial.service}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;