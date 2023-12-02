import { IIntentContext } from "./IIntent";

export interface IContext {
  id: number;
  context: string;
  deletedAt: Date;
  intentContexts?: IIntentContext[];
}

