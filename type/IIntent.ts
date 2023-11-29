import { IAnswer } from "./IAnswer";
import { IQuestion } from "./IQuestion";

export interface IIntent {
    id: number;
    createdBy: number;
    questions?: IQuestion[];
    answers?: IAnswer[];
    deletedAt: Date;
}