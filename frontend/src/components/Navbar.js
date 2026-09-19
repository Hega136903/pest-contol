import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onBookClick }) => {
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
          {/* Desktop logo */}
          <img src="/logo.png" alt="Vishwa Pest Control - Professional WildGreen Pest Management Services Logo" className="hidden sm:block h-8 w-8" />
          {/* Mobile logo - larger and more visible */}
          <img src="/logo.png" alt="Vishwa Pest Control - Professional WildGreen Pest Management Services Logo" className="sm:hidden h-10 w-10" />
          <span className="font-bold text-lg sm:text-xl">
            <span className="hidden sm:inline">WildGreen Pest Management</span>
            <span className="sm:hidden">WildGreen Pest Management</span>
          </span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:underline px-2 py-1">Home</Link>
          <Link to="/services" className="hover:underline px-2 py-1">Services</Link>
          <Link to="/blog" className="hover:underline px-2 py-1">Guides</Link>
          <Link to="/about" className="hover:underline px-2 py-1">About</Link>
          <Link to="/contact" className="hover:underline px-2 py-1">Contact</Link>
          <Link to="/admin" className="hover:underline px-2 py-1">Admin</Link>
          <Link to="/book" className="bg-white text-primary font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors inline-block">
            Book Now
          </Link>
        </div>

        {/* Mobile: Book Now button visible on larger mobile */}
        <div className="hidden sm:flex md:hidden gap-2">
          <Link to="/book" className="bg-white text-primary font-semibold px-3 py-2 rounded text-sm hover:bg-gray-100 transition-colors inline-block">
            Book Now
          </Link>
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
          <Link to="/" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Home</Link>
          <Link to="/services" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Services</Link>
          <Link to="/blog" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Guides</Link>
          <Link to="/about" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Contact</Link>
          <Link to="/admin" className="hover:bg-green-700 px-4 py-3 border-b border-green-600" onClick={closeMenu}>Admin</Link>
          <Link to="/book" className="hover:bg-green-700 px-4 py-3 text-left w-full font-semibold block border-b border-green-600" onClick={closeMenu}>Book Service</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

