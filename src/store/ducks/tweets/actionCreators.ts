import {AddFormState, LoadingState, TweetsStateType, TweetType} from './contracts/state'
import {
    AddTweetActionType,
    FetchAddTweetActionType,
    fetchTweetsActionType,
    SetAddFormStateActionType,
    SetTweetsActionType,
    SetTweetsLoadingStateActionType,
    TweetsActionsType
} from './contracts/actionTypes'

export const fetchTweets = (): fetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const setTweets = (payload: TweetsStateType['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionType => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
})

export const addTweet = (payload: TweetType): AddTweetActionType => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionType => ({
    type: TweetsActionsType.SET_TWEETS_LOADING_STATE,
    payload,
})

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionType => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload,
})

