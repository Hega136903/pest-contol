import React from 'react';

const StickyCallBar = () => (
  <div className="hidden sm:flex sticky top-0 z-40 bg-primary text-white px-4 py-3 justify-between items-center shadow-md">
    <div className="flex items-center gap-3 text-sm sm:text-base">
      <span className="text-xl">📞</span>
      <span className="font-semibold">Call Now:</span>
      <a href="tel:+918939320492" className="font-bold hover:underline">
        +91 8939 320 492
      </a>
      <span className="text-xs sm:text-sm ml-2 opacity-90">Available 24/7 • Response in 2 min</span>
    </div>
    <a
      href="https://wa.me/918939320492"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-white text-primary px-3 py-1 rounded font-semibold hover:bg-gray-100 transition-colors text-sm"
    >
      💬 WhatsApp
    </a>
  </div>
);

export default StickyCallBar;
