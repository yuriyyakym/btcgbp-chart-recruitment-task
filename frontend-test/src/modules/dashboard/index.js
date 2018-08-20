import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectTimeseries,
  selectTrendChangePercentage
} from 'store/currency-pairs/selectors';
import BtcGbpSection from './btc-gbp-section';
import styles from './styles.scss';

const Dashboard = ({ timeseries, trendChangePercentage }) => (
  <div className={styles.dashboard}>
    <BtcGbpSection
      timeseries={timeseries}
      trendChangePercentage={trendChangePercentage} />
  </div>
);

Dashboard.propTypes = {
  timeseries: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    timestamp: PropTypes.number
  })),
  trendChangePercentage: PropTypes.number
};

const mapStateToProps = (state) => ({
  timeseries: selectTimeseries(state),
  trendChangePercentage: selectTrendChangePercentage(state)
});

export default connect(mapStateToProps)(Dashboard);
