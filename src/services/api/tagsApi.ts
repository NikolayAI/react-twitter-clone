import axios from 'axios';
import { TagsStateType } from '../../store/ducks/tags/contracts/state';

export const tagsApi = {
  fetchTags(): Promise<TagsStateType['items']> {
    return axios.get('/tags').then(({ data }) => data);
  },
};