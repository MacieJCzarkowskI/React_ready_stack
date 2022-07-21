import { ajax } from 'rxjs/ajax';

export const getUserData = () => {
	return ajax({
		url: `${process.env.REACT_APP_USER_INFO_API}/me`,
		method: 'GET',
	});
};
