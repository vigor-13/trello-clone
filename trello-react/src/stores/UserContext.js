import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import AuthAPI from '../api';

const authAPI = new AuthAPI();

class UserStore {
  token = ''

  constructor() {
    makeAutoObservable(this);
  }

  signin = (email, password) => authAPI
    .login(email, password)
    .then((res) => {
      this.setToken(res.accessToken);
    })

  setToken = (token) => {
    if (!token) return;
    this.token = token;
    localStorage.setItem('token', token);
    authAPI.setAuthInHeader(token);
  }

  isSignin = () => !!this.token
}

const userContext = new UserStore();
const UserContext = createContext(userContext);

export {
  userContext,
  UserContext,
};
