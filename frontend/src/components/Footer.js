import React from 'react';
import { Link } from 'react-router-dom';
import NAPSection from './NAPSection';

const Footer = () => (
  <footer className="bg-primary text-white mt-8 px-4 py-6 text-center">
    <div className="max-w-6xl mx-auto">
    <div className="mb-3">
      <strong>WildGreen Pest Management</strong> &copy; 2026
    </div>
    <NAPSection compact />
    <div className="mt-4 text-xs leading-relaxed text-green-50">
      <span>Professional pest control in Chennai for homes, offices and businesses.</span>
    </div>
    <div className="mt-3 text-sm">
      <Link to="/services" className="hover:underline mr-4">Services</Link>
      <Link to="/blog" className="hover:underline mr-4">Pest Control Guides</Link>
      <Link to="/book" className="hover:underline">Book an Inspection</Link>
    </div>
    </div>
  </footer>
);

export default Footer;

