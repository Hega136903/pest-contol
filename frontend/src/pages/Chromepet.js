import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Chromepet = ({ onBookClick }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control in Chromepet Chennai | Rodent, Termite, Cockroach Control</title>
      <meta name="description" content="Professional pest control services in Chromepet, Chennai. Expert rodent control, termite treatment, cockroach elimination. Same day service. Book now!" />
      <meta name="keywords" content="pest control Chromepet, rodent control Chromepet, termite control Chromepet, cockroach control Chromepet, Chennai" />
    </Helmet>

    <section className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Pest Control in Chromepet, Chennai</h1>
      <p className="text-gray-700 mb-4 text-lg">
        Professional pest control services for Chromepet residents. Specializing in rodent control, termite treatment, and cockroach elimination using eco-friendly, family-safe methods.
      </p>

      <div className="bg-green-50 border-l-4 border-primary p-6 rounded mb-6">
        <h2 className="text-xl font-bold text-primary mb-3">Why Choose Us for Pest Control in Chromepet?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Quick response - Same day service in Chromepet</li>
          <li>Certified pest control experts</li>
          <li>Safe eco-friendly treatments</li>
          <li>1-year warranty on all services</li>
          <li>Transparent pricing</li>
          <li>500+ satisfied customers in Chromepet</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Rodent Control Chromepet</h3>
          <p className="text-gray-600 mb-4">Effective rodent removal for homes and offices in Chromepet. Complete rat and mouse control.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Termite Control Chromepet</h3>
          <p className="text-gray-600 mb-4">Expert termite treatment protecting your structures and furniture from damage.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Cockroach Control Chromepet</h3>
          <p className="text-gray-600 mb-4">Safe cockroach elimination for homes and commercial spaces in Chromepet.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>
      </div>

      <Link to="/book" className="block text-center bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition-colors">
        Book Pest Control Service in Chromepet
      </Link>
    </section>
  </div>
);

export default Chromepet;
