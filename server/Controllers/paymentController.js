const Payment = require('../Models/PaymentModel');

exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send(payment);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.send(payments);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).send();
    }
    res.send(payment);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!payment) {
      return res.status(404).send();
    }
    res.send(payment);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).send();
    }
    res.send(payment);
  } catch (err) {
    res.status(500).send(err);
  }
};
