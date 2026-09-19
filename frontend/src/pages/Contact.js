import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => (
  <div className="px-4 py-8 max-w-lg mx-auto">
    <Helmet>
      <title>Contact Us | WildGreen Pest Management | Get Support</title>
      <meta name="description" content="Contact WildGreen Pest Management. Phone: +91-89393-20492. 24/7 support for rodent, termite, cockroach control in Chennai. WhatsApp chat available!" />
      <meta name="keywords" content="contact pest control, pest control support, WildGreen Pest Management services contact" />
    </Helmet>
    <h1 className="text-2xl font-bold text-primary mb-4">Contact Us</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-2"><strong>Phone:</strong> <a href="tel:+918939320492" className="text-primary">+91-89393-20492</a></div>
      <div className="mb-2"><strong>Email:</strong> <a href="mailto:visvishwa6903@gmail.com" className="text-primary">visvishwa6903@gmail.com</a></div>
      <div className="mb-2"><strong>Address:</strong> 41, Jayalakshmi Nagar, 4th Street, Vanagaram, Chennai-600095</div>
      <div className="mt-4 text-sm text-gray-600">For urgent pest issues, use our WhatsApp chat widget for instant support!</div>
    </div>
  </div>
);

export default Contact;

