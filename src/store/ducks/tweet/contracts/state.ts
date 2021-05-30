import { TweetType } from '../../tweets/contracts/state';
import { LoadingState } from '../../../types';

export type TweetStateType = {
  data?: TweetType
  loadingState: LoadingState
}