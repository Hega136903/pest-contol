import React from 'react';

const WhatsAppWidget = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:gap-3 sm:bottom-6 sm:right-6">
    <a
      href="tel:+918939320492"
      className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-white px-2.5 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-gray-800 shadow-lg ring-1 ring-gray-200 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
    >
      <span className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-primary text-white text-base sm:text-lg flex-shrink-0">📞</span>
      <span className="hidden sm:inline">Call Now</span>
    </a>
    <a
      href="https://wa.me/918939320492"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-green-500 px-2.5 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl"
    >
      <span className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-white text-green-600 flex-shrink-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          className="h-5 sm:h-6 w-5 sm:w-6"
        />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  </div>
);

export default WhatsAppWidget;
