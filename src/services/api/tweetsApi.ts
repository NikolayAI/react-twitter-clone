import axios from 'axios'
import {TweetsStateType} from '../../store/ducks/tweets/contracts/state'


export const tweetsApi = {
    fetchTweets(): Promise<TweetsStateType['items']> {
        return axios.get('/tweets').then(({data}) => data)
    },
}