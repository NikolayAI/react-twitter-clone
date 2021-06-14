import { call, put, takeLatest } from 'redux-saga/effects';
import {
  IFetchSignIn,
  IFetchSignUp,
  UserActionsType
} from './contracts/actionTypes';
import { authApi } from '../../../services/api/authApi';
import { setUserData, setUserLoadingStatus } from './actionCreators';
import { LoadingState } from '../../types';

function* fetchSignInRequest({ payload }: IFetchSignIn) {
  try {
    yield put(setUserLoadingStatus(LoadingState.LOADING));
    const { data } = yield call(authApi.signIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingState.ERROR));
  }
}

function* fetchSignUpRequest({ payload }: IFetchSignUp) {
  try {
    yield put(setUserLoadingStatus(LoadingState.LOADING));
    const { data } = yield call(authApi.signUp, payload);
    yield put(setUserLoadingStatus(LoadingState.SUCCESS));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingState.ERROR));
  }
}

function* fetchUserDataRequest() {
  try {
    yield put(setUserLoadingStatus(LoadingState.LOADING));
    const { data } = yield call(authApi.me);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
  yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}