import {TweetsStateType} from './tweets/contracts/state'

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
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

export const setTweets = (payload: TweetsStateType['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS, payload
})

export const fetchTweets = (): fetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS
})

export type TweetsActions = SetTweetsActionType
    | fetchTweetsActionType