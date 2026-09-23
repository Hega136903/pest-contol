import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Rodent Control',
    description: 'Safe, eco-friendly rodent removal for kitchens, gardens, and offices.',
    duration: '30-60 mins',
    price: '₹799 onwards',
    image: '/brown-rat-control.webp'
  },
  {
    name: 'Termite Control',
    description: 'Long-lasting termite treatment for wood, furniture, and buildings.',
    duration: '1-2 hours',
    price: '₹1499 onwards',
    image: '/termite-worker-control.webp'
  },
  {
    name: 'Cockroach Control',
    description: 'Odorless, child-safe cockroach control for homes and restaurants.',
    duration: '45-90 mins',
    price: '₹999 onwards',
    image: '/cockroach-control.webp'
  }
];

const serviceFaqs = [
  {
    question: 'How do I choose the right pest control treatment?',
    answer: 'Start with the pest you are seeing, where it appears and whether there is evidence of a nest or repeated activity. Cockroaches often need targeted gel and crack treatment, rodents need entry-point inspection and monitoring, while termites need a property and woodwork assessment. An inspection helps avoid paying for the wrong treatment.'
  },
  {
    question: 'How much does pest control cost in Chennai?',
    answer: 'The price depends on the pest, property size, infestation level, treatment method and number of visits. Our listed starting prices are a guide rather than a promise of a fixed quote. We explain the recommended work before treatment so customers can make an informed decision.'
  },
  {
    question: 'Is pest control safe for children and pets?',
    answer: 'Treatment safety depends on the product, location and application method. Our team explains preparation, temporary access restrictions and ventilation before starting. Keep children, pets and food away from treated areas until the technician confirms that the space is ready to use.'
  },
  {
    question: 'Will one treatment permanently remove pests?',
    answer: 'Some light infestations improve after one visit, but established colonies can require monitoring or follow-up treatment. Long-term control also depends on sealing entry points, removing food and water sources, improving storage and correcting moisture problems.'
  }
];

const Services = () => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control Services | Rodent, Termite, Cockroach | Chennai</title>
      <meta name="description" content="Professional pest control services in Chennai. Rodent control, termite treatment, cockroach elimination. Eco-friendly, safe for children & pets. Book now!" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: serviceFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
          }))
        })}
      </script>
    </Helmet>
    <h1 className="text-2xl font-bold text-primary mb-6">Our Services</h1>
    <section className="mb-8">
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        WildGreen Pest Management provides practical pest control for homes, apartments, offices, restaurants, shops and other properties across Chennai. Our approach begins with identifying the pest, locating the conditions that support it and choosing the least disruptive treatment that fits the property. This helps customers understand what is being done, how to prepare and what prevention steps will reduce repeat activity.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Whether you are dealing with a few cockroaches near a kitchen sink, rats entering through a utility area or termite damage in woodwork, early inspection can reduce the size and cost of the problem. Choose a service below to compare typical duration and starting price, then use the booking page to request an appointment.
      </p>
    </section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <img src={s.image} alt={`${s.name} service in Chennai`} className="h-20 w-20 rounded-full object-cover mb-3" />
          <h2 className="font-semibold text-primary mb-2 text-lg">{s.name}</h2>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">{s.description}</p>
          <div className="text-xs text-gray-500 mb-1">Duration: {s.duration}</div>
          <div className="text-xs text-gray-500 mb-4 font-medium">Price: {s.price}</div>
          <Link to={s.name === 'Rodent Control' ? '/services/rodent-control' : s.name === 'Termite Control' ? '/services/termite-control' : '/services/cockroach-control'} className="text-primary font-semibold text-sm w-full hover:underline">Learn about this service</Link>
          <Link to="/book" className="bg-primary text-white px-6 py-2 rounded hover:bg-green-700 font-medium text-sm w-full">Book Now</Link>
        </div>
      ))}
    </div>
    <section className="mt-10 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-4">What Our Pest Control Process Includes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold text-primary mb-2">1. Problem assessment</h3>
          <p className="text-gray-700 leading-relaxed">We ask where you noticed activity, how often it occurs and whether there are children, pets, food areas or sensitive rooms to consider. Photos and a short description can help us prepare before the visit.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold text-primary mb-2">2. Inspection and plan</h3>
          <p className="text-gray-700 leading-relaxed">The technician checks likely harbourage areas, entry points, moisture and food sources. You receive a clear explanation of the recommended treatment and any follow-up work.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold text-primary mb-2">3. Targeted treatment</h3>
          <p className="text-gray-700 leading-relaxed">Treatment is focused on the pest and the places where it is active. Depending on the situation, this may include baiting, crack and crevice treatment, monitoring, exclusion advice or a termite-focused inspection.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold text-primary mb-2">4. Guidance and follow-up</h3>
          <p className="text-gray-700 leading-relaxed">Before leaving, we explain re-entry, cleaning, storage, moisture control and warning signs to watch for. Follow-up recommendations are based on the pest and the property rather than a one-size-fits-all promise.</p>
        </div>
      </div>
    </section>
    <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-3">Areas We Serve Across Chennai</h2>
      <p className="text-gray-700 leading-relaxed mb-4">Our local service pages explain the common treatment needs and booking options in different parts of the city. Explore the area closest to you:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          ['Porur', '/pest-control-porur'],
          ['Velachery', '/pest-control-velachery'],
          ['Anna Nagar', '/pest-control-anna-nagar'],
          ['Tambaram', '/pest-control-tambaram'],
          ['Avadi', '/pest-control-avadi'],
          ['Ambattur', '/pest-control-ambattur'],
          ['OMR', '/pest-control-omr'],
          ['Chromepet', '/pest-control-chromepet']
        ].map(([label, path]) => <Link key={path} to={path} className="bg-white px-3 py-2 rounded border border-blue-200 text-primary font-medium hover:bg-green-50">{label}</Link>)}
      </div>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-4">Pest Control Questions Chennai Customers Ask</h2>
      <div className="space-y-4">
        {serviceFaqs.map((faq) => (
          <div key={faq.question} className="bg-gray-50 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
    <div className="bg-green-50 border-l-4 border-primary rounded p-6">
      <h2 className="text-2xl font-bold text-primary mb-3">Ready to discuss the problem?</h2>
      <p className="text-gray-700 mb-4">Book a service request online or read our pest control guides before you call. A few details about the pest, location and timing help us recommend the right next step.</p>
      <div className="flex flex-wrap gap-4">
        <Link to="/book" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700">Book a service</Link>
        <Link to="/blog" className="text-primary font-semibold px-2 py-3 hover:underline">Read pest control guides →</Link>
      </div>
    </div>
  </div>
);

export default Services;
