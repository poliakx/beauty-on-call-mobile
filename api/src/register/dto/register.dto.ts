export type UserRole = 'client' | 'master';

export class RegisterDto {
  name!: string;
  phone!: string;
  city!: string;
  district!: string;
  role!: UserRole;
}