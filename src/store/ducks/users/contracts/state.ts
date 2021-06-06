import { LoadingState } from '../../../types';
import { IUserState } from '../../user/contracts/state';

export interface IUsersState {
  items: IUserState[]
  loadingState: LoadingState
}