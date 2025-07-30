import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-primary text-white px-4 py-3 shadow relative">
      <div className="flex justify-between items-center">
        {/* Logo and brand name */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg sm:text-xl">
            <span className="hidden sm:inline">Chennai Pest Control</span>
            <span className="sm:hidden">Chennai Pest</span>
          </span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline px-2 py-1">Home</a>
          <a href="/services" className="hover:underline px-2 py-1">Services</a>
          <a href="/book" className="hover:underline px-2 py-1">Book Service</a>
          <a href="/about" className="hover:underline px-2 py-1">About</a>
          <a href="/contact" className="hover:underline px-2 py-1">Contact</a>
          <a href="/admin" className="hover:underline px-2 py-1">Admin</a>
        </div>

        {/* Mobile hamburger button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-primary border-t border-green-600 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col py-2">
          <a href="/" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Home</a>
          <a href="/services" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Services</a>
          <a href="/book" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Book Service</a>
          <a href="/about" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>About</a>
          <a href="/contact" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Contact</a>
          <a href="/admin" className="hover:bg-green-700 px-4 py-3" onClick={closeMenu}>Admin</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
