import { delay } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchCurrencyPairDetails } from 'api';
import {
  CHANGE_CURRENT_PAIR,
  changeCurrentPair,
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

function* onChangeCurrentPair({ payload: pair }) {

  while(true) {
    yield put(fetchNewPairDetails());
    try {
      const newPairDetails = yield call(fetchCurrencyPairDetails, pair);
      yield put(fetchNewPairDetailsSuccess(newPairDetails));
    } catch(error) {
      yield put(fetchNewPairDetailsFailure(error));
    }
    yield delay(REFRESH_DETAILS_TIMEOUT);
  }
}
