import {post} from 'axios';
import {action, thunk} from 'easy-peasy';
import {AUTH_URL, BASE_URL} from '../configs/api';

const initialState = {
  id: '',
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
    state.error = null;
    state.token = '';
    state.loading = false;
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
    state.id = payload.id;
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

      const response = await post(
        `${BASE_URL}/user-profile/obtain-token/`,
        requestBody,
      );

      const {authorization, id} = response.data;

      actions.onLoginSuccess({
        token: `${authorization}`,
        id,
      });
    } catch (error) {
      console.log(error);
      actions.onLoginFailed(error);
    }
  }),
};

const auth = {...initialState, ...reducers, ...thunks};

export default auth;
