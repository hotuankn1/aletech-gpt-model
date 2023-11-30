import { User } from 'src/user/user.entity';
import { IMessage } from '../type/IMessage';

export interface IMessageService {
  response(content: string, chatId: number, user: User): Promise<IMessage>;
  get1000LatestMessages(chatId: number): Promise<IMessage[]>;
}
