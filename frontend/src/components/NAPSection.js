import React from 'react';
import { Link } from 'react-router-dom';

const serviceAreas = [
  ['Porur', '/pest-control-porur'],
  ['Velachery', '/pest-control-velachery'],
  ['Anna Nagar', '/pest-control-anna-nagar'],
  ['Tambaram', '/pest-control-tambaram'],
  ['Avadi', '/pest-control-avadi'],
  ['Ambattur', '/pest-control-ambattur'],
  ['OMR', '/pest-control-omr'],
  ['Pallavaram', '/pest-control-pallavaram'],
  ['Chromepet', '/pest-control-chromepet'],
];

const NAPSection = ({ compact = false }) => (
  <section className={compact ? 'text-sm text-white' : 'bg-green-50 border border-green-200 rounded-lg p-6'}>
    <h2 className={`font-bold mb-3 ${compact ? 'text-white' : 'text-primary'}`}>Wild Green Pest Management</h2>
    <address className={`not-italic space-y-1 ${compact ? 'text-white' : 'text-gray-700'}`}>
      <div>Chennai, Tamil Nadu</div>
      <div>Phone: <a href="tel:+918939320492" className="text-primary hover:underline">+91 8939320492</a></div>
      <div>Email: <a href="mailto:wildgreenpestcontrol@gmail.com" className="text-primary hover:underline">wildgreenpestcontrol@gmail.com</a></div>
    </address>
    <div className="mt-4">
      <h3 className="font-semibold text-primary mb-2">Serving:</h3>
      <div className={`flex flex-wrap gap-x-3 gap-y-1 ${compact ? 'text-white' : 'text-gray-700'}`}>
        {serviceAreas.map(([name, path]) => <Link key={path} to={path} className="hover:underline">{name}</Link>)}
        <span>and surrounding Chennai areas</span>
      </div>
    </div>
  </section>
);

export default NAPSection;
