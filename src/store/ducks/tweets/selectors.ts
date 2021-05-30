import { RootStateType } from '../../store';
import { AddFormState } from './contracts/state';
import { LoadingState } from '../../types';

export const selectTweetsState = (state: RootStateType) => state.tweets;

export const selectTweetsItems = (state: RootStateType) =>
  selectTweetsState(state).items;

export const selectTweetsLoadingState = (state: RootStateType): LoadingState =>
  selectTweetsState(state).loadingState;

export const selectTweetsIsLoading = (state: RootStateType): boolean =>
  selectTweetsLoadingState(state) === LoadingState.LOADING;

export const selectTweetsIsLoaded = (state: RootStateType): boolean =>
  selectTweetsLoadingState(state) === LoadingState.LOADED;

export const selectAddFormState = (state: RootStateType): AddFormState =>
  selectTweetsState(state).addFormState;