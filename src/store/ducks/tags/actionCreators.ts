import {LoadingState, TagsStateType} from './contracts/state'

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_TAGS_LOADING_STATE = 'tags/SET_TAGS_LOADING_STATE',
}

export type SetTagsActionType = {
    type: TagsActionsType.SET_TAGS
    payload: TagsStateType['items']
}

export type fetchTagsActionType = {
    type: TagsActionsType.FETCH_TAGS
}

export type SetTagsLoadingStateActionType = {
    type: TagsActionsType.SET_TAGS_LOADING_STATE
    payload: LoadingState,
}

export const fetchTags = (): fetchTagsActionType => ({
    type: TagsActionsType.FETCH_TAGS,
})

export const setTags = (payload: TagsStateType['items']): SetTagsActionType => ({
    type: TagsActionsType.SET_TAGS,
    payload,
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionType => ({
    type: TagsActionsType.SET_TAGS_LOADING_STATE,
    payload,
})

export type TagsActions =
    | SetTagsActionType
    | fetchTagsActionType
    | SetTagsLoadingStateActionType