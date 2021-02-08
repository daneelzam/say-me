import { PARTHER_ADD } from '../types';

export const partherAC = (email) => ({ type: PARTHER_ADD, payload: email });
