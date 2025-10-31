import React from 'react';
import type { Service, Testimonial, AdditionalService } from '../types';
import { DiamondIcon, HeartIcon, StarIcon } from '../components/Icons';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    // FIX: Replaced JSX syntax with React.createElement because JSX is not allowed in '.ts' files.
    icon: React.createElement(StarIcon),
    title: 'Full-Service Planning',
    description: 'From venue selection to the final send-off, we handle every detail. Enjoy a stress-free engagement while we bring your dream wedding to life.',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement because JSX is not allowed in '.ts' files.
    icon: React.createElement(HeartIcon),
    title: 'Partial Planning',
    description: 'You\'ve started planning but need expert help to tie up loose ends. We step in to assist with vendor management, design, and logistics.',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement because JSX is not allowed in '.ts' files.
    icon: React.createElement(DiamondIcon),
    title: 'Day-of Coordination',
    description: 'For the couple who has it all planned but wants a professional to execute their vision flawlessly on the big day. We manage the timeline and vendors so you can relax.',
  },
];
import gallery2 from './assets/images/gallery/gallery2.webp';
import gallery4 from './assets/images/gallery/gallery4.webp';
const gallery5: string = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop';

export const GALLERY_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    gallery2,
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
  gallery4,
  gallery5,
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop',
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: 'Global Wedding Planners turned our dream into a reality. Every detail was perfect, and we could just enjoy our special day without any worries. Truly the best!',
    author: 'Jessica & Mark',
    event: 'Summer Garden Wedding',
  },
  {
    quote: 'The team was incredibly professional, creative, and attentive. They understood our vision perfectly and executed it beyond our wildest expectations. Highly recommended!',
    author: 'Emily & David',
    event: 'Urban Chic Celebration',
  },
  {
    quote: 'We couldn\'t have done it without them. Their expertise and calming presence were invaluable. Our wedding was seamless and absolutely beautiful. Thank you!',
    author: 'Sarah & Tom',
    event: 'Coastal Destination Wedding',
  },
];

// ✅ Import local images
import weddingStage from './assets/images/wedding-stage.webp';
import baptism from './assets/images/baptism.webp';
import anniversary from './assets/images/anniversary.webp';
import getTogether from './assets/images/get-together.webp';
import babyShower from './assets/images/baby-shower.webp';
import haldi from './assets/images/haldi.webp';

import luxuryCar from './assets/images/luxury-car.webp';

import ledScreen from './assets/images/led-screen.webp';



export const ADDITIONAL_SERVICES_DATA: AdditionalService[] = [
  { title: 'Wedding Stage Decoration', imageUrl: weddingStage },
  { title: 'Baptism', imageUrl: baptism },
  { title: 'Anniversary Parties', imageUrl: anniversary },
  { title: 'Get Together Parties', imageUrl: getTogether },
  { title: 'Baby Shower', imageUrl: babyShower },
  { title: 'Haldi Ceremony', imageUrl: haldi },
  { title: 'House Warming', imageUrl: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1200&auto=format&fit=crop' },
   { title: 'Luxury Car Service', imageUrl: luxuryCar },
  { title: 'Live Telecasting', imageUrl: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1200&auto=format&fit=crop' },
 { title: 'LED Screening', imageUrl: ledScreen },
  { title: 'Customised Events', imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop' },
];
