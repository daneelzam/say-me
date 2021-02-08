import { PERIOD_START, CLEAR_LOCAL_STORAGE, CHOOSE_DAY } from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadState = {};

if (windowState && windowState.calendar) {
  preloadState = {
    periodStart: windowState.calendar.periodStart,
    chooseDay: windowState.calendar.chooseDay
  };
} else {
  preloadState = {
    periodStart: [],
    chooseDay: new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
  };
}

const calendarReducer = (state = preloadState, action) => {
  switch (action.type) {
    case PERIOD_START:
      return { ...state };
    case CLEAR_LOCAL_STORAGE:
      window.localStorage.removeItem('state');
      return {
        ...state,
        periodStart: []
      };

    case CHOOSE_DAY:
      return { ...state, chooseDay: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
