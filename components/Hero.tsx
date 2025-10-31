import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-brand-accent/40 backdrop-blur-md"></div>
      <div className="relative z-10 px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-2 leading-tight tracking-tight text-center">
          Global Wedding Planners
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold mb-6 leading-snug max-w-3xl mx-auto text-center">
          Crafting Timeless Moments
        </h2>
        <p className="text-lg md:text-xl font-poppins max-w-2xl mx-auto">
          We believe every love story is unique. Let us design a wedding that is exclusively yours, filled with elegance, romance, and unforgettable memories.
        </p>
        <a href="#contact" className="mt-8 inline-block bg-brand-secondary text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
          Begin Your Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;