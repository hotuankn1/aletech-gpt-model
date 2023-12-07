import { IAnswer } from './IAnswer';
import { IContext } from './IContext';
import { IQuestion } from './IQuestion';

export interface IIntent {
  id: number;
  createdBy: number;
  questions?: IQuestion[];
  answers?: IAnswer[];
  deletedAt: Date;
  intentContexts?: IIntentContext[];
}

export interface IIntentContext {
  contextId: number;
  intentId: number;
  context: IContext;
}
