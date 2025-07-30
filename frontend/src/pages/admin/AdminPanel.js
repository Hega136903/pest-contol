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
      
      {/* Desktop Table View */}
      <div className="hidden md:block">
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
                  {!b.completed && <button onClick={() => markCompleted(b._id)} className="bg-green-600 text-white px-2 py-1 rounded text-sm">Mark Completed</button>}
                  <button onClick={() => deleteBooking(b._id)} className="bg-red-600 text-white px-2 py-1 rounded text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {bookings.map(b => (
          <div key={b._id} className={`bg-white rounded-lg shadow p-4 ${b.completed ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'}`}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg text-primary">{b.fullName}</h3>
              <span className={`px-2 py-1 rounded text-xs font-medium ${b.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {b.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Mobile:</span>
                <span className="font-medium">{b.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium">{b.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{new Date(b.preferredDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{b.preferredTime}</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              {!b.completed && (
                <button 
                  onClick={() => markCompleted(b._id)} 
                  className="flex-1 bg-green-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-700"
                >
                  Mark Completed
                </button>
              )}
              <button 
                onClick={() => deleteBooking(b._id)} 
                className="flex-1 bg-red-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
