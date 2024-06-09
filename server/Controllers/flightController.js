const Flight = require('../Models/FlightModel');

exports.createFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).send(flight);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.send(flights);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send();
    }
    res.send(flight);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!flight) {
      return res.status(404).send();
    }
    res.send(flight);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) {
      return res.status(404).send();
    }
    res.send(flight);
  } catch (err) {
    res.status(500).send(err);
  }
};
