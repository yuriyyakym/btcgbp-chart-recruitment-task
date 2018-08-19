import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import createChartConfig from './config';

const CurrencyPairChart = ({ timeseries }) => {
  const config = createChartConfig({ timeseries });
  return (
    <ReactEcharts option={config} theme="dark" />
  );
};

CurrencyPairChart.propTypes = {
  timeseries: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    timestamp: PropTypes.number
  })).isRequired
};

export default CurrencyPairChart;
