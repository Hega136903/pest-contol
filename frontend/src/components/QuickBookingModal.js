import React, { useState } from 'react';

const QuickBookingModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ fullName: '', mobile: '', service: 'Cockroach Control' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const today = new Date().toISOString().split('T')[0];
      const response = await fetch('https://pest-contol.onrender.com/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          mobile: form.mobile,
          service: form.service,
          address: 'Quick Booking',
          preferredDate: today,
          preferredTime: '09:00 AM'
        })
      });

      if (response.ok) {
        setSuccess('Booking received! We will call you within 30 minutes.');
        setForm({ fullName: '', mobile: '', service: 'Cockroach Control' });
        setTimeout(() => {
          onClose();
          setSuccess('');
        }, 2000);
      } else {
        setError('Failed to book. Please try calling directly.');
      }
    } catch (err) {
      setError('Connection error. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-11/12 bg-white rounded-lg shadow-2xl p-6 sm:p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold">x</button>
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">Free Inspection Booking</h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-6">Get a response in 30 minutes. No hidden charges.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your name" required className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="flex gap-2">
              <span className="flex items-center px-3 py-2 bg-gray-100 rounded border border-gray-300 text-sm font-medium">+91</span>
              <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="9876543210" maxLength="10" required className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Service Type</label>
            <select name="service" value={form.service} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Cockroach Control</option>
              <option>Termite Control</option>
              <option>Rodent Control</option>
              <option>Bed Bugs</option>
            </select>
          </div>
          {success && <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded text-sm">{success}</div>}
          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">{error}</div>}
          <button type="submit" disabled={loading} className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">
            {loading ? 'Booking...' : 'Book Free Inspection'}
          </button>
        </form>
        <p className="text-xs text-gray-500 text-center mt-4">Or call us directly: <a href="tel:+918939320492" className="text-primary font-semibold">+91 8939 320 492</a></p>
      </div>
    </>
  );
};

export default QuickBookingModal;
