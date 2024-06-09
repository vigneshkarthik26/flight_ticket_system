const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flight_number: { type: String, required: true },
  airline: { type: String, required: true },
  origin: {
    airport_code: String,
    city: String,
    country: String
  },
  destination: {
    airport_code: String,
    city: String,
    country: String
  },
  departure_time: Date,
  arrival_time: Date,
  duration: Number,
  price: Number,
  seats_available: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Flight', flightSchema);
