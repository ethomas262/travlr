const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"]
})

router
    .route('/trips')
    .get(tripsController.trips)
    .post(auth, tripsController.tripsAddTrip)

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip);
router
    .route("/login")
    .post(auth, authController.login)
router
    .route('/register')
    .post(auth, authController.register);

module.exports = router;

