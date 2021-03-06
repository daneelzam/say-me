import {
  LOGOUT, AUTH_SUCCESSFULLY, AUTH_ERROR, CHANGE_CONTACT, GOAL_ADD
} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadState = {};

if (windowState && windowState.auth) {
  preloadState = { isAuth: windowState.auth.isAuth, user: windowState.auth.user };
} else {
  preloadState = { isAuth: false, user: { email: '', name: '' } };
}

const authReducer = (state = preloadState, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return { ...state, isAuth: true, user: action.payload };
    case LOGOUT:
      window.localStorage.removeItem('state');
      return {
        ...state, isAuth: false, user: { email: '', name: '' }
      };
    case AUTH_ERROR:
      return { ...state, authError: action.payload };
    case CHANGE_CONTACT:
      return { ...state, user: { ...state.user, partnerContact: action.payload } };
    case GOAL_ADD:
      return { ...state, user: { ...state.user, toGetPregnant: action.payload } };
    default:
      return state;
  }
};

export default authReducer;
