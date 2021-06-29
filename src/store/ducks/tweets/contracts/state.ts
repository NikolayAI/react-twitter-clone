import { LoadingState } from '../../../types';
import { IImageObj } from '../../../../components/AddTweetForm/AddTweetForm';

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export type TweetType = {
  _id: string
  text: string
  createdAt: string
  images?: string[]
  user: {
    fullName: string,
    userName: string,
    avatarUrl: string,
    email: string,
  }
}

export type TweetsStateType = {
  items: Array<TweetType>
  loadingState: LoadingState
  addFormState: AddFormState
}