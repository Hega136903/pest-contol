import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

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

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const res = await fetch('https://pest-contol.onrender.com/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSuccess('Booking successful! We will contact you soon.');
        setForm(initialState);
      } else {
        const data = await res.json();
        setError(data.error || 'Booking failed.');
      }
    } catch {
      setError('Network error. Please check if the backend server is running.');
    }
  };

  return (
    <div className="px-4 py-8 max-w-lg mx-auto">
      <Helmet>
        <title>Book Pest Control Service | Chennai</title>
        <meta name="description" content="Book rodent, termite, cockroach pest control service in Chennai. Fast, reliable, affordable." />
      </Helmet>
      <h1 className="text-2xl font-bold text-primary mb-6">Book a Service</h1>
      <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Full Name" className="border p-2 rounded" />
        <input name="mobile" value={form.mobile} onChange={handleChange} required placeholder="Mobile Number" className="border p-2 rounded" />
        <input name="address" value={form.address} onChange={handleChange} required placeholder="Address" className="border p-2 rounded" />
        <select name="service" value={form.service} onChange={handleChange} className="border p-2 rounded">
          <option>Rodent Control</option>
          <option>Termite Control</option>
          <option>Cockroach Control</option>
        </select>
        <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} required className="border p-2 rounded" />
        <input type="time" name="preferredTime" value={form.preferredTime} onChange={handleChange} required className="border p-2 rounded" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
        {success && <div className="text-green-600 mt-2">{success}</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default BookService;
