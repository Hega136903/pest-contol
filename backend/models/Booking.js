const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  service: { type: String, enum: ['Rodent Control', 'Termite Control', 'Cockroach Control'], required: true },
  preferredDate: { type: Date, required: true },
  preferredTime: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
