import React from 'react';

import { shallow } from 'enzyme';

import { TextInput } from 'react-native';
import CustomTextInput from 'components/CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'styles';


describe('Testing Custom Text Input Component', () => {
  it('should render a default icon', () => {
    const wrapper = shallow(<CustomTextInput />);

    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('phone');
  });

  it('can set a icon name', () => {
    const wrapper = shallow(<CustomTextInput iconName="search" />);

    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('search');
  });

  it('should have a default placehoder text', () => {
    const wrapper = shallow(<CustomTextInput />);

    expect(wrapper.find(TextInput).prop('placeholder')).toEqual('Digite um texto');
  });

  it('can set placeholder text', () => {
    const wrapper = shallow(<CustomTextInput placeholder="Seu número de telefone" />);

    expect(wrapper.find(TextInput).prop('placeholder')).toEqual('Seu número de telefone');
  });

  it('should have a default placeholderTextColor', () => {
    const wrapper = shallow(<CustomTextInput />);

    expect(wrapper.find(TextInput).prop('placeholderTextColor')).toEqual(colors.whiteOpacity);
  });

  it('can set placeholder text', () => {
    const wrapper = shallow(<CustomTextInput placeholderTextColor="#FFF" />);

    expect(wrapper.find(TextInput).prop('placeholderTextColor')).toEqual(colors.white);
  });
});
