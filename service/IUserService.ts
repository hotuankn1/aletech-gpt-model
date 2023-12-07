import { IUser } from '../type/IUser';

export interface IUserService {
  login(email: string): Promise<{ jwt: string }>;
  getMe(userId: number): Promise<IUser>;
}
