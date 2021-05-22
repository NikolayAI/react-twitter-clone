import { TweetType } from '../../tweets/contracts/state';

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export type TweetStateType = {
  data?: TweetType
  loadingState: LoadingState
}