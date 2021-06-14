import { IUserState } from './contracts/state';
import {
  IFetchSignIn, IFetchSignUp, IFetchUserData,
  ISetUserData,
  ISetUserLoadingState,
  UserActionsType
} from './contracts/actionTypes';
import { ILoginForm } from '../../../pages/SignIn/components/LoginModal';
import { IRegisterForm } from '../../../pages/SignIn/components/RegisterModal';

export const setUserData = (payload: IUserState['data']): ISetUserData => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const fetchSignIn = (payload: ILoginForm): IFetchSignIn => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const fetchSignUp = (payload: IRegisterForm): IFetchSignUp => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});

export const fetchUserData = (): IFetchUserData => ({
  type: UserActionsType.SET_USER_DATA,
});

export const setUserLoadingStatus = (payload: IUserState['status']): ISetUserLoadingState => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});
