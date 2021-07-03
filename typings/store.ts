import { IUserBranch } from './user';
import { TRouterBranch } from "./route";


export interface IStore<R = TRouterBranch> {
  user: IUserBranch;
  router: R;
}
