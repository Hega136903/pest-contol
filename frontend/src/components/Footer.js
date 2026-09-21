import React from 'react';
import { Link } from 'react-router-dom';
import NAPSection from './NAPSection';

const Footer = () => (
  <footer className="bg-primary text-white mt-8 p-4 text-center">
    <div className="mb-2">
      <strong>WildGreen Pest Management</strong> &copy; 2026
    </div>
    <NAPSection compact />
    <div className="mt-2 text-xs">
      <span>Professional Pest Control Chennai | Rodent Control | Termite Control | Cockroach Control | Mosquito Control | Residential & Commercial Pest Control | Best Pest Control Near Me</span>
    </div>
    <div className="mt-3 text-sm">
      <Link to="/services" className="hover:underline mr-4">Services</Link>
      <Link to="/blog" className="hover:underline mr-4">Pest Control Guides</Link>
      <Link to="/book" className="hover:underline">Book an Inspection</Link>
    </div>
  </footer>
);

export default Footer;

