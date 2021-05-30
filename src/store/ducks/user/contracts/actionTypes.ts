import { IUser } from './state';
import { Action } from 'redux';
import { LoadingState } from '../../../types';
import { ILoginForm } from '../../../../pages/SignIn/components/LoginModal';

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface ISetUserData extends Action<UserActionsType>{
  type: UserActionsType.SET_USER_DATA
  payload?: IUser
}

export interface IFetchSignIn extends Action<UserActionsType>{
  type: UserActionsType.FETCH_SIGN_IN
  payload?: ILoginForm
}

export interface ISetUserLoadingState extends Action<UserActionsType>{
  type: UserActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export type UserActions =
  | ISetUserData
  | ISetUserLoadingState
  | IFetchSignIn
