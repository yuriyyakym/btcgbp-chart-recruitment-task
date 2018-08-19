import React from 'react';
import CurrencyPairChart from './index';
import createChartConfig from './config';

const timeseries = [
  { timestamp: 1, value: 10 },
  { timestamp: 2, value: 20 },
  { timestamp: 3, value: 30 }
];

describe('[Component: CurrencyPairChart] config', () => {
  it('should map timeseries to echarts format', () => {
    const config = createChartConfig({ timeseries });
    expect(config.baseOption.series[0].data).toEqual([
      [ 1, 10 ],
      [ 2, 20 ],
      [ 3, 30 ]
    ]);
  });
});

describe('[Component: CurrencyPairChart]', () => {
  const component = mount(<CurrencyPairChart timeseries={timeseries} />);

  it('should render echarts instance', () => {
    expect(component.find(CurrencyPairChart).length).toBe(1);
  });
});
