import type React from 'react';

export interface Service {
  // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  event: string;
}

export interface AdditionalService {
  title: string;
  imageUrl: string;
}


