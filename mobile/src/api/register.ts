import axios from 'axios';
import { apiClient } from './client';
import type { RegisterPayload } from '../types/register';
import { logger } from '../utils/logger';

function maskPhone(phone: string): string {
  return phone.slice(0, 4) + '****' + phone.slice(-2);
}

export async function registerUser(data: RegisterPayload): Promise<void> {
  try {
    await apiClient.post('/register', data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logger.error('Помилка запиту реєстрації', {
        status: error.response?.status,
        phone: maskPhone(data.phone),
      });

      if (!error.response) {
        throw new Error('Перевірте підключення до інтернету та спробуйте ще раз.');
      }

      throw new Error('Не вдалося відправити запит на реєстрацію.');
    }

    logger.error('Невідома помилка реєстрації', error);
    throw new Error('Не вдалося зареєструватися. Спробуйте ще раз.');
  }
}
