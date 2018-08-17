const currencyRepository = require('../services/currency-repository');

const getActualCurrencyPairMarketDetails = async (request, response) => {
  const { pair } = request.params;
  try {
    const pairDetails = await currencyRepository.getPairDetails(pair);
    response.send(pairDetails);
  } catch(error) {
    response.status(500).send(error);
  }
};

const getHistoricalCurrencyPairMarketDetails = (request, response) => {
  const { pair } = request.params;
  try {
    const historicalPairDetails = currencyRepository.getHistoricalPairDetails(pair);
    response.send(historicalPairDetails);
  } catch(error) {
    response.status(500).send(error);
  }
};

module.exports = {
  getActualCurrencyPairMarketDetails,
  getHistoricalCurrencyPairMarketDetails
};
