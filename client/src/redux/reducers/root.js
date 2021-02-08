import { combineReducers } from 'redux';
import authReducer from './auth';
import partnerReducer from './partner';

const rootReducer = combineReducers({
  auth: authReducer,
  part: partnerReducer
});

export default rootReducer;
