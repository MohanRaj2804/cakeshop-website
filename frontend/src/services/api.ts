import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://cakeshop-website-backend.onrender.com';

const api = axios.create({
  baseURL: BASE_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// attach token automatically if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (data: { name: string; email: string; password: string }) => {
  const res = await api.post('/auth/register', data);
  return res.data;
};

export const login = async (data: { email: string; password: string }) => {
  const res = await api.post('/auth/login', data);
  return res.data;
};

export const getProfile = async () => {
  const res = await api.get('/auth/profile');
  return res.data;
};

export const getCakes = async () => {
  const res = await api.get('/cakes');
  return res.data;
};

export const apiClient = { register, login, getProfile, getCakes };

export default apiClient;
