import { IUserState } from './contracts/state';
import produce, { Draft } from 'immer';
import { UserActions, UserActionsType } from './contracts/actionTypes';
import { LoadingState } from '../../types';

const initialUserState: IUserState = {
  data: undefined,
  status: LoadingState.NEVER
};

export const userReducer = produce((draft: Draft<IUserState>, action: UserActions) => {
  switch (action.type) {

    case UserActionsType.SET_USER_DATA:
      draft.data = action.payload;
      draft.status = LoadingState.SUCCESS;
      break;

    case UserActionsType.SET_LOADING_STATE:
      draft.status = action.payload;
      break;

    default:
      break;
  }
}, initialUserState);