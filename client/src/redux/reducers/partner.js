import { PARTNER_ADD } from '../types';

const partnerReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTNER_ADD:
      return { ...state, partnerContact: action.payload };
    default:
      return state;
  }
};

export default partnerReducer;
