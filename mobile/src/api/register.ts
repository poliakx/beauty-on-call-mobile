import { apiClient } from './client';
import type { RegisterPayload } from '../types/register';

export function registerUser(data: RegisterPayload) {
  return apiClient.post('/register', data);
};
