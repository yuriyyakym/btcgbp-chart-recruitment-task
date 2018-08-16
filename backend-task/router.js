const express = require('express');
const { getCurrencyPairMarketDetails } = require('./controllers/currency-market');

const router = express.Router();

router.get('/api/pair/:pair', getCurrencyPairMarketDetails);

module.exports = router;
