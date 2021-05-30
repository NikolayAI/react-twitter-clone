import { AddFormState, TweetsStateType, TweetType } from './state';
import { LoadingState } from '../../../types';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_TWEETS_LOADING_STATE = 'tweets/SET_TWEETS_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
  SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
}

export type fetchTweetsActionType = {
  type: TweetsActionsType.FETCH_TWEETS
}
export type SetTweetsActionType = {
  type: TweetsActionsType.SET_TWEETS
  payload: TweetsStateType['items']
}
export type FetchAddTweetActionType = {
  type: TweetsActionsType.FETCH_ADD_TWEET
  payload: string
}
export type AddTweetActionType = {
  type: TweetsActionsType.ADD_TWEET
  payload: TweetType
}
export type SetTweetsLoadingStateActionType = {
  type: TweetsActionsType.SET_TWEETS_LOADING_STATE
  payload: LoadingState,
}
export type SetAddFormStateActionType = {
  type: TweetsActionsType.SET_ADD_FORM_STATE
  payload: AddFormState,
}
export type TweetsActions =
  | fetchTweetsActionType
  | SetTweetsActionType
  | FetchAddTweetActionType
  | AddTweetActionType
  | SetTweetsLoadingStateActionType
  | SetAddFormStateActionType