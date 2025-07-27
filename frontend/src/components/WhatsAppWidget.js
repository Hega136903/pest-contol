import React from 'react';

const WhatsAppWidget = () => (
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp Chat"
      className="h-12 w-12 drop-shadow-lg rounded-full border-2 border-primary"
    />
  </a>
);

export default WhatsAppWidget;
