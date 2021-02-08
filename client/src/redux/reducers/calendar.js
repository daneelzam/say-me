import { PERIOD_START, CLEAR_LOCAL_STORAGE } from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadState = {};

if (windowState && windowState.calendar) {
  preloadState = { periodStart: windowState.calendar.periodStart };
} else {
  preloadState = { periodStart: [] };
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
    default:
      return state;
  }
};

export default calendarReducer;
