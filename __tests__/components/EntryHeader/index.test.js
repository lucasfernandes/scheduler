import React from 'react';

import { shallow } from 'enzyme';
import EntryHeader from 'components/EntryHeader';
import { Image } from 'react-native';

import schedulerImg from 'assets/images/scheduler.png';

describe('Testing Entry Header', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<EntryHeader />);

    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(Image).prop('source')).toEqual(schedulerImg);
  });
});
