import {call, put, takeLatest} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from './actionCreators'
import {tweetsApi} from '../../../services/api/tweetsApi'
import {LoadingState} from './contracts/state'


function* fetchTweetsRequest() {
    try {
        const items = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}
export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}