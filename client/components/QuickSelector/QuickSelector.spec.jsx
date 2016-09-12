/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import QuickSelector from './QuickSelector';

describe('Spec of <QuickSelector />', () => {
  it('should have a default value');

  it('should display selected value');

  it('should render children', () => {
    const children = <div>QuickSelector Children</div>;
    const wrapper = shallow(<QuickSelector>{children}</QuickSelector>);

    assert.ok(wrapper.contains(children), 'should contain children');
  });

  it('should dectect current OS type');

  describe('hover state', () => {
    it('should expand the options on hovering', () => {
      const wrapper = shallow(
        <QuickSelector value={1}>
          <div value={1} text="Windows" />
          <div value={2} text="OSX / macOS" />
          <div value={3} text="Linux" />
        </QuickSelector>
      );

      wrapper.simulate('mouseEnter');
      assert.strictEqual(wrapper.state().hovered, true, 'should respond to mouseEnter event');
      
    })
  });
});

