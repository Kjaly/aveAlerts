import { createAction } from 'redux-actions';
import { IUserProfile } from "../../../../typings/actions/user";


const userProfileFetch = createAction<IUserProfile,
  IUserProfile>('user/profile->FETCH_TRIGGER', ({id}) => ({
  id,
}));

export const userActions = {
  userProfileFetch
}
