const express = require('express');
const fs = require('fs')
const router = express.Router();
const controller = require('../controllers/travel');


const trips = JSON.parse(fs.readFileSync('../data/trips.json','utf8'));
/* GET travel page. */
router.get('/', controller.travel);

module.exports = router;