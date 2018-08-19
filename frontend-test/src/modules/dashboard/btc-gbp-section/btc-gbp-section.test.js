import React from 'react';
import TrendArrow from 'components/trend-arrow';
import CurrencyPairChart from 'components/currency-pair-chart';
import BtcGbpSection from './index';

describe('[Module: Dashboard > BtcGbpSection]', () => {
  const component = mount(<BtcGbpSection timeseries={[]} trendChangePercentage={0.1} />);

  it('should have a TrendArrow in the title', () => {
    expect(component.find(TrendArrow).length).toBe(1);
  });

  it('should have a CurrencyPairChart in section body', () => {
    expect(component.find(CurrencyPairChart).length).toBe(1);
  });
});
