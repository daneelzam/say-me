import { PARTNER_ADD } from '../types';

const partnerAC = (email) => ({ type: PARTNER_ADD, payload: email });
export default partnerAC;
