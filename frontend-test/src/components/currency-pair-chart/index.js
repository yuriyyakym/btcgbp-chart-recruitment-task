import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { colorPrimary } from 'palette';

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
      backgroundColor: 'transparent',
      xAxis: {
        type: 'time',
        min: 'dataMin',
        splitLine: {
            show: false
        },
        axisLine: {
          lineStyle: {
            width: 0.5
          } 
        },
        boundaryGap: [ '20%', '20%' ],
      },
      yAxis: {
        type: 'value',
        min: 'dataMin',
        splitLine: {
          lineStyle: {
            width: 0.5,
            'type': 'dotted',
            color: 'rgba(255, 255, 255, 0.2)'
          }
        },
        axisLine: {
          lineStyle: {
            width: 0.5
          }
        }
      },
      series: [
        {
          type: 'line',
          lineStyle: {
            color: colorPrimary
          },
          symbol: 'none',
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
          echarts={echarts}
          option={option}
          theme="dark" />
        <pre>
          {JSON.stringify(timeseries, 0, 2)}
        </pre>
      </div>
    );
  }
}

export default CurrencyPairChart;
