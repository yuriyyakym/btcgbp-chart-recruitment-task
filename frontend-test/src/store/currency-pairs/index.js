import { createAction, handleActions } from 'redux-actions';

const TIMESERIES_CACHE_SIZE = 100;

export const CHANGE_CURRENT_PAIR = 'currency-pairs/change-current-pair';
const FETCH_HISTORICAL_DETAILS = 'currency-pairs/fetch-historical-details';
const FETCH_HISTORICAL_DETAILS_SUCCESS = 'currency-pairs/fetch-historical-details-success';
const FETCH_HISTORICAL_DETAILS_FAILURE = 'currency-pairs/fetch-historical-details-failure';
const FETCH_NEW_DETAILS = 'currency-pairs/fetch-new-details';
const FETCH_NEW_DETAILS_SUCCESS = 'currency-pairs/fetch-new-details-success';
const FETCH_NEW_DETAILS_FAILURE = 'currency-pairs/fetch-new-details-failure';

const initialState = {
  currentPair: 'btcgbp',
  loading: false,
  timeseries: [],
  errors: []
};

export const reducer = handleActions({
  [CHANGE_CURRENT_PAIR]: (state, { payload: pair }) => ({
    ...initialState,
    currentPair: pair
  }),

  [FETCH_NEW_DETAILS]: (state) => ({
    ...state,
    loading: true
  }),

  [FETCH_NEW_DETAILS_SUCCESS]: (state, { payload: timeseriesPoint }) => ({
    ...state,
    loading: false,
    timeseries: [ ...state.timeseries.slice(-TIMESERIES_CACHE_SIZE + 1), timeseriesPoint ]
  }),

  [FETCH_NEW_DETAILS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    loading: false,
    errors: [
      ...state.errors,
      error
    ]
  }),

  [FETCH_HISTORICAL_DETAILS]: (state) => ({
    ...state,
    loading: true
  }),

  [FETCH_HISTORICAL_DETAILS_SUCCESS]: (state, { payload: timeseries }) => ({
    ...state,
    loading: false,
    timeseries: timeseries.slice(-TIMESERIES_CACHE_SIZE)
  }),

  [FETCH_HISTORICAL_DETAILS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    loading: false,
    errors: [
      ...state.errors,
      error
    ]
  })
}, initialState);

export const changeCurrentPair = createAction(CHANGE_CURRENT_PAIR);
export const fetchNewPairDetails = createAction(FETCH_NEW_DETAILS);
export const fetchNewPairDetailsSuccess = createAction(FETCH_NEW_DETAILS_SUCCESS);
export const fetchNewPairDetailsFailure = createAction(FETCH_NEW_DETAILS_FAILURE);
export const fetchHistoricalPairDetails = createAction(FETCH_HISTORICAL_DETAILS);
export const fetchHistoricalPairDetailsSuccess = createAction(FETCH_HISTORICAL_DETAILS_SUCCESS);
export const fetchHistoricalPairDetailsFailure = createAction(FETCH_HISTORICAL_DETAILS_FAILURE);
