import { LoadingState } from '../../../types';

export type TagType = {
  _id: string
  name: string
  count: number
}

export type TagsStateType = {
  items: Array<TagType>
  loadingState: LoadingState
}