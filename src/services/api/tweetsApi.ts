import axios from 'axios'
import {TweetsStateType} from '../../store/ducks/tweets/contracts/state'
import {TweetStateType} from '../../store/ducks/tweet/contracts/state'


export const tweetsApi = {
    fetchTweets(): Promise<TweetsStateType['items']> {
        return axios.get('/tweets').then(({data}) => data)
    },
    fetchTweetData(id: string): Promise<Array<TweetStateType>> {
        return axios.get(`/tweets?_id=${id}`).then(({data}) => data)
    },
}