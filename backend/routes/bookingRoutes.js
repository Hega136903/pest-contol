
const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookingController');

// ==========================================
// ADMIN AUTHENTICATION MIDDLEWARE
// ==========================================

const { auth } = require('./adminRoutes');

// ==========================================
// PUBLIC ROUTES
// ==========================================

// Customers can create a booking
// POST /api/bookings
router.post('/', bookingController.createBooking);

// ==========================================
// PROTECTED ADMIN ROUTES
// ==========================================

// Get all bookings
// GET /api/bookings
router.get(
  '/',
  auth,
  bookingController.getBookings
);

// Mark booking as completed
// PUT /api/bookings/:id/complete
router.put(
  '/:id/complete',
  auth,
  bookingController.markCompleted
);

// Delete booking
// DELETE /api/bookings/:id
router.delete(
  '/:id',
  auth,
  bookingController.deleteBooking
);

// Export bookings as CSV
// GET /api/bookings/export
router.get(
  '/export',
  auth,
  bookingController.exportCSV
);

module.exports = router;
