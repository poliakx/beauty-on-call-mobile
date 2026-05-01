export type RegisterPayload = {
  name: string;
  phone: string;
  city: string;
  district: string;
  role: 'client' | 'master';
};
