import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Tambaram = ({ onBookClick }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control in Tambaram Chennai | Rodent, Termite, Cockroach Control</title>
      <meta name="description" content="Professional pest control services in Tambaram, Chennai. Rodent control, termite treatment, cockroach elimination. Quick service, guaranteed results. Book now!" />
      <meta name="keywords" content="pest control Tambaram, rodent control Tambaram, termite control Tambaram, cockroach control Tambaram, Chennai" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-tambaram" />
      <meta property="og:title" content="Pest Control in Tambaram Chennai | Rodent, Termite, Cockroach" />
      <meta property="og:description" content="Professional pest control in Tambaram, Chennai. Rodent, termite & cockroach elimination with same-day service." />
      <meta property="og:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-tambaram" />
      <meta name="twitter:title" content="Pest Control in Tambaram Chennai" />
      <meta name="twitter:description" content="Professional pest control services in Tambaram - rodent, termite & cockroach control" />
      <meta name="twitter:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />
    </Helmet>

    <section className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Pest Control in Tambaram, Chennai</h1>
      <p className="text-gray-700 mb-4 text-lg">
        Trusted pest control service in Tambaram. We provide professional rodent control, termite treatment, and cockroach elimination using eco-friendly, safe methods.
      </p>

      <div className="bg-green-50 border-l-4 border-primary p-6 rounded mb-6">
        <h2 className="text-xl font-bold text-primary mb-3">Why Choose Us for Pest Control in Tambaram?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Fast service - Same day appointments available</li>
          <li>Experienced certified pest control technicians</li>
          <li>Child and pet-safe eco-friendly treatments</li>
          <li>Full 1-year warranty on all treatments</li>
          <li>No hidden charges - transparent pricing</li>
          <li>500+ satisfied customers in Tambaram</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Rodent Control Tambaram</h3>
          <p className="text-gray-600 mb-4">Professional rat and mouse removal service for homes and offices in Tambaram area.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Rodent Control →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Termite Control Tambaram</h3>
          <p className="text-gray-600 mb-4">Expert termite treatment protecting your home and structures from damage.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Termite Control →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Cockroach Control Tambaram</h3>
          <p className="text-gray-600 mb-4">Complete cockroach elimination for residential and commercial properties.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Cockroach Control →</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Areas Covered in Tambaram</h2>
        <p className="text-gray-700 mb-4">Pest control services throughout Tambaram including:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <span className="bg-white px-4 py-2 rounded">Tambaram Main</span>
          <span className="bg-white px-4 py-2 rounded">West Tambaram</span>
          <span className="bg-white px-4 py-2 rounded">East Tambaram</span>
          <span className="bg-white px-4 py-2 rounded">Pallavaram</span>
          <span className="bg-white px-4 py-2 rounded">Chromepet</span>
          <span className="bg-white px-4 py-2 rounded">Nearby areas</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Book Pest Control in Tambaram</h2>
        <p className="text-gray-700 mb-4">Easy booking process:</p>
        <ol className="list-decimal ml-6 space-y-2 text-gray-700 mb-6">
          <li>Call: <strong>+91-8939-320-492</strong></li>
          <li>Describe your pest problem</li>
          <li>Get instant quote and scheduling</li>
          <li>Free inspection and assessment</li>
          <li>Professional treatment</li>
          <li>1-year warranty</li>
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
        <Link to="/pest-control-porur" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Porur</Link>
        <Link to="/pest-control-velachery" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Velachery</Link>
        <Link to="/pest-control-anna-nagar" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Anna Nagar</Link>
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

export default Tambaram;