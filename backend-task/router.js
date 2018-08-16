const express = require('express');
const { getCurrencyPairMarketDetails } = require('./controllers/currency-market');

const router = express.Router();

router.get('/pair/:pair', getCurrencyPairMarketDetails);

module.exports = router;
