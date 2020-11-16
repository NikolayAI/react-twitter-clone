import {LoadingState, TweetStateType} from './state'

export enum TweetActionsType {
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    SET_TWEET_LOADING_STATE = 'tweet/SET_TWEET_LOADING_STATE',
}

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

export type TweetActions =
    | fetchTweetDataActionType
    | SetTweetActionType
    | SetTweetLoadingStateActionType
