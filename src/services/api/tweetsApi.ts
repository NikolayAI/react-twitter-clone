import axios from 'axios';

import { TweetType } from '../../store/ducks/tweets/contracts/state';


interface Response<T> {
  status: string
  data: T
}

export const tweetsApi = {
  async fetchTweets(): Promise<TweetType[]> {
    const { data } = await axios.get<Response<TweetType[]>>('/tweets');
    return data.data;
  },
  async fetchTweetData(id: string): Promise<TweetType> {
    const { data } = await axios.get<Response<TweetType>>(`/tweets/${id}`);
    return data.data;
  },
  async addTweet(data: string): Promise<TweetType> {
    const { data: data_1 } = await axios.post('/tweets', {text: data});
    return data_1;
  },
};