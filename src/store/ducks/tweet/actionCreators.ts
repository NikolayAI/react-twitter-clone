import {LoadingState, TweetStateType} from './contracts/state'
import {
    fetchTweetDataActionType,
    SetTweetActionType,
    SetTweetLoadingStateActionType,
    TweetActionsType
} from './contracts/actionTypes'

export const fetchTweetData = (payload: string): fetchTweetDataActionType => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
})

export const setTweetData = (payload: TweetStateType['data']): SetTweetActionType => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
})

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionType => ({
    type: TweetActionsType.SET_TWEET_LOADING_STATE,
    payload,
})

