import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../utils/reduxUtils';
import { useEffect } from 'react';
import { getUserData } from '../../features/user/actions';

const HomePage = () => {
	const { name, lastName } = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getUserData());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div>Name: {name}</div>
			<div>Last Name: {lastName}</div>
		</div>
	);
};

export default HomePage;
