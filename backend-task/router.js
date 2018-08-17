const express = require('express');
const {
  getActualCurrencyPairMarketDetails,
  getHistoricalCurrencyPairMarketDetails
} = require('./controllers/currency-market');

const router = express.Router();

router.get('/api/pair/:pair', getActualCurrencyPairMarketDetails);
router.get('/api/pair/historical/:pair', getHistoricalCurrencyPairMarketDetails);

module.exports = router;
