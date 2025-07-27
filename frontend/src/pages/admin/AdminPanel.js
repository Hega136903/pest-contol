import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('adminToken');

  const fetchBookings = async () => {
    try {
      const res = await fetch('https://pest-contol.onrender.com/api/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setBookings(data);
      else setError(data.error || 'Failed to fetch bookings');
    } catch {
      setError('Network error');
    }
  };

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line
  }, []);

  const markCompleted = async id => {
    await fetch(`https://pest-contol.onrender.com/api/bookings/${id}/complete`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchBookings();
  };

  const deleteBooking = async id => {
    await fetch(`https://pest-contol.onrender.com/api/bookings/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchBookings();
  };

  const exportCSV = () => {
    window.open('https://pest-contol.onrender.com/api/bookings/export', '_blank');
  };

  if (!token) return <div className="px-4 py-8">Please login as admin.</div>;

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-6">Admin Panel</h1>
      <button onClick={exportCSV} className="bg-primary text-white px-4 py-2 rounded mb-4">Export to CSV</button>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-secondary">
            <th className="p-2">Name</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">Service</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id} className={b.completed ? 'bg-green-50' : ''}>
              <td className="p-2">{b.fullName}</td>
              <td className="p-2">{b.mobile}</td>
              <td className="p-2">{b.service}</td>
              <td className="p-2">{new Date(b.preferredDate).toLocaleDateString()}</td>
              <td className="p-2">{b.preferredTime}</td>
              <td className="p-2">{b.completed ? 'Completed' : 'Pending'}</td>
              <td className="p-2 space-x-2">
                {!b.completed && <button onClick={() => markCompleted(b._id)} className="bg-green-600 text-white px-2 py-1 rounded">Mark Completed</button>}
                <button onClick={() => deleteBooking(b._id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
