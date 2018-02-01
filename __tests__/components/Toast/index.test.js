import React from 'react';

import { shallow } from 'enzyme';

import { View, Text } from 'react-native';
import Toast from 'components/Toast';

import { colors } from 'styles';


describe('Testing Toast Component', () => {
  it('should render a default toastie', () => {
    const wrapper = shallow(<Toast color="error" />);

    expect(wrapper.find(Text).children().first().text()).toEqual('Este é um toast!');
  });
});
