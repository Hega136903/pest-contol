import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Rodent Control',
    description: 'Safe, eco-friendly rodent removal for kitchens, gardens, and offices.',
    duration: '30-60 mins',
    price: '₹799 onwards',
    image: '/rodent.svg'
  },
  {
    name: 'Termite Control',
    description: 'Long-lasting termite treatment for wood, furniture, and buildings.',
    duration: '1-2 hours',
    price: '₹1499 onwards',
    image: '/termite.svg'
  },
  {
    name: 'Cockroach Control',
    description: 'Odorless, child-safe cockroach control for homes and restaurants.',
    duration: '45-90 mins',
    price: '₹999 onwards',
    image: '/cockroach.svg'
  }
];

const Services = () => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control Services Chennai | Rodent, Termite, Cockroach</title>
      <meta name="description" content="Rodent, Termite, Cockroach pest control services in Chennai. Book online for home & commercial pest control." />
      <meta name="keywords" content="rodent control chennai, termite control chennai, cockroach control chennai" />
      <h1>Pest Control Services in Chennai</h1>
    </Helmet>
    <h1 className="text-2xl font-bold text-primary mb-6">Our Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <img src={s.image} alt={s.name} className="h-20 w-20 object-contain mb-3" />
          <h2 className="font-semibold text-primary mb-2 text-lg">{s.name}</h2>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">{s.description}</p>
          <div className="text-xs text-gray-500 mb-1">Duration: {s.duration}</div>
          <div className="text-xs text-gray-500 mb-4 font-medium">Price: {s.price}</div>
          <Link to="/book" className="bg-primary text-white px-6 py-2 rounded hover:bg-green-700 font-medium text-sm w-full">Book Now</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
