import axios from 'axios';
import history from '../routes/history';

class API {
  constructor() {
    this.DOMAIN = 'http://localhost:3000';
    this.UNAUTHORIZED = 401;
  }

  request = (method, url, data) => (
    axios({
      method,
      url: this.DOMAIN + url,
      data,
    })
      .then((res) => res.data)
      .catch((res) => {
        const { status } = res.response;
        if (status === this.UNAUTHORIZED) this.onUnauthorized();

        return res.data;
      })
  )

  onUnauthorized = () => {
    const currentLocation = window.location.pathname;
    history.push(`/login?rPath=${encodeURIComponent(currentLocation)}`);
  }
}

export default API;
