import { atom } from 'recoil';

const jwtTokenState = atom({
  key: 'jwtTokenState',
  default: '',
});

export default jwtTokenState;
