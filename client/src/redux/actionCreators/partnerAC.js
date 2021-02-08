import { PARTNER_ADD, GOAL_ADD } from '../types';

export const partnerAC = (email) => ({ type: PARTNER_ADD, payload: email });

export const pregnantAC = (toGetPregnant) => ({ type: GOAL_ADD, payload: toGetPregnant });
