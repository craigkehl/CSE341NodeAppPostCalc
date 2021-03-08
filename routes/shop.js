const path = require('path');

const express = require('express');

const shopController = require('../controllers/services');
const router = express.Router();

router.get('/ship/', shopController.getServices);

router.get('/getRates/:serviceId', shopController.getRates);

router.post('/purchase/', shopController.postPurchase);

module.exports = router;