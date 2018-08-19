import React from 'react';
import { TREND_TYPE } from 'constants.js';
import { getTrendTypeByChange } from './utils';
import TrendArrow from './index';

describe('[Component: TrendArrow] utils', () => {
  it('should return propper trendType for no change', () => {
    expect(getTrendTypeByChange(0)).toBe(TREND_TYPE.NONE);
    expect(getTrendTypeByChange(null)).toBe(TREND_TYPE.NONE);
  });

  it('should return propper trendType for negative change', () => {
    expect(getTrendTypeByChange(-0.02)).toBe(TREND_TYPE.FALLING);
  });

  it('should return propper trendType for positive change', () => {
    expect(getTrendTypeByChange(0.02)).toBe(TREND_TYPE.RISING);
  });
});

describe('[Component: TrendArrow]', () => {
  it('should format positive change value', () => {
    const component = shallow(<TrendArrow change={0.2} />);
    const content = component.text();
    expect(component.hasClass('rising')).toBe(true);
    expect(content).toMatch(/▲/);
    expect(content).toMatch(/\+0.200%/);
  });

  it('should format negative change value', () => {
    const component = shallow(<TrendArrow change={-0.2456} />);
    const content = component.text();
    expect(component.hasClass('falling')).toBe(true);
    expect(content).toMatch(/▼/);
    expect(content).toMatch(/\-0.246%/);
  });

  it('should render `no change` and no trend arrow when change is 0', () => {
    const component = shallow(<TrendArrow change={0} />);
    const content = component.text();
    expect(component.children().some('.rising')).toBe(false);
    expect(component.children().some('.falling')).toBe(false);
    expect(content).not.toMatch(/(▲|▼)/);
    expect(content).toMatch(/(no change)/);
  });

  it('should apply custom className', () => {
    const component = shallow(<TrendArrow className="custom" change={-0.2456} />);
    expect(component.hasClass('custom')).toBe(true);
  });
});
