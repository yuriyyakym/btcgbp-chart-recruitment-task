import { createSelector } from 'reselect';
import { TREND_TYPE } from 'constants';

const selectRoot = (state) => state.currencyPairs;

export const selectCurrentPair = createSelector(
  selectRoot,
  ({ currentPair }) => currentPair
);

export const selectTimeseries = createSelector(
  selectRoot,
  ({ timeseries }) => timeseries.map((point) => console.log(point) || ({
    value: point.mid,
    timestamp: point.timestamp
  }))
);

const selectLastTimeseriesPoint = createSelector(
  selectTimeseries,
  (timeseries) => timeseries.length === 0
    ? null
    : timeseries[timeseries.length - 1]
);

const selectNextToLastTimeseriesPoint = createSelector(
  selectTimeseries,
  (timeseries) => timeseries.length < 2
    ? null
    : timeseries[timeseries.length - 2]
);

export const selectTrendType = createSelector(
  [ selectLastTimeseriesPoint, selectNextToLastTimeseriesPoint ],
  (lastPoint, nextToLastPoint) => {
    if (!nextToLastPoint) {
      return TREND_TYPE.NONE;
    }

    if (lastPoint.value > nextToLastPoint.value) {
      return TREND_TYPE.RISING;
    }

    return TREND_TYPE.FALLING;
  }
);

export const selectTrendChangePercentage = createSelector(
  [ selectLastTimeseriesPoint, selectNextToLastTimeseriesPoint ],
  (lastPoint, nextToLastPoint) => {
    if (nextToLastPoint === null) {
      return null;
    }

    return ((lastPoint.value - nextToLastPoint.value) / nextToLastPoint.value * 100).toFixed(2);
  }
);
