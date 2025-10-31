import React from 'react';
import { FacebookIcon, InstagramIcon, LocationIcon, PhoneIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-playfair mb-4">Global Wedding Planners</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gray-400 mb-4">
          <div className="flex items-center space-x-2">
            <PhoneIcon />
            <a href="tel:+919567955459" className="hover:text-brand-secondary transition-colors">
              +91 95679 55459
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <LocationIcon />
            <a href="https://maps.app.goo.gl/cLBiaGXZBHfeAN4p9" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">
              Global Events, Yendayar
            </a>
          </div>
        </div>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">Creating beautiful memories, one wedding at a time. Serving clients worldwide.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/global.events.ydr/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-secondary transition-colors"><InstagramIcon /></a>
          <a href="https://www.facebook.com/globaleventsyendayar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-secondary transition-colors"><FacebookIcon /></a>
        </div>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Global Wedding Planners. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;