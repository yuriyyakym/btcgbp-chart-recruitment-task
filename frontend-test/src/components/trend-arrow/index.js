import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TREND_TYPE } from 'constants.js';
import { getTrendTypeByChange } from './utils';
import styles from './styles.scss';

const TrendArrow = ({ change, className }) => {
  const trendType = getTrendTypeByChange(change);

  return (
    <span className={classNames(styles.trendArrow, className, {
      [styles.rising]: trendType === TREND_TYPE.RISING,
      [styles.falling]: trendType === TREND_TYPE.FALLING
    })}>
      <span className={styles.arrow}>
        {trendType === TREND_TYPE.RISING && '▲'}
        {trendType === TREND_TYPE.FALLING && '▼'}
      </span>

      <span className={styles.change}>
        {trendType === TREND_TYPE.NONE &&  '(no change)'}
        {trendType !== TREND_TYPE.NONE && (
          <Fragment>
            {change > 0 && '+'}
            {change.toFixed(3)}
            %
          </Fragment>
        )}
      </span>
    </span>
  );
};

TrendArrow.propTypes = {
  change: PropTypes.number,
  className: PropTypes.string
};

export default TrendArrow;
