import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../src/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-md`}>
      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <a href="#" className="flex items-center">
          <div>
            <span className="block font-playfair font-bold tracking-wider transition-all duration-300 text-xl text-brand-dark">
              GLOBAL EVENTS
            </span>
            <span className="block font-poppins text-xs tracking-[0.2em] uppercase transition-colors duration-300 text-brand-accent">
              Wedding Planning Company
            </span>
          </div>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="font-poppins font-medium transition-colors duration-300 text-brand-dark hover:text-brand-secondary">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none transition-colors duration-300 text-brand-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-brand-dark hover:text-brand-secondary font-medium px-4 py-2">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
