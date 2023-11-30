import { IMessage } from '../type/IMessage';
import { IUser } from '../type/IUser';

export interface IMessageService {
  response(content: string, chatId: number, user: IUser): Promise<IMessage>;
  get1000LatestMessages(chatId: number): Promise<IMessage[]>;
}
