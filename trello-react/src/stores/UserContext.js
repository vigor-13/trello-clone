import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import AuthAPI from '../api';

const authAPI = new AuthAPI();

class UserStore {
  token = '';

  userInfo = null;

  constructor() {
    makeAutoObservable(this);
  }

  signin = (email, password) => authAPI
    .login(email, password)
    .then((res) => {
      console.log('[LOG]: ', res);
      this.setToken(res.accessToken);
      this.setUserInfo(res.user);
    })

  setToken = (token) => {
    if (!token) return;
    this.token = token;
    localStorage.setItem('token', token);
    authAPI.setAuthInHeader(token);
  }

  setUserInfo = (data) => {
    if (!data) return;
    const userInfo = data;
    console.log(userInfo);
    userInfo.imagePath = `https://avatar.oxro.io/avatar.svg?name=${userInfo.name}&&length=1&bold=true`;
    this.userInfo = userInfo;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  isSignin = () => !!this.token
}

const userContext = new UserStore();
const UserContext = createContext(userContext);

export {
  userContext,
  UserContext,
};
