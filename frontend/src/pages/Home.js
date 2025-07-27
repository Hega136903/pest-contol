import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Priya S.',
    text: 'Quick and professional ant control service. Highly recommended in Chennai!'
  },
  {
    name: 'Ramesh K.',
    text: 'Termite treatment was effective and affordable. Great team!'
  },
  {
    name: 'Anita M.',
    text: 'No more cockroaches! Booking was easy and service was prompt.'
  }
];

const Home = () => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control Chennai | Ant, Termite, Cockroach | Book Now</title>
      <meta name="description" content="Best pest control services in Chennai for Ant, Termite, Cockroach. Book online for home & commercial pest control." />
      <meta name="keywords" content="pest control chennai, ant control, termite control, cockroach control, home pest control" />
    </Helmet>
    <section className="text-center mb-8">
      <img src="/hero.jpg" alt="Pest Control Chennai" className="w-full h-48 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold text-primary mb-2">Welcome to Chennai Pest Control</h1>
      <p className="text-lg text-gray-700">Expert Ant, Termite & Cockroach Control for Homes & Businesses</p>
      <Link to="/book" className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded shadow hover:bg-green-700">Book Now</Link>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
        <img src="/ant.jpg" alt="Ant Control" className="h-20 mb-2" />
        <h2 className="font-semibold text-primary">Ant Control</h2>
        <p className="text-sm text-gray-600">Safe, eco-friendly ant removal for kitchens, gardens, and offices.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
        <img src="/termite.jpg" alt="Termite Control" className="h-20 mb-2" />
        <h2 className="font-semibold text-primary">Termite Control</h2>
        <p className="text-sm text-gray-600">Long-lasting termite treatment for wood, furniture, and buildings.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
        <img src="/cockroach.jpg" alt="Cockroach Control" className="h-20 mb-2" />
        <h2 className="font-semibold text-primary">Cockroach Control</h2>
        <p className="text-sm text-gray-600">Odorless, child-safe cockroach control for homes and restaurants.</p>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-bold text-primary mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-700 italic">"{t.text}"</p>
            <div className="mt-2 text-right text-primary font-semibold">- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Home;
