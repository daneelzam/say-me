import {
  CHOOSE_DAY, CLEAR_LOCAL_STORAGE, INNITIAL_USER, SET_MONTH
} from '../types';

export const clearLocalStorageAC = () => ({ type: CLEAR_LOCAL_STORAGE });
export const innitialUserAC = () => ({ type: INNITIAL_USER });
export const chooseDayAC = (currentDate) => ({ type: CHOOSE_DAY, payload: currentDate });
export const setMonthAC = (currentMonth) => ({ type: SET_MONTH, payload: currentMonth });
