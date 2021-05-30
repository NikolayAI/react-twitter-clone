import { RootStateType } from '../../store';
import { createSelector } from 'reselect';
import { LoadingState } from '../../types';

export const selectTags = (state: RootStateType) => state.tags;
export const selectTagsItems = createSelector(selectTags, tags => tags.items);
export const selectTagsLoadingState = (state: RootStateType) => selectTags(state).loadingState;
export const selectTagsIsLoading = (state: RootStateType) => selectTagsLoadingState(state) === LoadingState.LOADING;
export const selectTagsIsLoaded = (state: RootStateType) => selectTagsLoadingState(state) === LoadingState.LOADED;