const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Booking = require('../models/Booking');

// Simple hardcoded admin for demo
const ADMIN = { username: 'admin', password: 'pestchennai2025' };
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN.username && password === ADMIN.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

// Auth middleware
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

router.get('/bookings', auth, async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

module.exports = router;
