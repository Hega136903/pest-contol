import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Ant Control',
    description: 'Safe, eco-friendly ant removal for kitchens, gardens, and offices.',
    duration: '30-60 mins',
    price: '₹799 onwards',
    image: '/ant.jpg'
  },
  {
    name: 'Termite Control',
    description: 'Long-lasting termite treatment for wood, furniture, and buildings.',
    duration: '1-2 hours',
    price: '₹1499 onwards',
    image: '/termite.jpg'
  },
  {
    name: 'Cockroach Control',
    description: 'Odorless, child-safe cockroach control for homes and restaurants.',
    duration: '45-90 mins',
    price: '₹999 onwards',
    image: '/cockroach.jpg'
  }
];

const Services = () => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control Services Chennai | Ant, Termite, Cockroach</title>
      <meta name="description" content="Ant, Termite, Cockroach pest control services in Chennai. Book online for home & commercial pest control." />
      <meta name="keywords" content="ant control chennai, termite control chennai, cockroach control chennai" />
      <h1>Pest Control Services in Chennai</h1>
    </Helmet>
    <h1 className="text-2xl font-bold text-primary mb-6">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src={s.image} alt={s.name} className="h-20 mb-2" />
          <h2 className="font-semibold text-primary mb-1">{s.name}</h2>
          <p className="text-sm text-gray-600 mb-1">{s.description}</p>
          <div className="text-xs text-gray-500 mb-1">Duration: {s.duration}</div>
          <div className="text-xs text-gray-500 mb-2">Price: {s.price}</div>
          <Link to="/book" className="bg-primary text-white px-4 py-1 rounded hover:bg-green-700">Book Now</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
