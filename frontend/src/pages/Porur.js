import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Porur = ({ onBookClick }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control in Porur Chennai | Rodent, Termite, Cockroach Control</title>
      <meta name="description" content="Professional pest control services in Porur, Chennai. Expert rodent control, termite treatment, cockroach elimination. Same day service available. Book now!" />
      <meta name="keywords" content="pest control Porur, rodent control Porur, termite control Porur, cockroach control Porur, Chennai" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-porur" />
      <meta property="og:title" content="Pest Control in Porur Chennai | Rodent, Termite, Cockroach" />
      <meta property="og:description" content="Professional pest control in Porur, Chennai. Rodent, termite & cockroach elimination with same-day service." />
      <meta property="og:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-porur" />
      <meta name="twitter:title" content="Pest Control in Porur Chennai" />
      <meta name="twitter:description" content="Professional pest control services in Porur - rodent, termite & cockroach control" />
      <meta name="twitter:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />
    </Helmet>

    <section className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Pest Control in Porur, Chennai</h1>
      <p className="text-gray-700 mb-4 text-lg">
        Professional pest control services serving Porur and surrounding areas. We specialize in rodent control, termite treatment, and cockroach elimination using eco-friendly methods safe for families and pets.
      </p>

      <div className="bg-green-50 border-l-4 border-primary p-6 rounded mb-6">
        <h2 className="text-xl font-bold text-primary mb-3">Why Choose Us for Pest Control in Porur?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Same-day or next-day service in Porur area</li>
          <li>Certified pest control technicians</li>
          <li>Eco-friendly, child & pet-safe treatments</li>
          <li>1-year warranty on all services</li>
          <li>Transparent pricing with no hidden charges</li>
          <li>500+ satisfied customers in Porur</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Rodent Control Porur</h3>
          <p className="text-gray-600 mb-4">Safe and effective rodent removal for homes and offices in Porur. We eliminate rats, mice, and other rodents using humane methods.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Rodent Control →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Termite Control Porur</h3>
          <p className="text-gray-600 mb-4">Long-lasting termite treatment for wooden structures, furniture, and buildings in Porur. Protect your property with our expert termite control.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Termite Control →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Cockroach Control Porur</h3>
          <p className="text-gray-600 mb-4">Professional cockroach elimination service in Porur. Odorless and child-safe treatment for homes and restaurants.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Cockroach Control →</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Service Areas in Porur</h2>
        <p className="text-gray-700 mb-4">We provide pest control services throughout Porur including:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <span className="bg-white px-4 py-2 rounded">Porur Main Road</span>
          <span className="bg-white px-4 py-2 rounded">Narikuppai</span>
          <span className="bg-white px-4 py-2 rounded">Porur Church Road</span>
          <span className="bg-white px-4 py-2 rounded">Ramakrishnapuram</span>
          <span className="bg-white px-4 py-2 rounded">Sholinganallur</span>
          <span className="bg-white px-4 py-2 rounded">Nearby areas</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">How to Book Pest Control in Porur</h2>
        <ol className="list-decimal ml-6 space-y-3 text-gray-700 mb-6">
          <li>Call us at <strong>+91-8939-320-492</strong></li>
          <li>Describe your pest problem</li>
          <li>Get instant quote and scheduling</li>
          <li>Our technician visits for free inspection</li>
          <li>Receive professional treatment</li>
          <li>Enjoy 1-year warranty</li>
        </ol>

        <Link to="/book" className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition-colors">
          Book Pest Control Now
        </Link>
      </div>
    </section>

    {/* Internal Links to Other Locations */}
    <section className="mb-8 bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">We Also Serve Nearby Areas</h2>
      <p className="text-gray-700 mb-4">Professional pest control services in Chennai locations:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Link to="/pest-control-velachery" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Velachery</Link>
        <Link to="/pest-control-anna-nagar" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Anna Nagar</Link>
        <Link to="/pest-control-tambaram" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Tambaram</Link>
        <Link to="/pest-control-avadi" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Avadi</Link>
        <Link to="/pest-control-omr" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">OMR</Link>
        <Link to="/pest-control-ambattur" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Ambattur</Link>
        <Link to="/pest-control-pallavaram" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Pallavaram</Link>
      </div>

      {/* Link back to Services */}
      <div className="mt-6 pt-6 border-t border-gray-300">
        <Link to="/services" className="inline-block text-primary font-semibold hover:underline">← Back to All Services</Link>
      </div>
    </section>
  </div>
);

export default Porur;
