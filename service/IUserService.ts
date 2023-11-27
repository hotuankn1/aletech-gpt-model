import { IUser } from '../type/IUser';

export interface IUserService {
  login(email: string): Promise<{jwt: string}>;
  getById(userId: number): Promise<IUser>;
}
