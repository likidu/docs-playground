/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import QuickSelector from './QuickSelector';

describe('Spec of <QuickSelector />', () => {
  it('should have a default value');

  it('should expand all options on hovering');

  it('should display selected value');

  it('should render children', () => {
    const children = <div>QuickSelector Children</div>;
    const wrapper = shallow(<QuickSelector>{children}</QuickSelector>);

    assert.ok(wrapper.contains(children), 'should contain children');
  });

  it('should dectect current OS type');
});

