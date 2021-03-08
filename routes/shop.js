const path = require('path');

const express = require('express');

const shopController = require('../controllers/services');
const router = express.Router();

router.get('/', shopController.getServices);

router.get('/getRates/:serviceId', shopController.getRates);


module.exports = router;