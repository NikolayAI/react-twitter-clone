import {LoadingState, TagsStateType} from './contracts/state'
import produce, {Draft} from 'immer'
import {TagsActions, TagsActionsType} from './actionCreators'


const initialTagsState: TagsStateType = {
    items: [],
    loadingState: LoadingState.NEVER,
}


export const tagsReducer = produce((draft: Draft<TagsStateType>, action: TagsActions) => {
    switch (action.type) {
        case TagsActionsType.FETCH_TAGS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case TagsActionsType.SET_TAGS_LOADING_STATE:
            draft.loadingState = action.payload
            break
        default:
            break
    }
}, initialTagsState)