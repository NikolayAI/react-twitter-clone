import { axios } from '../../core/axios';
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
  async addTweet(payload: {text: string, images: string[]}): Promise<TweetType> {
    const { data } = await axios.post<Response<TweetType>>('/tweets', { payload });
    return data.data;
  },
};