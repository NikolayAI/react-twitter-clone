import {LoadingState, TweetStateType} from './state'
import {TweetActionsType} from '../actionCreators'

export type fetchTweetDataActionType = {
    type: TweetActionsType.FETCH_TWEET_DATA
    payload: string
}

export type SetTweetActionType = {
    type: TweetActionsType.SET_TWEET_DATA
    payload: TweetStateType['data']
}

export type SetTweetLoadingStateActionType = {
    type: TweetActionsType.SET_TWEET_LOADING_STATE
    payload: LoadingState,
}