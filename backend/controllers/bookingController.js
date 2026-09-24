
const mongoose = require('mongoose');
const Booking = require('../models/Booking');
const { Parser } = require('json2csv');

// ==========================================
// CREATE BOOKING
// POST /api/bookings
// PUBLIC
// ==========================================

exports.createBooking = async (req, res) => {
  try {
    const {
      fullName,
      mobile,
      requestType = 'booking',
      address,
      service,
      preferredDate,
      preferredTime,
    } = req.body;

    // ------------------------------------------
    // Validate required fields
    // ------------------------------------------

    if (!['booking', 'callback'].includes(requestType)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request type.',
      });
    }

    const hasRequiredBookingDetails =
      address && preferredDate && preferredTime;

    if (!fullName || !mobile || !service ||
      (requestType === 'booking' && !hasRequiredBookingDetails)) {
      return res.status(400).json({
        success: false,
        error: requestType === 'callback'
          ? 'Name, mobile, and service are required.'
          : 'All required booking fields must be provided.',
      });
    }

    // ------------------------------------------
    // Basic mobile validation
    // ------------------------------------------

    const cleanMobile = String(mobile).trim();

    if (!/^[0-9+\-\s()]{7,20}$/.test(cleanMobile)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid mobile number.',
      });
    }

    // ------------------------------------------
    // Create booking
    // ------------------------------------------

    const bookingData = {
      fullName: String(fullName).trim(),
      mobile: cleanMobile,
      requestType,
      service: String(service).trim(),
      completed: false,
    };

    if (requestType === 'booking') {
      bookingData.address = String(address).trim();
      bookingData.preferredDate = preferredDate;
      bookingData.preferredTime = String(preferredTime).trim();
    }

    const booking = await Booking.create(bookingData);

    return res.status(201).json({
      success: true,
      message: 'Booking created successfully.',
      booking,
    });
  } catch (error) {
    console.error('Create booking error:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        error: Object.values(error.errors)
          .map((validationError) => validationError.message)
          .join('. '),
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Failed to create booking.',
    });
  }
};

// ==========================================
// GET ALL BOOKINGS
// GET /api/bookings
// PROTECTED ADMIN ROUTE
// ==========================================

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking
      .find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error('Get bookings error:', error);

    return res.status(500).json({
      success: false,
      error: 'Failed to fetch bookings.',
    });
  }
};

// ==========================================
// MARK BOOKING AS COMPLETED
// PUT /api/bookings/:id/complete
// PROTECTED ADMIN ROUTE
// ==========================================

exports.markCompleted = async (req, res) => {
  try {
    const { id } = req.params;

    // ------------------------------------------
    // Validate MongoDB ObjectId
    // ------------------------------------------

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid booking ID.',
      });
    }

    // ------------------------------------------
    // Find booking
    // ------------------------------------------

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found.',
      });
    }

    // ------------------------------------------
    // Already completed
    // ------------------------------------------

    if (booking.completed) {
      return res.status(200).json({
        success: true,
        message: 'Booking is already completed.',
        booking,
      });
    }

    // ------------------------------------------
    // Update booking
    // ------------------------------------------

    booking.completed = true;

    await booking.save();

    return res.status(200).json({
      success: true,
      message: 'Booking marked as completed.',
      booking,
    });
  } catch (error) {
    console.error('Mark completed error:', error);

    return res.status(500).json({
      success: false,
      error: 'Failed to update booking.',
    });
  }
};

// ==========================================
// DELETE BOOKING
// DELETE /api/bookings/:id
// PROTECTED ADMIN ROUTE
// ==========================================

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // ------------------------------------------
    // Validate MongoDB ObjectId
    // ------------------------------------------

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid booking ID.',
      });
    }

    // ------------------------------------------
    // Delete booking
    // ------------------------------------------

    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Booking deleted successfully.',
    });
  } catch (error) {
    console.error('Delete booking error:', error);

    return res.status(500).json({
      success: false,
      error: 'Failed to delete booking.',
    });
  }
};

// ==========================================
// EXPORT BOOKINGS AS CSV
// GET /api/bookings/export
// PROTECTED ADMIN ROUTE
// ==========================================

exports.exportCSV = async (req, res) => {
  try {
    const bookings = await Booking
      .find()
      .sort({ createdAt: -1 })
      .lean();

    const fields = [
      'requestType',
      'fullName',
      'mobile',
      'address',
      'service',
      'preferredDate',
      'preferredTime',
      'completed',
      'createdAt',
    ];

    const parser = new Parser({
      fields,
    });

    const csv = parser.parse(bookings);

    res.setHeader(
      'Content-Type',
      'text/csv; charset=utf-8'
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename="pest-control-bookings.csv"'
    );

    return res.status(200).send(csv);
  } catch (error) {
    console.error('Export CSV error:', error);

    return res.status(500).json({
      success: false,
      error: 'Failed to export bookings.',
    });
  }
};

