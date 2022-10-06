import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../utils/reduxUtils';
import { useEffect } from 'react';
import { getUserData } from '../../features/user/actions';
import Example from '../../components/ExampleComponent/example';

const HomePage = () => {
	const { name, lastName } = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getUserData());
	}, []);

	return <Example name={name} lastName={lastName} />;
};

export default HomePage;
