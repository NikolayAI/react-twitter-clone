import { call, put, takeLatest } from 'redux-saga/effects';
import { tweetsApi } from '../../../services/api/tweetsApi';
import { AddFormState, LoadingState } from './contracts/state';
import {
  addTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingState
} from './actionCreators';
import {
  FetchAddTweetActionType,
  TweetsActionsType
} from './contracts/actionTypes';

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

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchTweetRequest);
}