import {LoadingState, TweetsStateType} from './contracts/state'

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_TWEETS_LOADING_STATE = 'tweets/SET_TWEETS_LOADING_STATE',
}


// export interface ISetTweetsAction extends Action<TweetsActionsType>{
//     type: TweetsActionsType.SET_TWEETS,
//     payload: TweetsStateType['items'],
// }


export type SetTweetsActionType = {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsStateType['items']
}

export type fetchTweetsActionType = {
    type: TweetsActionsType.FETCH_TWEETS
}

export type SetTweetsLoadingStateActionType = {
    type: TweetsActionsType.SET_TWEETS_LOADING_STATE
    payload: LoadingState,
}

export const fetchTweets = (): fetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const setTweets = (payload: TweetsStateType['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionType => ({
    type: TweetsActionsType.SET_TWEETS_LOADING_STATE,
    payload,
})

export type TweetsActions =
    | SetTweetsActionType
    | fetchTweetsActionType
    | SetTweetsLoadingStateActionType