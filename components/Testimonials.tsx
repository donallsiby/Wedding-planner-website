import React from 'react';
import { TESTIMONIALS_DATA } from '../src/constants';
import type { Testimonial } from '../types';
import { QuoteIcon } from './Icons';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <QuoteIcon />
    <p className="text-gray-600 italic my-4">"{testimonial.quote}"</p>
    <div className="font-playfair text-brand-primary font-bold text-lg">{testimonial.author}</div>
    <div className="text-sm text-brand-accent">{testimonial.event}</div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-brand-primary">Words From Our Couples</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">We are honored to have been a part of so many beautiful love stories.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
