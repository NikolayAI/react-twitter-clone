import {call, put, takeLatest} from 'redux-saga/effects'
import {setTweetData, setTweetLoadingState, TweetActionsType} from './actionCreators'
import {tweetsApi} from '../../../services/api/tweetsApi'
import {LoadingState} from './contracts/state'
import {fetchTweetDataActionType} from './contracts/actionTypes'
import {TweetType} from '../tweets/contracts/state'


function* fetchTweetDataRequest({payload: tweetId}: fetchTweetDataActionType) {
    try {
        const data: Array<TweetType> = yield call(tweetsApi.fetchTweetData, tweetId)
        yield put(setTweetData(data[0]))
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}
export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}