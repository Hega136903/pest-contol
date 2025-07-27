const Booking = require('../models/Booking');
const { Parser } = require('json2csv');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markCompleted = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.exportCSV = async (req, res) => {
  try {
    const bookings = await Booking.find();
    const fields = ['fullName', 'mobile', 'address', 'service', 'preferredDate', 'preferredTime', 'completed', 'createdAt'];
    const parser = new Parser({ fields });
    const csv = parser.parse(bookings);
    res.header('Content-Type', 'text/csv');
    res.attachment('bookings.csv');
    return res.send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
