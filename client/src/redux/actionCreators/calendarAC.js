import {
  CHOOSE_DAY,
  CLEAR_LOCAL_STORAGE,
  INNITIAL_USER,
  SET_MONTH,
  PERIOD_START,
  CHANGE_TYPE_DAY,
  OVULATION,
  INIT_CALENDAR
} from '../types';

export const clearLocalStorageAC = () => ({ type: CLEAR_LOCAL_STORAGE });
export const innitialUserAC = () => ({ type: INNITIAL_USER });
export const chooseDayAC = (currentDate) => ({ type: CHOOSE_DAY, payload: currentDate });
export const setMonthAC = (currentMonth) => ({ type: SET_MONTH, payload: currentMonth });
export const periodStartAC = (period) => ({ type: PERIOD_START, payload: period });
export const ovulationAC = () => ({ type: OVULATION });
export const typeOfChosenDayAC = (typeOfDay) => ({ type: CHANGE_TYPE_DAY, payload: typeOfDay });
// eslint-disable-next-line max-len
export const initCalendarAC = (periodDays, ovulationDay) => ({ type: INIT_CALENDAR, payload: { periodDays, ovulationDay } });

export const periodDaysFetchAC = (chooseDay, periodWeek, id) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/main`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ periodStart: [chooseDay, ...periodWeek], id })

  }).then((response) => {
    response.status === 200 ? dispatch(periodStartAC(periodWeek)) : null;
  });
};

export const initCalendarFetchAC = (id) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/main/init/${id}`)
    .then((response) => (response.json()))
    .then((data) => dispatch(initCalendarAC(data.periodStart, data.ovulationDay)));
};
