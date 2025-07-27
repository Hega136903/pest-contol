const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getBookings);
router.put('/:id/complete', bookingController.markCompleted);
router.delete('/:id', bookingController.deleteBooking);
router.get('/export', bookingController.exportCSV);

module.exports = router;
