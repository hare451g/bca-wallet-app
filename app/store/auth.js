import {post} from 'axios';
import {action, thunk} from 'easy-peasy';
import {AUTH_URL} from '../configs/api';

const initialState = {
  accountNumber: '',
  pin: '',
  token: '',
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
    state.accountNumber = payload.accountNumber;
    state.pin = payload.pin;
  }),

  onLoginFailed: action((state, payload) => {
    state.loading = false;
    state.error = payload.error;
    state.token = '';
  }),

  onLoginSuccess: action((state, payload) => {
    state.loading = false;
    state.error = null;
    state.token = payload.token;
  }),
};

const thunks = {
  submitLogin: thunk(async (actions, payload) => {
    try {
      const {pin, accountNumber} = payload;
      const requestBody = {
        pin,
        account_number: accountNumber,
      };

      const response = await post(`${AUTH_URL}/obtain-token/`, requestBody);

      const {type, authorization} = response.data;

      actions.onLoginSuccess({
        token: `${type} ${authorization}`,
      });
    } catch (error) {
      actions.onLoginFailed({error});
    }
  }),
};

const auth = {...initialState, ...reducers, ...thunks};

export default auth;
