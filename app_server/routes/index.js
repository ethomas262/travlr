const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main.js')






router.get('/', ctrlMain.index);


module.exports = router;
