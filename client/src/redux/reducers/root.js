import { combineReducers } from 'redux';
import authReducer from './authReducer';
import accountReducer from './accountReducer';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  account: accountReducer
});

export default rootReducer;
