const express = require('express');
const router = express.Router();
const autoController = require('../controllers/autoControllers');

router.get('/', autoController.index);

router.get('/brand/:brand', autoController.marca)

router.get('/color/:color', autoController.color)

module.exports = router