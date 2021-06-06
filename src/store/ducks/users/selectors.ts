import { RootStateType } from '../../store';
import { IUsersState } from './contracts/state';

export const selectUsers = (state: RootStateType) => state.users;
export const selectUsersItems = (state: RootStateType) => state.users.items;