import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => (
  <div className="px-4 py-8 max-w-2xl mx-auto">
    <Helmet>
      <title>About Us | Chennai Pest Control</title>
      <meta name="description" content="About Chennai Pest Control. Trusted pest control experts for ant, termite, cockroach in Chennai." />
    </Helmet>
    <h1 className="text-2xl font-bold text-primary mb-4">About Us</h1>
    <p className="text-gray-700 mb-4">
      Chennai Pest Control is a local startup dedicated to providing safe, effective, and affordable pest control services for homes and businesses in Chennai. Our team specializes in Ant, Termite, and Cockroach control using eco-friendly methods and modern technology. We pride ourselves on fast response, professional service, and customer satisfaction.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Certified pest control experts</li>
      <li>Eco-friendly, child-safe treatments</li>
      <li>Transparent pricing</li>
      <li>100% satisfaction guarantee</li>
    </ul>
  </div>
);

export default About;
