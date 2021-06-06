import { IUsersState } from './contracts/state';
import produce, { Draft } from 'immer';
import { UsersActions, UsersActionsType } from './contracts/actionTypes';
import { LoadingState } from '../../types';

const initialUsersState: IUsersState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const usersReducer = produce((draft: Draft<IUsersState>, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsType.SET_ITEMS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case UsersActionsType.FETCH_ITEMS:
      draft.loadingState = LoadingState.LOADING;
      break;
    default:
      break;
  }
}, initialUsersState);