import { IPagination } from "../type/IPagination";
import { IWord } from "../type/IWord";

export interface IWordService {
    getList (page: number, pageSize: number): Promise<IPagination<IWord>>;
    create(createdBy: number): Promise<IWord>;
    update(word: IWord): Promise<IWord>;
    delete(id: number): Promise<void>;
    getById(id:number): Promise<IWord>;
}