import {
  AddFormState,
  TweetsStateType,
  TweetType
} from './contracts/state';
import {
  AddTweetActionType,
  FetchAddTweetActionType,
  fetchTweetsActionType, RemoveTweetActionType,
  SetAddFormStateActionType,
  SetTweetsActionType,
  SetTweetsLoadingStateActionType,
  TweetsActionsType
} from './contracts/actionTypes';
import { LoadingState } from '../../types';

export const fetchTweets = (): fetchTweetsActionType => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweets = (payload: TweetsStateType['items']): SetTweetsActionType => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchAddTweet = (payload: {text: string, images: string[]}): FetchAddTweetActionType => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: TweetType): AddTweetActionType => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const removeTweet = (payload: string): RemoveTweetActionType => ({
  type: TweetsActionsType.REMOVE_TWEET,
  payload,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionType => ({
  type: TweetsActionsType.SET_TWEETS_LOADING_STATE,
  payload,
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionType => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});

