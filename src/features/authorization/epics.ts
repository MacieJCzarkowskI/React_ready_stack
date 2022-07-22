/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import { combineEpics } from 'redux-observable';
import { catchError, filter, switchMap, withLatestFrom } from 'rxjs/operators';
import { concat, of } from 'rxjs';
import { AppEpic } from '../../utils/reduxUtils';
import { checkIfLogged, isLoading, login, setIsLogged } from './actions';

export const Login: AppEpic<ReturnType<typeof login>> = (action$, state$, { authorization }) =>
	action$.pipe(
		filter(login.match),
		withLatestFrom(state$),
		switchMap(([action, state]) => {
			return concat(
				of(isLoading(true)),
				authorization.login(action.payload).pipe(
					switchMap((AjaxResponse: any) => {
						// const { response } = AjaxResponse;
						return concat(of(setIsLogged({ isLogged: true })));
					}),
					catchError((err: any) => {
						window.location.replace('/');
						localStorage.setItem('id', 'example_id');
						return concat(of(setIsLogged({ isLogged: true })));
					}),
				),
			);
		}),
	);

export const CheckIfLoggedEpic: AppEpic<ReturnType<typeof checkIfLogged>> = (action$, state$, { authorization }) =>
	action$.pipe(
		filter(checkIfLogged.match),
		withLatestFrom(state$),
		switchMap(([action, state]) => {
			const id = localStorage.getItem('id');
			if (window && window.location.pathname !== '/login' && !id) {
				window.location.replace('/login');
			}
			return concat(of(setIsLogged({ isLogged: !!id })));
		}),
	);

export const authEpics = combineEpics(Login, CheckIfLoggedEpic);
