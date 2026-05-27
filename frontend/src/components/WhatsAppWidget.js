import React from 'react';

const WhatsAppWidget = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
    <a
      href="tel:+918939320492"
      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-lg ring-1 ring-gray-200 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">📞</span>
      <span>Call Now</span>
    </a>
    <a
      href="https://wa.me/918939320492"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-600">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          className="h-6 w-6"
        />
      </span>
      <span>WhatsApp</span>
    </a>
  </div>
);

export default WhatsAppWidget;
