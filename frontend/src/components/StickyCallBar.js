import React from 'react';

const StickyCallBar = () => (
  <div className="sticky top-0 z-50 bg-green-600 text-white shadow-lg">
    {/* Mobile UI */}
    <div className="sm:hidden px-3 py-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1 flex-1">
          <a href="tel:+918939320492" className="hover:text-green-100 transition-colors text-xs font-semibold">
            📞+91 8939 320 492
          </a>
          <div className="flex items-center gap-2 text-xs font-medium">
            <span>•24/7 Available</span>
            <span>•Response in 2 min</span>
          </div>
        </div>
        <a
          href="https://wa.me/918939320492"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-600 px-2 py-1 rounded-full hover:bg-green-50 transition-colors font-semibold text-xs whitespace-nowrap shadow-sm flex-shrink-0"
        >
          💬 Chat
        </a>
      </div>
    </div>

    {/* Desktop UI */}
    <div className="hidden sm:flex px-4 py-3">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap text-xs sm:text-sm font-semibold">
          <a href="tel:+918939320492" className="hover:text-green-100 transition-colors">
            📞+91 8939 320 492
          </a>
          <span className="opacity-70">•</span>
          <span>24/7 Available</span>
          <span className="opacity-70">•</span>
          <span>Response in 2 min</span>
        </div>

        <a
          href="https://wa.me/918939320492"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-600 px-4 py-1.5 rounded-full hover:bg-green-50 transition-colors font-semibold text-sm whitespace-nowrap shadow-sm hover:shadow"
        >
          💬 WhatsApp Chat
        </a>
      </div>
    </div>
  </div>
);

export default StickyCallBar;
