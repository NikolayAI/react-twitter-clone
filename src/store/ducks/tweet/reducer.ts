import { LoadingState, TweetStateType } from './contracts/state';
import produce, { Draft } from 'immer';
import { TweetActions, TweetActionsType } from './contracts/actionTypes';

const initialTweetState: TweetStateType = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetStateType>, action: TweetActions) => {
  switch (action.type) {
    case TweetActionsType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case TweetActionsType.SET_TWEET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    default:
      break;
  }
}, initialTweetState);