import { IPagination } from '../type/IPagination';
import { IWord } from '../type/IWord';

export interface IWordService {
  getList(page: number, pageSize: number): Promise<IPagination<IWord>>;
  createOrUpdate(word: IWord): Promise<IWord>;
  delete(id: number): Promise<IWord>;
  getById(id: number): Promise<IWord>;
}
