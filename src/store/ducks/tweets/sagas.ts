import { call, put, takeLatest } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/api/tweetsApi';
import { AddFormState } from './contracts/state';
import {
  addTweet, removeTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingState
} from './actionCreators';
import {
  FetchAddTweetActionType, RemoveTweetActionType,
  TweetsActionsType
} from './contracts/actionTypes';
import { LoadingState } from '../../types';

function* fetchTweetsRequest() {
  try {
    const items = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

function* fetchTweetRequest({ payload }: FetchAddTweetActionType) {
  try {
    const item = yield call(tweetsApi.addTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

function* removeTweetRequest({ payload }: RemoveTweetActionType) {
  try {
    yield call(tweetsApi.removeTweet, payload);
    yield put(removeTweet(payload));
  } catch (error) {
    alert('Ошибка при удалении твита ');
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchTweetRequest);
  yield takeLatest(TweetsActionsType.REMOVE_TWEET, removeTweetRequest);
}