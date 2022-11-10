/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import { combineEpics } from 'redux-observable';
import { catchError, delay, filter, switchMap, withLatestFrom } from 'rxjs/operators';
import { concat, EMPTY, of } from 'rxjs';
import { AppEpic } from '../../utils/reduxUtils';
import { checkIfLogged, isLoading, login, logout, setIsLogged } from './actions';
import { fromPromise } from 'rxjs/internal-compatibility';

export const Login: AppEpic<ReturnType<typeof login>> = (action$, state$, { authorization }) =>
	action$.pipe(
		filter(login.match),
		withLatestFrom(state$),
		switchMap(([action, state]) => {
			return concat(
				of(isLoading(true)),
				// authorization.login(action.payload).pipe(
				fromPromise(
					new Promise((resolve, reject) => {
						setTimeout(() => {
							resolve({});
						}, 500);
					}),
				).pipe(
					switchMap((AjaxResponse: any) => {
						window.location.replace('/');
						localStorage.setItem('id', 'example_id');
						return concat(of(setIsLogged({ isLogged: true })));
					}),
					catchError((err: any) => {
						return concat(of(setIsLogged({ isLogged: false })));
					}),
				),
			);
		}),
	);

export const Logout: AppEpic<ReturnType<typeof logout>> = (action$, state$, { authorization }) =>
	action$.pipe(
		filter(logout.match),
		withLatestFrom(state$),
		switchMap(([action, state]) => {
			localStorage.removeItem('id');
			window.location.replace('/');
			return EMPTY;
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

export const authEpics = combineEpics(Login, CheckIfLoggedEpic, Logout);
