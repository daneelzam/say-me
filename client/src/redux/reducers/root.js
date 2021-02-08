import { combineReducers } from 'redux';
import authReducer from './auth';
import partnerReducer from './partner';
import calendarReducer from './calendar';

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  partner: partnerReducer
});

export default rootReducer;
