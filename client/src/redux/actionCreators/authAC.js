import {
  AUTH_SUCCESSFULLY, LOGOUT, AUTH_ERROR, CHANGE_CONTACT
} from '../types';

export const authSuccessfullyAC = (user) => ({ type: AUTH_SUCCESSFULLY, payload: user });
export const logoutAC = () => ({ type: LOGOUT });
export const authErrorAC = (error) => ({ type: AUTH_ERROR, payload: error });
export const changeContactAC = (patrnerContact) => ({ type: CHANGE_CONTACT, payload: patrnerContact });

// THUNK!!
export const loginFetchAC = ({ email, password }) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.user) {
        dispatch(authSuccessfullyAC(result.user));
      } else {
        dispatch(authErrorAC('Wrong email or password!'));
      }
    });
};

export const signUpFetchAc = ({ name, email, password }) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.user) {
        dispatch(authSuccessfullyAC(result.user));
      } else {
        dispatch(authErrorAC('Such user already exists'));
      }
    });
};

export const logoutFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/auth/logout`).then((response) => (response.status === 200 ? dispatch(logoutAC()) : authErrorAC('Server error')));
};
