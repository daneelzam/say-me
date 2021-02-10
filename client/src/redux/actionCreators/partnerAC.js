import { authErrorAC, changeContactAC, changeGoalAC } from './authAC';

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
      : dispatch(authErrorAC('Something goes wrong!'))));
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
      ? dispatch(changeGoalAC(toGetPregnant))
      : dispatch(authErrorAC('Something goes wrong!'))));
};
