import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CurrencyPairChart from 'components/currency-pair-chart';
import TrendArrow from 'components/trend-arrow';
import Section from 'components/section';
import styles from './styles.scss';

const BtcGbpSection = ({ timeseries, trendChangePercentage }) => (
  <Section
    title={(
      <Fragment>
        BTC/GBP market info
        <TrendArrow
          className={styles.trend}
          change={trendChangePercentage} />
      </Fragment>
    )}>
    <CurrencyPairChart timeseries={timeseries} />
  </Section>
);

BtcGbpSection.propTypes = {
  timeseries: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    timestamp: PropTypes.number
  })),
  trendChangePercentage: PropTypes.number
};

export default BtcGbpSection;
