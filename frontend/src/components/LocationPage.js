import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import locationContent from '../data/locationContent';
import locationExpansion from '../data/locationExpansion';
import locationDetails from '../data/locationDetails';
import locationRecommendations from '../data/locationRecommendations';

const SERVICE_OPTIONS = [
  ['Rodent control', 'Entry-point inspection, baiting and prevention for rats and mice.'],
  ['Termite treatment', 'Targeted treatment for active termites, woodwork and soil contact points.'],
  ['Cockroach control', 'Kitchen and bathroom treatment with practical hygiene and follow-up advice.'],
];

const LocationPage = ({ area, slug, intro, pests, propertyTypes, coverage, process, preparation, faqs, nearby, onBookClick }) => {
  const localContent = locationContent[area];

  return (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>{`Pest Control in ${area}, Chennai | WildGreen Pest Management`}</title>
      <meta name="description" content={`Local pest control in ${area}, Chennai for ${pests.join(', ').toLowerCase()}. WildGreen Pest Management provides inspections, treatment and prevention for homes and businesses.`} />
    </Helmet>

    <section className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">{`Pest Control in ${area}, Chennai`}</h1>
      <p className="text-gray-700 mb-6 text-lg">{intro}</p>

      <section className="mb-8 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary">{localContent.heading}</h2>
        {localContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {locationExpansion[area].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p>{locationDetails[area]}</p>
        <p>{locationRecommendations[area]}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <section className="bg-green-50 border-l-4 border-primary p-6 rounded">
          <h2 className="text-xl font-bold text-primary mb-3">Common pest problems</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">{pests.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h2 className="text-xl font-bold text-primary mb-3">Property types we serve</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">{propertyTypes.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-4">Services available in {area}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {SERVICE_OPTIONS.map(([title, description]) => (
          <div key={title} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link to="/book" className="text-primary font-semibold hover:underline">Request an inspection</Link>
          </div>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-3">Our treatment process in {area}</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-700">{process.map((item) => <li key={item}>{item}</li>)}</ol>
      </section>

      <section className="mb-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-primary mb-3">Local service coverage</h2>
        <p className="text-gray-700">We arrange appointments across {area} and nearby neighborhoods, including {coverage.join(', ')}.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-3">How to prepare for treatment</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">{preparation.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">{area} pest control FAQs</h2>
        <div className="space-y-4">{faqs.map(({ question, answer }) => <div key={question} className="border-b pb-4"><h3 className="font-semibold text-gray-900">{question}</h3><p className="text-gray-700 mt-1">{answer}</p></div>)}</div>
      </section>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link to="/book" onClick={onBookClick} className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition-colors">Book pest control in {area}</Link>
        <Link to="/contact" className="border border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-green-50 transition-colors">Contact WildGreen</Link>
      </div>

      <nav aria-label="Nearby service areas" className="border-t pt-5">
        <h2 className="font-bold text-primary mb-2">Explore nearby service areas</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2">{nearby.map(({ name, path }) => <Link key={path} to={path} className="text-primary hover:underline">Pest control in {name}</Link>)}</div>
      </nav>
    </section>
  </div>
  );
};

export default LocationPage;
