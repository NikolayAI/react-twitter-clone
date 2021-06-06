import {
  FetchUsersItemsActionType,
  SetUsersItemsActionType,
  UsersActionsType,
} from './contracts/actionTypes';
import { LoadingState } from '../../types';
import { IUsersState } from './contracts/state';

export const setUsers = (payload: IUsersState[]): SetUsersItemsActionType => ({
  type: UsersActionsType.SET_ITEMS,
  payload,
});

export const fetchUsers = (payload: LoadingState): FetchUsersItemsActionType => ({
  type: UsersActionsType.FETCH_ITEMS,
  payload,
});
