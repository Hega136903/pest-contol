
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    // ==========================================
    // Customer Information
    // ==========================================

    requestType: {
      type: String,
      enum: ['booking', 'callback'],
      default: 'booking',
      required: true,
    },

    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [2, 'Full name must be at least 2 characters'],
      maxlength: [100, 'Full name cannot exceed 100 characters'],
    },

    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true,
      minlength: [7, 'Mobile number is too short'],
      maxlength: [20, 'Mobile number is too long'],
    },

    address: {
      type: String,
      required: function () {
        return this.requestType === 'booking';
      },
      trim: true,
      minlength: [5, 'Address must be at least 5 characters'],
      maxlength: [500, 'Address cannot exceed 500 characters'],
    },

    // ==========================================
    // Service Information
    // ==========================================

    service: {
      type: String,
      required: [true, 'Service is required'],
      enum: {
        values: [
          'Rodent Control',
          'Termite Control',
          'Cockroach Control',
        ],
        message: 'Invalid pest control service',
      },
      trim: true,
    },

    // ==========================================
    // Appointment Information
    // ==========================================

    preferredDate: {
      type: Date,
      required: function () {
        return this.requestType === 'booking';
      },
    },

    preferredTime: {
      type: String,
      required: function () {
        return this.requestType === 'booking';
      },
      trim: true,
    },

    // ==========================================
    // Booking Status
    // ==========================================

    completed: {
      type: Boolean,
      default: false,
    },

    // ==========================================
    // Metadata
    // ==========================================

    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model('Booking', BookingSchema);


