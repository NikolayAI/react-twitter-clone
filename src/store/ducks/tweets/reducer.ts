import { AddFormState, TweetsStateType } from './contracts/state';
import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './contracts/actionTypes';
import { LoadingState } from '../../types';

const initialTweetsState: TweetsStateType = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFormState: AddFormState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsStateType>, action: TweetsActions) => {
  switch (action.type) {

    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetsActionsType.SET_TWEETS_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    case TweetsActionsType.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload;
      break;

    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addFormState = AddFormState.LOADING;
      break;

    case TweetsActionsType.ADD_TWEET:
      draft.items.unshift(action.payload);
      draft.addFormState = AddFormState.NEVER;
      break;

    default:
      break;
  }
}, initialTweetsState);