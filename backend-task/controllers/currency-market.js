const currencyRepository = require('../services/currency-repository');

const getCurrencyPairMarketDetails = async (request, response) => {
  const { pair } = request.params;
  try {
    const pairDetails = await currencyRepository.getPairDetails(pair);
    response.send(pairDetails);
  } catch(error) {
    response.status(500).send(error);
  }
};

module.exports = {
  getCurrencyPairMarketDetails
};
