const request = require('request-promise');

const INITIAL_PAIRS = [ 'btcgbp' ];
const HISTORICAL_DATA_CACHE_SIZE = 10000;
const REFRESH_DETAILS_TIMEOUT = 30000;
const CURRENCY_PAIR_DETAILS_ENDPOINT = 'https://api.bitfinex.com/v1/pubticker';

class CurrencyRepository {
  constructor(pairs = []) {
    this.pairs = pairs;
    this.historicalData = pairs.reduce((result, pair) => ({
      ...result,
      [pair]: []
    }), []);
    this.fetchPairDetails = this.fetchPairDetails.bind(this);
    this.fetchPairsDetails = this.fetchPairsDetails.bind(this);
    this.getActualPairValue = this.getActualPairValue.bind(this);
    this.getHistoricalPairDetails = this.getHistoricalPairDetails.bind(this);

    this.fetchPairsDetails();
    setInterval(this.fetchPairsDetails, REFRESH_DETAILS_TIMEOUT);
  }

  getActualPairValue(pair) {
    if (!this.historicalData[pair]) {
      return;
    }

    const historicalPairData = this.historicalData[pair];
    return historicalPairData[historicalPairData.length - 1];
  }

  fetchPairsDetails() {
    this.pairs.forEach(this.fetchPairDetails);
  }

  async fetchPairDetails(pair) {
    try {
      const actualDetails = await request({
        url: `${CURRENCY_PAIR_DETAILS_ENDPOINT}/${pair}`,
        json: true
      });

      if (this.historicalData[pair].length > HISTORICAL_DATA_CACHE_SIZE) {
        this.historicalData[pair].shift();
      }
      this.historicalData[pair].push(actualDetails);

      if (process.env.NODE_ENV !== 'production') {
        console.log(`>\t[Currency Pair Details] new details fetched for ${pair} pair`);
      }

      return actualDetails;
    } catch(error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`>\t[Currency Pair Details] failed to fetch new details for ${pair} pair.\n\tReason: ${error}`);
      }
    }
  }

  async getPairDetails(pair) {
    const details = this.getActualPairValue(pair);
    if (details) {
      return details;
    }
    this.pairs.push(pair);
    this.historicalData[pair] = [];
    return this.fetchPairDetails(pair);
  }

  getHistoricalPairDetails(pair) {
    return this.historicalData[pair]
      ? this.historicalData[pair].slice(0, -1)
      : [];
  }
}

module.exports = new CurrencyRepository(INITIAL_PAIRS);
