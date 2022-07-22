import { ajax } from 'rxjs/ajax';

export const login = ({ user, password }: { user: string; password: string }) => {
	return ajax({
		url: `${process.env.REACT_APP_USER_INFO_API}/login`,
		method: 'POST',
		body: {
			user,
			password,
		},
	});
};
