import { RootStateType } from '../../store';
import { IUserState } from './contracts/state';
import { LoadingState } from '../../types';

export const selectUserState = (state: RootStateType): IUserState => state.user;
export const selectUserData = (state: RootStateType): IUserState['data'] => {
  return selectUserState(state).data;
};
export const selectIsAuth = (state: RootStateType): boolean => {
  return !!selectUserState(state).data;
};
export const selectUserStatus = (state: RootStateType): IUserState['status'] => {
  return selectUserState(state).status;
};
export const selectUserIsLoading = (state: RootStateType): boolean => {
  return selectUserState(state).status === LoadingState.LOADING;
};
export const selectUserIsLoaded = (state: RootStateType): boolean => {
  return selectUserState(state).status === LoadingState.LOADED;
};