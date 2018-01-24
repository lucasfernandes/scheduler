import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import IdentifyActions from 'store/ducks/identify';

import { TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';

import Identify from 'pages/identify';
import CustomTextInput from 'components/CustomTextInput';
import Button from 'components/Button';

const initialState = {
  identify: {
    user: null,
    loading: false,
    error: false,
  },
};

const loadingState = {
  identify: {
    user: null,
    loading: true,
    error: false,
  },
};

const mockStore = configureStore([]);

describe('Testing Identify Page', () => {
  let store = mockStore(initialState);


  function createWrapper(state = initialState) {
    store = mockStore(state);
    return shallow(
      <Identify />,
      { context: { store } },
    );
  }

  it('can see loading when user requests phone number auth', () => {
    const wrapper = createWrapper(loadingState);
    const button = wrapper.dive().find(Button);

    button.dive().find(TouchableOpacity).simulate('press');

    expect(button.dive().find(ActivityIndicator)).toHaveLength(1);
  });

  it('can set a phone number', () => {
    const wrapper = createWrapper(initialState);
    const button = wrapper.dive().find(Button);
    const phone = '+55999999999';

    wrapper.dive().find(CustomTextInput).dive().find(TextInput)
      .simulate('changeText', phone);

    button.simulate('press');

    const action = store.getActions([0])[0].type;

    expect(action).toEqual(IdentifyActions.identifyRequest().type);
  });
});
