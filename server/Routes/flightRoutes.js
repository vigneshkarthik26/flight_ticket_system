const express = require('express');
const router = express.Router();
const flightController = require('/Users/vigneshkarthik/DBMS/server/Controllers/flightController');

router.post('/', flightController.createFlight);
router.get('/', flightController.getAllFlights);
router.get('/:id', flightController.getFlight);
router.put('/:id', flightController.updateFlight);
router.delete('/:id', flightController.deleteFlight);

module.exports = router;
