import {  TagsStateType } from './state';
import { LoadingState } from '../../../types';

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
export type TagsActions =
  | SetTagsActionType
  | fetchTagsActionType
  | SetTagsLoadingStateActionType