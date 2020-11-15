import {call, put, takeLatest} from 'redux-saga/effects'
import {setTags, setTagsLoadingState, TagsActionsType} from './actionCreators'
import {tagsApi} from '../../../services/api/tagsApi'
import {LoadingState} from './contracts/state'


function* fetchTagsRequest() {
    try {
        const items = yield call(tagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}
export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}