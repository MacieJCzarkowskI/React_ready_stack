import { action } from 'typesafe-actions';
import { SET_USER_INFO } from './constants';
import { IUserModel } from '../../models/userInfo/IUserInfo';

export const setUserInfo = (userInfo: IUserModel) =>
  action(SET_USER_INFO, userInfo);
