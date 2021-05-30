import { RootStateType } from '../../store';
import { IUserState } from './contracts/state';

export const selectUserState = (state: RootStateType): IUserState => state.user;
export const selectUserData = (state: RootStateType): IUserState['data'] => {
  return selectUserState(state).data;
};
export const selectUserStatus = (state: RootStateType): IUserState['status'] => {
  return selectUserState(state).status;
};