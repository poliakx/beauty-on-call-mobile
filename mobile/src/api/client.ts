import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://192.168.34.4:3000',
  timeout: 10000,
});