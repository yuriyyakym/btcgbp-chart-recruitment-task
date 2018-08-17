import { delay } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchCurrencyPairDetails, fetchHistoricalCurrencyPairDetails } from 'api';
import {
  CHANGE_CURRENT_PAIR,
  changeCurrentPair,
  fetchHistoricalPairDetails,
  fetchHistoricalPairDetailsSuccess,
  fetchHistoricalPairDetailsFailure,
  fetchNewPairDetails,
  fetchNewPairDetailsSuccess,
  fetchNewPairDetailsFailure
} from './index';

const REFRESH_DETAILS_TIMEOUT = 30000;
const DEFAULT_PAIR = 'btcgbp';

export default function*() {
  yield takeLatest(CHANGE_CURRENT_PAIR, onChangeCurrentPair);
  yield put(changeCurrentPair(DEFAULT_PAIR));
}

function* onFetchHistoricalData(pair) {
  try {
    yield put(fetchHistoricalPairDetails());
    const historicalPairDetails = yield call(fetchHistoricalCurrencyPairDetails, pair);
    yield put(fetchHistoricalPairDetailsSuccess(historicalPairDetails));
  } catch(error) {
    yield put(fetchHistoricalPairDetailsFailure(error));
  }
}

function* onPeriodicallyFetchActualPairData(pair) {
  while(true) {
    try {
      yield put(fetchNewPairDetails());
      const newPairDetails = yield call(fetchCurrencyPairDetails, pair);
      yield put(fetchNewPairDetailsSuccess(newPairDetails));
    } catch(error) {
      yield put(fetchNewPairDetailsFailure(error));
    }
    yield delay(REFRESH_DETAILS_TIMEOUT);
  }
}

function* onChangeCurrentPair({ payload: pair }) {
  yield* onFetchHistoricalData(pair);
  yield* onPeriodicallyFetchActualPairData(pair);
}
