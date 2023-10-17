export interface IMessage {
  id: number;
  chatId: number;
  status: 'send' | 'receive';
  content: string;
  time: Date;
}
