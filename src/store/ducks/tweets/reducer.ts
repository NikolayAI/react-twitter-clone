import {LoadingState, TweetsStateType} from './contracts/state'
import produce, {Draft} from 'immer'
import {TweetsActions, TweetsActionsType} from './actionCreators'


const initialTweetsState: TweetsStateType = {
    items: [],
    loadingState: LoadingState.NEVER,
}


export const tweetsReducer = produce((draft: Draft<TweetsStateType>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case TweetsActionsType.SET_TWEETS_LOADING_STATE:
            draft.loadingState = action.payload
            break
        default:
            break
    }
}, initialTweetsState)