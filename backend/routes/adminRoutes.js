const express = require('express');
const jwt = require('jsonwebtoken');

const bookingController = require('../controllers/bookingController');

const router = express.Router();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

// ==========================================
// ADMIN LOGIN
// POST /api/admin/login
// ==========================================

router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Username and password are required',
      });
    }

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !JWT_SECRET) {
      return res.status(500).json({
        success: false,
        error: 'Server authentication is not configured',
      });
    }

    if (
      username !== ADMIN_USERNAME ||
      password !== ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
    }

    const token = jwt.sign(
      {
        username: ADMIN_USERNAME,
        role: 'admin',
      },
      JWT_SECRET,
      {
        expiresIn: '1d',
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Admin login error:', error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// ==========================================
// AUTHENTICATION MIDDLEWARE
// ==========================================

function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required',
      });
    }

    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        error: 'Invalid authorization format',
      });
    }

    const token = authHeader.substring(7).trim();

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Authentication token missing',
      });
    }

    if (!JWT_SECRET) {
      return res.status(500).json({
        success: false,
        error: 'Server authentication is not configured',
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded || decoded.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Admin access required',
      });
    }

    req.admin = decoded;

    next();
  } catch (error) {
    console.error('Authentication error:', error.message);

    return res.status(401).json({
      success: false,
      error: 'Invalid or expired token',
    });
  }
}

// ==========================================
// GET ALL BOOKINGS
// GET /api/admin/bookings
// ==========================================

router.get(
  '/bookings',
  auth,
  bookingController.getBookings
);

// ==========================================
// VERIFY ADMIN TOKEN
// GET /api/admin/me
// ==========================================

router.get('/me', auth, (req, res) => {
  return res.status(200).json({
    success: true,
    admin: {
      username: req.admin.username,
      role: req.admin.role,
    },
  });
});

module.exports = router;
module.exports.auth = auth;