import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class RegisterService {
  register(dto: RegisterDto) {
    return {
      success: true,
      message: 'Mock registration successful',
      user: {
        id: 'mock-user-id',
        name: dto.name,
        phone: dto.phone,
        role: dto.role,
      },
    };
  }
}