import React from 'react';
import { createStore } from 'redux';
import { reducer as rootReducer } from 'store';
import Dashboard from './index';
import BtcGbpSection from './btc-gbp-section';

const store = createStore(rootReducer);

describe('[Module: Dashboard]', () => {
  const component = mount(<Dashboard store={store} />);

  it('should contain BtcGbpSection', () => {
    expect(component.find(BtcGbpSection).length).toBe(1);
  });
});
