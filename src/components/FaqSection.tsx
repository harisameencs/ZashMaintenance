import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to commonly asked questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-0"
            >
              <button
                className="flex justify-between items-center w-full py-5 px-2 text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-700 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-2 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;