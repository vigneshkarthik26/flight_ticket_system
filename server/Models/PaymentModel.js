const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  reservation_id: { type: Schema.Types.ObjectId, ref: 'Reservation', required: true },
  amount: Number,
  payment_method: String,
  payment_date: { type: Date, default: Date.now },
  payment_status: String,
  transaction_id: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
