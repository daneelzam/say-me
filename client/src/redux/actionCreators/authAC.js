import { AUTH_SUCCESSFULLY, LOGOUT, AUTH_ERROR } from '../types';

export const authSuccessfullyAC = (user) => ({ type: AUTH_SUCCESSFULLY, payload: user });
export const logoutAC = () => ({ type: LOGOUT });
export const authErrorAC = (error) => ({ type: AUTH_ERROR, payload: error });
