import React, { useState, useCallback, useEffect } from 'react';
import { SERVICES_DATA, ADDITIONAL_SERVICES_DATA } from '../src/constants';
import type { Service } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="inline-block text-brand-secondary mb-4">{service.icon}</div>
    <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-3">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const nextService = useCallback(() => {
    setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % ADDITIONAL_SERVICES_DATA.length);
  }, []);

  const prevService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + ADDITIONAL_SERVICES_DATA.length) % ADDITIONAL_SERVICES_DATA.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextService, 5000);
    return () => clearInterval(slideInterval);
  }, [nextService]);

  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-brand-primary">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We offer a range of customizable packages to suit your unique needs and ensure your day is perfect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-20 pt-10 text-center">
          <h3 className="text-3xl font-playfair font-bold text-brand-primary mb-2">We Also Specialize In</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            From intimate gatherings to grand celebrations, we cater to all your special moments.
          </p>

          <div className="relative max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden">
            <div className="relative w-full h-80 md:h-[500px] overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentServiceIndex * 100}%)` }}
              >
                {ADDITIONAL_SERVICES_DATA.map((service, index) => (
                  <div
                    key={service.title}
                    className="relative w-full flex-shrink-0 h-full"
                    aria-hidden={index !== currentServiceIndex}
                  >
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                      <h4 className="text-3xl md:text-4xl font-playfair font-bold text-white text-center">{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prevService} aria-label="Previous service" className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-brand-dark p-2 rounded-full transition-colors duration-300 z-10">
              <ChevronLeftIcon />
            </button>
            <button onClick={nextService} aria-label="Next service" className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-brand-dark p-2 rounded-full transition-colors duration-300 z-10">
              <ChevronRightIcon />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {ADDITIONAL_SERVICES_DATA.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentServiceIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to service slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
