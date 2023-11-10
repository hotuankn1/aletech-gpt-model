import { IIntent } from '../type/IIntent';
import { IPagination } from '../type/IPagination';

export interface IIntentService {
  getList(
    page: number,
    pageSize: number,
    search: string,
  ): Promise<IPagination<IIntent>>;
  createOrUpdate(intent: IIntent): Promise<IIntent>;
  delete(id: number): Promise<void>;
  getById(id: number): Promise<IIntent>;
}
