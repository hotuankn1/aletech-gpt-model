import { IChat } from '../type/IChat';

export interface IChatService {
  createChat(userId: number, name:string): Promise<IChat>
  getAll(userId: number): Promise<IChat[]>;
  getById(chatId: number): Promise<IChat>;
  update(chat: IChat): Promise<IChat>;
  delete(id: number): Promise<IChat>;
}
