import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => (
  <div className="px-4 py-8 max-w-lg mx-auto">
    <Helmet>
      <title>Contact | Chennai Pest Control</title>
      <meta name="description" content="Contact Chennai Pest Control for ant, termite, cockroach services in Chennai." />
    </Helmet>
    <h1 className="text-2xl font-bold text-primary mb-4">Contact Us</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-2"><strong>Phone:</strong> <a href="tel:+919876543210" className="text-primary">+91-98765-43210</a></div>
      <div className="mb-2"><strong>Email:</strong> <a href="mailto:info@chennaipestcontrol.com" className="text-primary">info@chennaipestcontrol.com</a></div>
      <div className="mb-2"><strong>Address:</strong> 123, Anna Salai, Chennai, Tamil Nadu 600002</div>
      <div className="mt-4 text-sm text-gray-600">For urgent pest issues, use our WhatsApp chat widget for instant support!</div>
    </div>
  </div>
);

export default Contact;
