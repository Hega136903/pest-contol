import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Velachery = ({ onBookClick }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control in Velachery Chennai | Rodent, Termite, Cockroach Control</title>
      <meta name="description" content="Professional pest control services in Velachery, Chennai. Expert rodent control, termite treatment, cockroach elimination. Same day service. Book now!" />
      <meta name="keywords" content="pest control Velachery, rodent control Velachery, termite control Velachery, cockroach control Velachery, Chennai" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-velachery" />
      <meta property="og:title" content="Pest Control in Velachery Chennai | Rodent, Termite, Cockroach" />
      <meta property="og:description" content="Professional pest control in Velachery, Chennai. Rodent, termite & cockroach elimination with same-day service." />
      <meta property="og:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://vishwa-pestcontrol.vercel.app/pest-control-velachery" />
      <meta name="twitter:title" content="Pest Control in Velachery Chennai" />
      <meta name="twitter:description" content="Professional pest control services in Velachery - rodent, termite & cockroach control" />
      <meta name="twitter:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />
    </Helmet>

    <section className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Pest Control in Velachery, Chennai</h1>
      <p className="text-gray-700 mb-4 text-lg">
        Professional pest control services serving Velachery and surrounding areas. We specialize in rodent control, termite treatment, and cockroach elimination using eco-friendly methods safe for families and pets.
      </p>

      <div className="bg-green-50 border-l-4 border-primary p-6 rounded mb-6">
        <h2 className="text-xl font-bold text-primary mb-3">Why Choose Us for Pest Control in Velachery?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Same-day or next-day service in Velachery</li>
          <li>Certified pest control technicians</li>
          <li>Eco-friendly, child & pet-safe treatments</li>
          <li>1-year warranty on all services</li>
          <li>Transparent pricing</li>
          <li>500+ satisfied customers in Velachery</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Rodent Control Velachery</h3>
          <p className="text-gray-600 mb-4">Safe and effective rodent removal for homes and offices in Velachery. Expert rat and mouse elimination.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Rodent Control →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Termite Control Velachery</h3>
          <p className="text-gray-600 mb-4">Long-lasting termite treatment for structures and furniture in Velachery. Protect your property now.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Termite Control →</Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-3">Cockroach Control Velachery</h3>
          <p className="text-gray-600 mb-4">Professional cockroach elimination in Velachery. Safe for homes, offices, and restaurants.</p>
          <Link to="/book" className="text-primary font-semibold hover:underline">Book Cockroach Control →</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Service Areas in Velachery</h2>
        <p className="text-gray-700 mb-4">Pest control services throughout Velachery including:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <span className="bg-white px-4 py-2 rounded">Velachery Main Road</span>
          <span className="bg-white px-4 py-2 rounded">Kelambakkam</span>
          <span className="bg-white px-4 py-2 rounded">OMR</span>
          <span className="bg-white px-4 py-2 rounded">Navalur</span>
          <span className="bg-white px-4 py-2 rounded">Perungudi</span>
          <span className="bg-white px-4 py-2 rounded">Nearby areas</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">How to Book Pest Control in Velachery</h2>
        <ol className="list-decimal ml-6 space-y-3 text-gray-700 mb-6">
          <li>Call us at <strong>+91-8939-320-492</strong></li>
          <li>Tell us about your pest issue</li>
          <li>Get instant quote and appointment</li>
          <li>Free inspection by certified technician</li>
          <li>Professional treatment</li>
          <li>1-year warranty included</li>
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

export default Velachery;