import axios from 'axios';

const BASE_URL = 'http://3.36.83.80:8080/';

// 토큰? 세션?
const token = '_secret';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export default instance;
