import { RegisterService } from '../src/register/register.service';

describe('RegisterService', () => {
  it('should throw error for invalid data', () => {
    const service = new RegisterService();

    expect(() =>
      service.register({
        name: '',
        phone: '',
        city: '',
        district: '',
        role: '' as 'client' | 'master',
      }),
    ).toThrow();
  });
});
