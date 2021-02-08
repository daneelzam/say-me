import { PARTHER_ADD } from '../types';

const partherAC = (email) => ({ type: PARTHER_ADD, payload: email });

export default partherAC;
