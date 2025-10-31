import React from 'react';
import weddingSetup from '../src/assets/images/about/wedding-setup.webp'; // ✅ your local image

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Image Section */}
          <div className="md:w-1/2">
            <img
              src={weddingSetup}
              alt="Elegant wedding setup"
              className="rounded-2xl shadow-2xl object-cover w-full h-[450px] md:h-[500px] transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Right Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-playfair font-bold text-brand-primary mb-6">
              About Global Wedding Planners
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At <span className="font-semibold text-brand-primary">Global Wedding Planners</span>, our passion is to create weddings that are not only beautiful but also deeply personal. 
              With years of experience and a global network of top-tier vendors, we orchestrate seamless events 
              that reflect the unique personalities and love stories of our clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our philosophy is built on a foundation of trust, creativity, and meticulous attention to detail. 
              We are more than just planners; we are storytellers, designers, and your trusted partners throughout 
              this incredible journey. From intimate elopements to grand celebrations, we are dedicated to making 
              your dream wedding a flawless reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
