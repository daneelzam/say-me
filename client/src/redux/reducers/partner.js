import { PARTHER_ADD } from '../types';

const partnerReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTHER_ADD:
      return { ...state, partnerContact: action.payload };
    default:
      return state;
  }
};

export default partnerReducer;
