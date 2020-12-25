import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import AuthAPI from '../api';

const authAPI = new AuthAPI();

class UserStore {
  token = ''

  constructor() {
    makeAutoObservable(this);
  }

  setToken = (email, password) => {
    authAPI
      .login(email, password)
      .then((res) => {
        this.token = res.accessToken;
      });
  }
}

const userContext = new UserStore();
const UserContext = createContext(userContext);

export {
  userContext,
  UserContext,
};
