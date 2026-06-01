import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AnnaNagar = ({ onBookClick }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control in Anna Nagar Chennai | Rodent, Termite, Cockroach</title>
      <meta name="description" content="Professional pest control in Anna Nagar, Chennai. Rodent control, termite treatment, cockroach elimination. Same day service available. Book now!" />
      <meta name="keywords" content="pest control Anna Nagar, rodent control Anna Nagar, termite control Anna Nagar, cockroach control Anna Nagar" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-anna-nagar" />
      <meta property="og:title" content="Pest Control in Anna Nagar Chennai | Rodent, Termite, Cockroach" />
      <meta property="og:description" content="Professional pest control in Anna Nagar, Chennai. Rodent, termite & cockroach elimination with same-day service." />
      <meta property="og:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-anna-nagar" />
      <meta name="twitter:title" content="Pest Control in Anna Nagar Chennai" />
      <meta name="twitter:description" content="Professional pest control services in Anna Nagar - rodent, termite & cockroach control" />
      <meta name="twitter:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />
    </Helmet>

    <section className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Pest Control in Anna Nagar, Chennai</h1>
      <p className="text-gray-700 mb-4 text-lg">
        Professional pest control services for Anna Nagar residents. Expert rodent control, termite treatment, and cockroach elimination using safe, eco-friendly methods.
      </p>

      <div className="bg-green-50 border-l-4 border-primary p-6 rounded mb-6">
        <h2 className="text-xl font-bold text-primary mb-3">Why Choose Us for Pest Control in Anna Nagar?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Quick response - Same day service available</li>
          <li>Expert certified technicians</li>
          <li>Safe for children and pets</li>
          <li>1-year service warranty</li>
          <li>Affordable transparent pricing</li>
          <li>Trusted by 500+ families in Anna Nagar</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Rodent Control Anna Nagar</h3>
          <p className="text-gray-600 mb-4">Effective rodent elimination for homes and offices. Complete rat and mouse control solution.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Termite Control Anna Nagar</h3>
          <p className="text-gray-600 mb-4">Professional termite treatment protecting your structures and furniture from damage.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Cockroach Control Anna Nagar</h3>
          <p className="text-gray-600 mb-4">Safe cockroach elimination service for residential and commercial spaces.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Service Coverage in Anna Nagar</h2>
        <p className="text-gray-700 mb-4">We serve all areas of Anna Nagar:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <span className="bg-white px-4 py-2 rounded">First Avenue</span>
          <span className="bg-white px-4 py-2 rounded">Second Avenue</span>
          <span className="bg-white px-4 py-2 rounded">Third Avenue</span>
          <span className="bg-white px-4 py-2 rounded">Fourth Avenue</span>
          <span className="bg-white px-4 py-2 rounded">Rangarajapuram</span>
          <span className="bg-white px-4 py-2 rounded">All sub-areas</span>
        </div>
      </div>

      <Link to="/book" className="block text-center bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition-colors">
        Book Pest Control Service in Anna Nagar
      </Link>
    </section>

    {/* Internal Links to Other Locations */}
    <section className="mb-8 bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">We Also Serve Nearby Areas</h2>
      <p className="text-gray-700 mb-4">Professional pest control services in Chennai locations:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Link to="/pest-control-porur" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Porur</Link>
        <Link to="/pest-control-velachery" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Velachery</Link>
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

export default AnnaNagar;