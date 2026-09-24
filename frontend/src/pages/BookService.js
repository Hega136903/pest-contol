import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { trackLead } from '../analytics';

const API_URL = (
  process.env.REACT_APP_API_URL ||
  'http://localhost:5000'
).replace(/\/$/, '');

const initialState = {
  fullName: '',
  mobile: '',
  address: '',
  service: 'Rodent Control',
  preferredDate: '',
  preferredTime: ''
};

const BookService = () => {
  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [serverStarting, setServerStarting] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    setServerStarting(false);
    const startupTimer = setTimeout(() => setServerStarting(true), 2500);
    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        trackLead('booking_form', form.service);
        setSuccess('Booking successful! We will contact you soon.');
        setForm(initialState);
      } else {
        const data = await res.json();
        setError(data.error || 'Booking failed.');
      }
    } catch {
      setError('Network error. Please check if the backend server is running.');
    } finally {
      clearTimeout(startupTimer);
      setServerStarting(false);
    }
  };

  return (
    <div className="px-4 py-8 max-w-lg mx-auto">
      <Helmet>
        <title>Book Pest Control Service | Chennai | Quick & Easy</title>
        <meta name="description" content="Book rodent, termite, cockroach pest control service in Chennai. Same day service available. Quick, reliable, and affordable. Get 25% off!" />
        
      </Helmet>
      <h1 className="text-2xl font-bold text-primary mb-6">Book a Service</h1>
      <div className="mb-4 bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm font-semibold">
        25% OFF | Limited Time Offer
      </div>
      <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="fullName" value={form.fullName} onChange={handleChange} required minLength="2" maxLength="100" placeholder="Full Name" className="border p-2 rounded" />
        <input name="mobile" value={form.mobile} onChange={handleChange} required minLength="7" maxLength="20" placeholder="Mobile Number" className="border p-2 rounded" />
        <input name="address" value={form.address} onChange={handleChange} required minLength="5" maxLength="500" placeholder="Address" className="border p-2 rounded" />
        <select name="service" value={form.service} onChange={handleChange} className="border p-2 rounded">
          <option>Rodent Control</option>
          <option>Termite Control</option>
          <option>Cockroach Control</option>
        </select>
        <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} required className="border p-2 rounded" />
        <input type="time" name="preferredTime" value={form.preferredTime} onChange={handleChange} required className="border p-2 rounded" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
        {serverStarting && <div className="text-blue-700 bg-blue-50 border border-blue-200 rounded px-3 py-2 text-sm" role="status">The server is starting. Your booking is being sent; please keep this page open.</div>}
        {success && <div className="text-green-700 mt-2">{success}</div>}
        {error && <div className="text-red-700 mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default BookService;

