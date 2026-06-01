import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Ambattur = ({ onBookClick }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control in Ambattur Chennai | Rodent, Termite, Cockroach</title>
      <meta name="description" content="Professional pest control in Ambattur, Chennai. Rodent control, termite treatment, cockroach elimination. Quick service guaranteed. Book now!" />
      <meta name="keywords" content="pest control Ambattur, rodent control Ambattur, termite control Ambattur, cockroach control Ambattur" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-ambattur" />
      <meta property="og:title" content="Pest Control in Ambattur Chennai | Rodent, Termite, Cockroach" />
      <meta property="og:description" content="Professional pest control in Ambattur, Chennai. Rodent, termite & cockroach elimination with same-day service." />
      <meta property="og:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-ambattur" />
      <meta name="twitter:title" content="Pest Control in Ambattur Chennai" />
      <meta name="twitter:description" content="Professional pest control services in Ambattur - rodent, termite & cockroach control" />
      <meta name="twitter:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />
    </Helmet>

    <section className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Pest Control in Ambattur, Chennai</h1>
      <p className="text-gray-700 mb-4 text-lg">
        Trusted pest control services in Ambattur. Professional rodent control, termite treatment, and cockroach elimination using safe, eco-friendly methods.
      </p>

      <div className="bg-green-50 border-l-4 border-primary p-6 rounded mb-6">
        <h2 className="text-xl font-bold text-primary mb-3">Why Choose Us for Pest Control in Ambattur?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Same day service available in Ambattur</li>
          <li>Experienced certified technicians</li>
          <li>Child and pet-safe treatments</li>
          <li>1-year warranty</li>
          <li>No hidden charges</li>
          <li>500+ satisfied customers</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Rodent Control Ambattur</h3>
          <p className="text-gray-600 mb-4">Professional rat and mouse removal in Ambattur homes and offices.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Termite Control Ambattur</h3>
          <p className="text-gray-600 mb-4">Expert termite treatment protecting structures and furniture from termites.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Cockroach Control Ambattur</h3>
          <p className="text-gray-600 mb-4">Complete cockroach elimination for residential and commercial properties.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Now →</Link>
        </div>
      </div>

      <Link to="/book" className="block text-center bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition-colors">
        Book Pest Control Service in Ambattur
      </Link>
    </section>

    {/* Internal Links to Other Locations */}
    <section className="mb-8 bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">We Also Serve Nearby Areas</h2>
      <p className="text-gray-700 mb-4">Professional pest control services in Chennai locations:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Link to="/pest-control-porur" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Porur</Link>
        <Link to="/pest-control-velachery" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Velachery</Link>
        <Link to="/pest-control-anna-nagar" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Anna Nagar</Link>
        <Link to="/pest-control-tambaram" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Tambaram</Link>
        <Link to="/pest-control-avadi" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Avadi</Link>
        <Link to="/pest-control-omr" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">OMR</Link>
        <Link to="/pest-control-pallavaram" className="bg-white px-4 py-2 rounded border border-primary hover:bg-green-50 text-primary font-medium">Pallavaram</Link>
      </div>

      {/* Link back to Services */}
      <div className="mt-6 pt-6 border-t border-gray-300">
        <Link to="/services" className="inline-block text-primary font-semibold hover:underline">← Back to All Services</Link>
      </div>
    </section>

  </div>
);

export default Ambattur;