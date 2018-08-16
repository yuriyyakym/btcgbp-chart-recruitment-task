import { combineReducers } from 'redux';
import { reducer as currencyPairsReducer } from './currency-pairs';
import currencyPairsSaga from './currency-pairs/saga';

export const reducer = combineReducers({
  currencyPairs: currencyPairsReducer
});

export function* saga() {
  yield* currencyPairsSaga();
}
