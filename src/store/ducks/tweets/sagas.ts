import {call, put, takeLatest} from 'redux-saga/effects'
import {addTweet, setAddFormState, setTweets, setTweetsLoadingState} from './actionCreators'
import {tweetsApi} from '../../../services/api/tweetsApi'
import {AddFormState, LoadingState, TweetType} from './contracts/state'
import {FetchAddTweetActionType, TweetsActionsType} from './contracts/actionTypes'


function* fetchTweetsRequest() {
    try {
        const items = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

function* fetchTweetRequest({payload}: FetchAddTweetActionType) {
    try {
        const data: TweetType = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: 'Test User',
                username: 'test',
                avatarUrl: 'https://source.unsplash.com/random/100x100?5',
                email: 't@t'
            },
        }
        const item = yield call(tweetsApi.addTweet, data.text)
        yield put(addTweet(item))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchTweetRequest)
}