import {LoadingState, TweetStateType} from './contracts/state'
import {fetchTweetDataActionType, SetTweetActionType, SetTweetLoadingStateActionType} from './contracts/actionTypes'

export enum TweetActionsType {
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    SET_TWEET_LOADING_STATE = 'tweet/SET_TWEET_LOADING_STATE',
}

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

export type TweetActions =
    | fetchTweetDataActionType
    | SetTweetActionType
    | SetTweetLoadingStateActionType