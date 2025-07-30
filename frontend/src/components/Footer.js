import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-white mt-8 p-4 text-center">
    <div className="mb-2">
      <strong>Chennai Pest Control</strong> &copy; 2025
    </div>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
      <span>Address: 201, Kamadhenu Nagar, Sheikmaniyam, Porur, Chennai 600116</span>
      <span className="hidden sm:inline">|</span>
      <span>Phone: +91-89393-20492</span>
    </div>
    <div className="mt-2 text-xs">
      <span>Rodent Control, Termite Control, Cockroach Control | Pest Control Chennai | Home & Commercial</span>
    </div>
  </footer>
);

export default Footer;
