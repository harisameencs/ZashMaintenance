import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    // In a real implementation, we would check the window width
    // For simplicity, we'll just return either 1 or 3 testimonials
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      return [testimonials[activeIndex]];
    } else {
      const indices = [];
      for (let i = 0; i < 3; i++) {
        indices.push(testimonials[(activeIndex + i) % testimonials.length]);
      }
      return indices;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Read testimonials from our satisfied customers who have experienced our quality services firsthand.
          </p>
        </div>

        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-700 transition-colors hidden md:block"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-700 transition-colors hidden md:block"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;