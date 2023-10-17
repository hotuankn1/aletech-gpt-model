import { IChat } from '../type/IChat';

export interface IChatService {
  getAll(userId: number): Promise<IChat[]>;
  getById(chatId: number): Promise<IChat>;
}
