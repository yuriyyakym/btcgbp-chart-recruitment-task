import React from 'react';
import App from './index';
import Dashboard from 'modules/dashboard';

describe('[Module: App]', () => {
  it('should contain Dashboard', () => {
    const component = shallow(<App />);
    expect(component.children().some(Dashboard)).toBe(true);
  });
});
