import axios from 'axios';
import API from './api';

class AuthAPI extends API {
  constructor(...args) {
    super([...args]);
  }

  login = (email, password) => this.request('post', '/login', { email, password })

  setAuthInHeader = (token) => (axios.defaults.headers.common.Authorization ? `Bearer ${token}` : null);
}

export default AuthAPI;
