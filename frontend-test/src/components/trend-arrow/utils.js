import { TREND_TYPE } from 'constants.js';

export const getTrendTypeByChange = (change) => {
  if (!change) {
    return TREND_TYPE.NONE;
  }

  return change > 0
    ? TREND_TYPE.RISING
    : TREND_TYPE.FALLING;
};
