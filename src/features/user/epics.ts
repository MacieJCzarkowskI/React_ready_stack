/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import { combineEpics } from 'redux-observable';
import { catchError, filter, switchMap, withLatestFrom } from 'rxjs/operators';
import { concat, of } from 'rxjs';
import { AppEpic } from '../../utils/reduxUtils';
import { getUserData, setUserData } from './actions';

export const getUserDataEpic: AppEpic<ReturnType<typeof getUserData>> = (action$, state$, { user }) =>
	action$.pipe(
		filter(getUserData.match),
		withLatestFrom(state$),
		switchMap(([action, state]) => {
			return concat(
				user.getUserData().pipe(
					switchMap((AjaxResponse: any) => {
						// const { response } = AjaxResponse;
						return concat(of(setUserData({ name: 'Exmple', lastName: 'User' })));
					}),
					catchError((err: any) => {
						return concat(of(setUserData({ name: 'error', lastName: 'error' })));
					}),
				),
			);
		}),
	);

export const userEpics = combineEpics(getUserDataEpic);
