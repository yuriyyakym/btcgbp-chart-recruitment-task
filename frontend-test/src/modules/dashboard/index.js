import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectTimeseries,
  selectTrendChangePercentage
} from 'store/currency-pairs/selectors';
import CurrencyPairChart from 'components/currency-pair-chart';
import TrendArrow from 'components/trend-arrow';
import Section from 'components/section';
import styles from './styles.scss';

class Dashboard extends Component {
  static propTypes = {
    timeseries: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      timestamp: PropTypes.number
    }))
  };

  render() {
    const { timeseries, trendChangePercentage } = this.props;

    return (
      <div className={styles.dashboard}>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timeseries: selectTimeseries(state),
  trendChangePercentage: selectTrendChangePercentage(state)
});

export default connect(mapStateToProps)(Dashboard);
