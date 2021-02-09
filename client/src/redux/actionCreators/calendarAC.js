import {
  CHOOSE_DAY, CLEAR_LOCAL_STORAGE, INNITIAL_USER, SET_MONTH, PERIOD_START, CHANGE_TYPE_DAY, OVULATION 
} from '../types';

export const clearLocalStorageAC = () => ({ type: CLEAR_LOCAL_STORAGE });
export const innitialUserAC = () => ({ type: INNITIAL_USER });
export const chooseDayAC = (currentDate) => ({ type: CHOOSE_DAY, payload: currentDate });
export const setMonthAC = (currentMonth) => ({ type: SET_MONTH, payload: currentMonth });
export const periodStartAC = (period) => ({ type: PERIOD_START, payload: period });
export const ovulationAC = () => ({ type: OVULATION });
export const typeOfChosenDayAC = (typeOfDay) => ({ type: CHANGE_TYPE_DAY, payload: typeOfDay });
