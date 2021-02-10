import {
  PERIOD_START, CLEAR_LOCAL_STORAGE, CHOOSE_DAY, SET_MONTH, CHANGE_TYPE_DAY, OVULATION
} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadState = {};

if (windowState && windowState.calendar) {
  preloadState = {
    periodStart: windowState.calendar.periodStart,
    chooseDay: windowState.calendar.chooseDay,
    year: windowState.calendar.year,
    month: windowState.calendar.month,
    ovulation: windowState.calendar.ovulation,
    typeOfChosenDay: windowState.calendar.typeOfChosenDay
  };
} else {
  preloadState = {
    periodStart: [],
    chooseDay: new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }),
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    ovulation: [],
    typeOfChosenDay: 'clear'
  };
}

const calendarReducer = (state = preloadState, action) => {
  switch (action.type) {
    case PERIOD_START:
      return {
        ...state, periodStart: [...state.periodStart, [state.chooseDay, ...action.payload]]
      };
    case OVULATION:
      return { ...state, ovulation: [...state.ovulation, action.payload] };
    case CLEAR_LOCAL_STORAGE:
      window.localStorage.removeItem('state');
      return {
        ...state,
        periodStart: [],
        chooseDay: ''
      };
    case SET_MONTH:
      return { ...state, month: action.payload };
    case CHOOSE_DAY:
      return { ...state, chooseDay: action.payload };
    case CHANGE_TYPE_DAY:
      return { ...state, typeOfChosenDay: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
