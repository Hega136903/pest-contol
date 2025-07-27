import React from 'react';

const Navbar = () => (
  <nav className="bg-primary text-white px-4 py-3 flex justify-between items-center shadow">
    <div className="flex items-center gap-2">
      <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
      <span className="font-bold text-lg">Chennai Pest Control</span>
    </div>
    <div className="space-x-4">
      <a href="/" className="hover:underline">Home</a>
      <a href="/services" className="hover:underline">Services</a>
      <a href="/book" className="hover:underline">Book Service</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/contact" className="hover:underline">Contact</a>
      <a href="/admin" className="hover:underline">Admin</a>
    </div>
  </nav>
);

export default Navbar;
