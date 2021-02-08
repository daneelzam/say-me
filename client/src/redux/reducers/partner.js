import { PARTNER_ADD, GOAL_ADD, PARTNER_ERR } from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadState = {};

if (windowState && windowState.partner) {
  preloadState = {
    toGetPregnant: windowState.partner.toGetPregnant,
    partnerContact: windowState.partner.partnerContact,
    err: null
  };
} else {
  preloadState = { toGetPregnant: true, partnerContact: '', err: null };
}

const partnerReducer = (state = preloadState, action) => {
  switch (action.type) {
    case PARTNER_ADD:
      return { ...state, partnerContact: action.payload };
    case GOAL_ADD:
      return { ...state, toGetPregnant: action.payload };
    case PARTNER_ERR:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};

export default partnerReducer;
