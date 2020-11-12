import {LoadingState, TweetsStateType} from './contracts/state'
import produce, {Draft} from 'immer'
import {TweetsActions, TweetsActionsType} from '../actionCreators'


const initialTweetsState: TweetsStateType = {
    items: [],
    loadingState: LoadingState.NEVER,
}


export const tweetsReducer = produce((draft: Draft<TweetsStateType>, action: TweetsActions) => {

    if (action.type === TweetsActionsType.SET_TWEETS) {
        draft.items = action.payload
    }

}, initialTweetsState)