import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => (
  <div className="px-4 py-8 max-w-lg mx-auto">
    <Helmet>
      <title>Contact | Chennai Pest Control</title>
      <meta name="description" content="Contact Chennai Pest Control for rodent, termite, cockroach services in Chennai." />
    </Helmet>
    <h1 className="text-2xl font-bold text-primary mb-4">Contact Us</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-2"><strong>Phone:</strong> <a href="tel:+918939320492" className="text-primary">+91-89393-20492</a></div>
      <div className="mb-2"><strong>Email:</strong> <a href="mail to:visvishwa6903@gmail.com" className="text-primary">visvishwa6903@gmail.com</a></div>
      <div className="mb-2"><strong>Address:</strong> 201, Kamadhenu Nagar, Sheikmaniyam, Porur, Chennai 600116</div>
      <div className="mt-4 text-sm text-gray-600">For urgent pest issues, use our WhatsApp chat widget for instant support!</div>
    </div>
  </div>
);

export default Contact;
