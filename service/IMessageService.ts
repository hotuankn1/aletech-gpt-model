import { IMessage } from '../type/IMessage';

export interface IMessageService {
  response(content: string, chatId: number): Promise<IMessage>;
  get1000LatestMessages(chatId: number): Promise<IMessage[]>;
}
