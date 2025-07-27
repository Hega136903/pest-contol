import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/panel');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
    <div className="px-4 py-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-6">Admin Login</h1>
      <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input value={username} onChange={e => setUsername(e.target.value)} required placeholder="Username" className="border p-2 rounded" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-green-700">Login</button>
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
