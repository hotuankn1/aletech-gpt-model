import { IUser } from '../type/IUser';

export interface IUserService {
  login(email: string): Promise<IUser>;
}
