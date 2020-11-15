import {RootStateType} from '../../store'
import {LoadingState, TweetStateType} from './contracts/state'

export const selectTweet = (state: RootStateType): TweetStateType => state.tweet
export const selectTweetData = (state: RootStateType): TweetStateType['data'] => selectTweet(state).data
export const selectTweetLoadingState = (state: RootStateType): LoadingState => selectTweet(state).loadingState
export const selectTweetIsLoading = (state: RootStateType) => selectTweetLoadingState(state) === LoadingState.LOADING
export const selectTweetIsLoaded = (state: RootStateType) => selectTweetLoadingState(state) === LoadingState.LOADED