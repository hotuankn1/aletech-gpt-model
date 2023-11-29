import { ISynonym } from "./ISynonym";

export interface IWord {
    id: number;
    mainWord: string;
    createdBy: number;
    synonyms: ISynonym[];
    deletedAt: Date;
}