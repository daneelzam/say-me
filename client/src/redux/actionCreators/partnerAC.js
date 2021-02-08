import { PARTHER_ADD } from '../types';

const partnerAC = (email) => ({ type: PARTHER_ADD, payload: email });
export default partnerAC;
