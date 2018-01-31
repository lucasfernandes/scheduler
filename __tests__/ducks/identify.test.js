import IdentifyActions, { reducer } from 'store/ducks/identify';

const initialState = {
  phone: '',
  loading: false,
  error: false,
};

const identifiedState = {
  phone: '+5519982654828',
  loading: false,
  error: false,
};

describe('Testing Identify Reducer', () => {
  it('can request identification', () => {
    const state = reducer([], IdentifyActions.identifyRequest(initialState));

    expect(state.loading).toBe(true);
  });

  it.skip('can successfully be identified', () => {
    const state = reducer([], IdentifyActions.identifySuccess(identifiedState));

    expect(state).toEqual(identifiedState);
  });

  it('receives failure when request find erros', () => {
    const state = reducer([], IdentifyActions.identifyError(initialState));

    expect(state.error).toBe(true);
  });
});
