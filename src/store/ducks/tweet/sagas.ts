import {call, put, takeLatest} from 'redux-saga/effects'
import {setTweetData, setTweetLoadingState} from './actionCreators'
import {tweetsApi} from '../../../services/api/tweetsApi'
import {LoadingState} from './contracts/state'
import {fetchTweetDataActionType, TweetActionsType} from './contracts/actionTypes'
import {TweetType} from '../tweets/contracts/state'


function* fetchTweetDataRequest({payload: tweetId}: fetchTweetDataActionType) {
    try {
        const data: TweetType = yield call(tweetsApi.fetchTweetData, tweetId)
        yield put(setTweetData(data))
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}
export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}