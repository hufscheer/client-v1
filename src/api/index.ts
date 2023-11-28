import axios from 'axios';

import LocalStorage from '@/utils/LocalStorage';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const adminInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_OFFICE_BASE_URL,
  headers: {
    Authorization: `Bearer `,
    'Content-Type': 'application/json',
  },
});

adminInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${LocalStorage.getItem('token')}`;

  return config;
});

export default instance;
