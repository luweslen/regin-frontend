import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

export default axios;
