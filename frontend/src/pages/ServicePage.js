import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import serviceContent from '../data/serviceContent';

const serviceLinks = Object.values(serviceContent);

const ServicePage = ({ type }) => {
  const service = serviceContent[type];

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <Helmet>
        <title>{service.title} | WildGreen Pest Management</title>
        <meta name="description" content={service.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            provider: { '@type': 'PestControl', '@id': 'https://www.wildgreenpest.in/#business', name: 'WildGreen Pest Management' },
            areaServed: { '@type': 'City', name: 'Chennai' },
            description: service.description,
            url: `https://wildgreenpestcontrol.com${service.path}`,
          })}
        </script>
      </Helmet>

      <article>
        <h1 className="text-3xl font-bold text-primary mb-4">{service.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.description}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">What {service.name.toLowerCase()} means</h2>
          <p className="text-gray-700 leading-relaxed">{service.what}</p>
        </section>

        <section className="mb-8 bg-green-50 border-l-4 border-primary rounded p-6">
          <h2 className="text-2xl font-bold text-primary mb-3">Signs of activity</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">{service.signs.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">Where {service.name.toLowerCase()} problems are commonly found</h2>
          <p className="text-gray-700 leading-relaxed">{service.found}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">Our inspection process</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">{service.inspection.map((item) => <li key={item}>{item}</li>)}</ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">Treatment options</h2>
          <p className="text-gray-700 leading-relaxed">{service.treatment}</p>
        </section>

        <section className="mb-8 bg-blue-50 border border-blue-200 rounded p-6">
          <h2 className="text-2xl font-bold text-primary mb-3">Preparation before service</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">{service.preparation.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">After-treatment guidance</h2>
          <p className="text-gray-700 leading-relaxed">{service.aftercare}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Frequently asked questions</h2>
          <div className="space-y-4">{service.faqs.map((faq) => <div key={faq.question} className="border-b pb-4"><h3 className="font-semibold text-gray-900 mb-1">{faq.question}</h3><p className="text-gray-700 leading-relaxed">{faq.answer}</p></div>)}</div>
        </section>

        <section className="mb-8 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-primary mb-3">Service areas in Chennai</h2>
          <p className="text-gray-700 leading-relaxed mb-4">WildGreen Pest Management serves homes and businesses across Chennai, including Porur, Velachery, Anna Nagar, Tambaram, Avadi, Ambattur, OMR, Pallavaram and Chromepet.</p>
          <div className="flex flex-wrap gap-3">{['/pest-control-porur', '/pest-control-velachery', '/pest-control-anna-nagar', '/pest-control-tambaram'].map((path) => <Link key={path} to={path} className="text-primary hover:underline">Explore local coverage</Link>)}</div>
        </section>

        <div className="flex flex-wrap gap-4 mb-8"><Link to="/book" className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-green-700">Book an inspection</Link><Link to="/contact" className="border border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-green-50">Contact us</Link></div>

        <nav aria-label="Other pest control services" className="border-t pt-5"><h2 className="font-bold text-primary mb-2">Explore other services</h2><div className="flex flex-wrap gap-4">{serviceLinks.filter((item) => item.path !== service.path).map((item) => <Link key={item.path} to={item.path} className="text-primary hover:underline">{item.name}</Link>)}</div></nav>
      </article>
    </div>
  );
};

export default ServicePage;
