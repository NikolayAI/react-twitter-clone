import { LoadingState } from '../../../types';
import { IUsersState } from './state';

export enum UsersActionsType {
  SET_ITEMS = 'users/SET_ITEMS',
  FETCH_ITEMS = 'users/FETCH_ITEMS',
}

export type SetUsersItemsActionType = {
  type: UsersActionsType.SET_ITEMS
  payload: IUsersState[]
}
export type FetchUsersItemsActionType = {
  type: UsersActionsType.FETCH_ITEMS
  payload: LoadingState,
}
export type UsersActions =
  | SetUsersItemsActionType
  | FetchUsersItemsActionType
