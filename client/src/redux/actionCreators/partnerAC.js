import { PARTNER_ADD, GOAL_ADD, PARTNER_ERR } from '../types';
import { changeContactAC } from './authAC';

export const partnerAC = (email) => ({ type: PARTNER_ADD, payload: email });
export const pregnantAC = (toGetPregnant) => ({ type: GOAL_ADD, payload: toGetPregnant });
export const errorAC = (err) => ({ type: PARTNER_ERR, payload: err });

// thunk AC

export const partnerFetchAC = (partnerEmail, id) => (dispatch) => {
  fetch(`http://localhost:4000/api/main/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: partnerEmail })
  })
    .then((response) => (response.status === 200
      ? dispatch(changeContactAC(partnerEmail))
      : dispatch(errorAC('Something goes wrong!'))));
};

export const getPregnantFetchAC = (toGetPregnant, id) => (dispatch) => {
  fetch(`http://localhost:4000/api/main/goal/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ toGetPregnant })
  })
    .then((response) => (response.status === 200
      ? dispatch(pregnantAC(toGetPregnant))
      : dispatch(errorAC('Something goes wrong!'))));
};
