const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');


router 
    .route('/trips')
    .get(tripsController.trips)
    .post(tripsController.tripsAddTrip)
    .put(tripsController.tripsUpdateTrip);


module.exports = router;

