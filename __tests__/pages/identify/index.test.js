import React from 'react';
import { TextInput } from 'react-native';

import { shallow } from 'enzyme';
import Identify from 'pages/identify';


describe('Testing Identify Page', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Identify />);

    // expect(wrapper.find(TextInput)).toHaveLength(1);
    // expect(wrapper.find(Image).prop('source')).toEqual(schedulerImg);
  });
});
