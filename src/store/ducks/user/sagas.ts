import { call, put, takeLatest } from 'redux-saga/effects';
import { IFetchSignIn, UserActionsType } from './contracts/actionTypes';
import { authApi } from '../../../services/api/authApi';
import { setUserData, setUserLoadingStatus } from './actionCreators';
import { LoadingState } from '../../types';

function* fetchSignInRequest({ payload }: IFetchSignIn) {
  try {
    const data = yield call(authApi.signIn, payload);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}