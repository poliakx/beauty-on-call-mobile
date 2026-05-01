import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { RegisterService } from './register.service';
import { logger } from '../utils/logger';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  register(@Body() dto: RegisterDto) {
    logger.log('[RegisterController] Запит на реєстрацію отримано', {
      city: dto.city,
      district: dto.district,
      role: dto.role,
    });

    const result = this.registerService.register(dto);

    logger.log('[RegisterController] Реєстрація успішна', {
      id: result.user.id,
      role: result.user.role,
    });

    return result;
  }
}