import { PARTNER_ADD, GOAL_ADD } from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));

let preloadState = {};

if (windowState && windowState.partner) {
  preloadState = {
    toGetPregnant: windowState.partner.toGetPregnant,
    partnerContact: windowState.partner.partnerContact
  };
} else {
  preloadState = { toGetPregnant: true, partnerContact: '' };
}

const partnerReducer = (state = preloadState, action) => {
  switch (action.type) {
    case PARTNER_ADD:
      return { ...state, partnerContact: action.payload };
    case GOAL_ADD:
      return { ...state, toGetPregnant: action.payload };
    default:
      return state;
  }
};

export default partnerReducer;
