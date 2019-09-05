import { ActionType } from 'typesafe-actions';

import { IUserModel } from '../../models/userInfo/IUserInfo';
import * as actions from './actions';
import { SET_USER_INFO } from './constants';

export type UserInfoActions = ActionType<typeof actions>;

export interface IUserInfoState {
  readonly name: string;
  readonly lastName: string;
}

const initialUserInfoReducer: IUserInfoState = {
  name: 'example name',
  lastName: 'example last name'
};

const userInfoReducer = (
  state: IUserModel = initialUserInfoReducer,
  action: UserInfoActions
) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default userInfoReducer;
