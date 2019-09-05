import { Epic } from 'redux-observable';
import { catchError, filter, switchMap, withLatestFrom } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import {userInfoActions, userInfoConstans} from './index';
import * as Types from 'Types';
import { EMPTY, of } from 'rxjs';

export const getUserInformation: Epic<any, any, any, Types.Services> = (
  action$,
  state$,
  { userInfo: userInfoService }
) =>
  action$.pipe(
    filter(isOfType(userInfoConstans.GET_USER_INFO)),
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      return userInfoService.getUserData().pipe(
        switchMap((response: any) => {
          return of(userInfoActions.setUserInfo(response))
        }),
        catchError(() => {
          return EMPTY;
        })
      );
    })
  );

export default getUserInformation;
