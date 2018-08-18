import React from 'react';
import Section from './index';

describe('[Component: Section]', () => {
  it('should render title', () => {
    const component = shallow(<Section title="Custom title">Test</Section>);
    expect(component.html()).toMatch(/Custom title/);
  });

  it('should render children', () => {
    const span = (<span>Test child</span>);
    const component = shallow(<Section title="Custom title">{span}</Section>);
    expect(component.contains(span)).toBe(true);
  });

  it('should apply custom className', () => {
    const component = shallow(<Section className="custom" title="Custom title">Test</Section>);
    expect(component.hasClass('section')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});
