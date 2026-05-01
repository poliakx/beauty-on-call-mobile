import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { logger } from '../utils/logger';

@Injectable()
export class RegisterService {
  register(dto: RegisterDto) {
    logger.log('[RegisterService] Обробка реєстрації', {
      role: dto.role,
      city: dto.city,
    });

    const name = dto.name?.trim();
    const phone = dto.phone?.trim();

    if (!name || !phone || !dto.city || !dto.district || !dto.role) {
      logger.log('[RegisterService] Некоректні дані реєстрації', {
        role: dto.role,
        city: dto.city,
      });

      throw new BadRequestException('Некоректні дані реєстрації');
    }

    const user = {
      id: 'mock-user-id',
      name,
      phone,
      city: dto.city,
      district: dto.district,
      role: dto.role,
    };

    logger.log('[RegisterService] Користувача зареєстровано', {
      id: user.id,
      role: user.role,
    });

    return {
      success: true,
      message: 'Реєстрація успішна',
      user,
    };
  }
}