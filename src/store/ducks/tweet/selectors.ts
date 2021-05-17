import { RootStateType } from '../../store';
import { LoadingState, TweetStateType } from './contracts/state';
import { TweetType } from '../tweets/contracts/state';


export const selectTweet = (state: RootStateType): TweetStateType => state.tweet
export const selectTweetData = (state: RootStateType): TweetType | undefined => selectTweet(state).data
export const selectTweetLoadingState = (state: RootStateType): LoadingState => selectTweet(state).loadingState
export const selectTweetIsLoading = (state: RootStateType) => selectTweetLoadingState(state) === LoadingState.LOADING
export const selectTweetIsLoaded = (state: RootStateType) => selectTweetLoadingState(state) === LoadingState.LOADED