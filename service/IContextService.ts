import { IContext } from '../type/IContext';
import { IPagination } from '../type/IPagination';

export interface IContextService {
  getList(page: number, pageSize: number): Promise<IPagination<IContext>>;
  createOrUpdate(context: IContext): Promise<IContext>;
}
