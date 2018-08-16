import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyPairChart extends Component {
  static propTypes = {
    timeseries: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      timestamp: PropTypes.number
    }))
  };

  render() {
    const { timeseries } = this.props;

    return (
      <pre>
        {JSON.stringify(timeseries, 0, 2)}
      </pre>
    );
  }
}

export default CurrencyPairChart;
