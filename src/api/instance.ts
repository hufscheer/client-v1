import axios from 'axios';

const BASE_URL =
  window.location.pathname === '/admin'
    ? process.env.NEXT_PUBLIC_BACK_OFFICE_BASE_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;

// 토큰? 세션?
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5MzIxOTQyLCJpYXQiOjE2OTY3Mjk5NDIsImp0aSI6IjMxZDljYmI3MmM2ZTRiYjdhMGI5N2E3MTY2MDJhZjlkIiwidXNlcl9pZCI6MX0.I2YYjSt844HIZ9aG4MCwM1ucUy5-vTMrKnZWVsZn1-M';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export default instance;
