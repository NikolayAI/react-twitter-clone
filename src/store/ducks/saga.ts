import {all} from 'redux-saga/effects'
import {tweetsSaga} from './tweets/sagas'


export function* rootSaga() {
    yield all([tweetsSaga(),])
}