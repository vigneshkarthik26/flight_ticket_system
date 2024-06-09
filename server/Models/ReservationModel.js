const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  flight_id: { type: Schema.Types.ObjectId, ref: 'Flight', required: true },
  reservation_date: { type: Date, default: Date.now },
  status: String,
  payment_status: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', reservationSchema);
