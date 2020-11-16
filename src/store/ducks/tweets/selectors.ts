import {RootStateType} from '../../store'
import {createSelector} from 'reselect'
import {AddFormState, LoadingState} from './contracts/state'

export const selectTweets = (state: RootStateType) => state.tweets

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)

export const selectTweetsLoadingState = (state: RootStateType): LoadingState =>
    selectTweets(state).loadingState

export const selectTweetsIsLoading = (state: RootStateType): boolean =>
    selectTweetsLoadingState(state) === LoadingState.LOADING

export const selectTweetsIsLoaded = (state: RootStateType): boolean =>
    selectTweetsLoadingState(state) === LoadingState.LOADED

export const selectAddFormState = (state: RootStateType): AddFormState =>
    selectTweets(state).addFormState