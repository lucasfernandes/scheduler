import React from 'react';

import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Platform, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native';
import Button from 'components/Button';

describe('Testing Buttom Component', () => {
  it('render as expected', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });

  it('should render a default text', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find(Text).children().text()).toEqual('Button');
  });

  it('can set a text', () => {
    const wrapper = shallow(<Button text="Entrar" />);

    expect(wrapper.find(Text).children().text()).toEqual('Entrar');
  });

  it('can set an onPress function', () => {
    const press = sinon.spy();
    const wrapper = shallow(<Button onPress={press} />);

    wrapper.find(TouchableOpacity).simulate('press');

    expect(press.calledOnce).toBe(true);
  });
  

  // it('render as expected for android', () => {
  //   const Platform2 = require.requireActual('Platform');
  //   Platform2.OS = 'android';
  //   const wrapper = shallow(<Button />);

  //   expect(wrapper.find(TouchableNativeFeedback)).toHaveLength(1);
  // });
});

