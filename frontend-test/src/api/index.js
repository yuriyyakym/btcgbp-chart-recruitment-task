import TimeseriesDataPoint from 'models/timeseries-data-point';

const API_ORIGIN = process.env.REACT_APP_API_ORIGIN;

export const fetchCurrencyPairDetails = (pair) => fetch(`${API_ORIGIN}/pair/${pair}`)
  .then((response) => response.json())
  .then(TimeseriesDataPoint.fromServerFormat);
