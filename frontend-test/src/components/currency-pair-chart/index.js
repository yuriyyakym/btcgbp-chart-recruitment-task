import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

echarts.registerTheme('my_theme', {
  backgroundColor: '#f4cccc'
});

class CurrencyPairChart extends Component {
  static propTypes = {
    timeseries: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      timestamp: PropTypes.number
    }))
  };

  render() {
    const { timeseries } = this.props;

    const option = {
      xAxis: {
        type: 'value',
        min: 'dataMin'
      },
      yAxis: {
        type: 'value',
        min: 'dataMin'
      },
      series: [
        {
          type: 'line',
          data: timeseries.map((dataPoint) => [
            dataPoint.timestamp,
            dataPoint.value
          ])
        }
      ]
    };

    return (
      <div>
        <ReactEcharts
          option={option}
          theme={"theme_name"} />
        <pre>
          {JSON.stringify(timeseries, 0, 2)}
        </pre>
      </div>
    );
  }
}

export default CurrencyPairChart;
