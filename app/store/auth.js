import {action} from 'easy-peasy';

const initialState = {
  username: '',
  pin: '',
  authorization: '',
  loading: false,
  error: null,
};

const reducers = {
  setLoading: action((state, payload) => {
    state.loading = payload.loading;
  }),

  resetState: action((state, payload) => {
    state = initialState;
  }),

  onSubmitLogin: action((state, payload) => {
    state.loading = true;
    state.username = payload.username;
    state.pin = payload.pin;
  }),

  onLoginFailed: action((state, payload) => {
    state.loading = false;
    state.error = payload.error;
    state.authorization = '';
  }),

  onLoginSuccess: action((state, payload) => {
    state.loading = false;
    state.error = null;
    state.authorization = payload.authorization;
  }),
};

const auth = {...initialState, ...reducers};

export default auth;
