export type UserRole = 'client' | 'master';

export class RegisterDto {
  name!: string;
  phone!: string;
  role!: UserRole;
}