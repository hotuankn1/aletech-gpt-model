import { IChat } from '../type/IChat';

export interface IChatService {
  createChat(userId: number): Promise<IChat>
  getAll(userId: number): Promise<IChat[]>;
  getById(chatId: number): Promise<IChat>;
}
