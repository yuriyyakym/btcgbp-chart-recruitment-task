const request = require('request-promise');

const REFRESH_DETAILS_TIMEOUT = 30000;
const CURRENCY_PAIR_DETAILS_ENDPOINT = 'https://api.bitfinex.com/v1/pubticker';

class CurrencyRepository {
  constructor(pairs) {
    this.pairs = [];
    this.details = {};
    this.fetchPairDetails = this.fetchPairDetails.bind(this);
    this.fetchPairsDetails = this.fetchPairsDetails.bind(this);

    this.fetchPairsDetails();
    setInterval(this.fetchPairsDetails, REFRESH_DETAILS_TIMEOUT);
  }

  fetchPairsDetails() {
    this.pairs.forEach(this.fetchPairDetails);
  }

  async fetchPairDetails(pair) {
    try {
      this.details[pair] = await request({
        url: `${CURRENCY_PAIR_DETAILS_ENDPOINT}/${pair}`,
        json: true
      });

      if (process.env.NODE_ENV !== 'production') {
        console.log(`>\t[Currency Pair Details] new details fetched for ${pair} pair`);
      }

      return this.details[pair];
    } catch(error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`>\t[Currency Pair Details] failed to fetch new details for ${pair} pair.\n\tReason: ${error}`);
      }
    }
  }

  async getPairDetails(pair) {
    if (this.details[pair]) {
      return this.details[pair];
    }
    this.pairs.push(pair);
    return this.fetchPairDetails(pair);
  }
}

module.exports = new CurrencyRepository();
