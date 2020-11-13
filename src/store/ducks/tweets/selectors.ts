import {RootStateType} from '../../store'
import {createSelector} from 'reselect'
import {LoadingState} from './contracts/state'

export const selectTweets = (state: RootStateType) => state.tweets
export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)
export const selectTweetsLoadingState = (state: RootStateType) => selectTweets(state).loadingState
export const selectTweetsIsLoading = (state: RootStateType) => selectTweetsLoadingState(state) === LoadingState.LOADING
export const selectTweetsIsLoaded = (state: RootStateType) => selectTweetsLoadingState(state) === LoadingState.LOADED