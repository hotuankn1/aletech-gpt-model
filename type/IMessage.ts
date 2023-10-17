export interface IMessage {
  id: number;
  chatId: number;
  senderType: 'user' | 'bot';
  content: string;
  time: Date;
}
