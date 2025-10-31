import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '../src/constants';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section 
      id="gallery" 
      className="py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551893319-3c0759c395e8?q=80&w=1920&auto=format&fit=crop')" }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-playfair font-bold text-brand-primary mb-12">Our Gallery</h2>
        <div className="relative max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden">
          <div className="relative w-full h-96 md:h-[600px] overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {GALLERY_IMAGES.map((src, index) => (
                <div key={src} className="w-full h-full flex-shrink-0">
                  <img
                    src={src}
                    alt={`Wedding gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-brand-dark p-2 rounded-full transition-colors duration-300">
            <ChevronLeftIcon />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-brand-dark p-2 rounded-full transition-colors duration-300">
            <ChevronRightIcon />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {GALLERY_IMAGES.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;