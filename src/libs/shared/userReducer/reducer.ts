import { IUserBranch } from "../../../../typings/user";
import { handleActions } from 'redux-actions';
import { userActions } from "./actions";


const initisalState: IUserBranch = {
  id: null,
  name: '',
  email: ''
}
export const userReducer = handleActions<IUserBranch>(
  {
    [userActions.userProfileFetch.toString()]: (state) => state,

  },
  initisalState,
)
