import { LoadingState, TagsStateType } from './contracts/state';
import {
  fetchTagsActionType,
  SetTagsActionType,
  SetTagsLoadingStateActionType,
  TagsActionsType
} from './contracts/actionTypes';

export const fetchTags = (): fetchTagsActionType => ({
  type: TagsActionsType.FETCH_TAGS,
});

export const setTags = (payload: TagsStateType['items']): SetTagsActionType => ({
  type: TagsActionsType.SET_TAGS,
  payload,
});

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionType => ({
  type: TagsActionsType.SET_TAGS_LOADING_STATE,
  payload,
});

