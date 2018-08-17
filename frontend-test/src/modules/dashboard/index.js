import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTimeseries } from 'store/currency-pairs/selectors';
import CurrencyPairChart from 'components/currency-pair-chart';
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
    const { timeseries } = this.props;

    return (
      <div className={styles.dashboard}>
        <Section title="BTC/GBP market info">
          <CurrencyPairChart timeseries={timeseries} />
        </Section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timeseries: selectTimeseries(state)
});

export default connect(mapStateToProps)(Dashboard);
