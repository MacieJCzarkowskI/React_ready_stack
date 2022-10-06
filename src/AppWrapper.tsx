import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { PageNotFound } from './pages/PageNotFound/notFound';
import HomePage from './pages/HomePage/home';
import Login from './pages/LoginPage/login';
import { useAppDispatch, useAppSelector } from './utils/reduxUtils';
import { checkIfLogged } from './features/authorization/actions';
import { Box, useColorModeValue } from '@chakra-ui/react';

const pages = [
	{
		path: '/login',
		element: <Login />,
	},
].map((item, index) => ({ ...item, id: `path_${index + 1}_${item.path}` }));

export const privatePages = [
	{
		path: '/',
		element: <HomePage />,
		// example
		// additionalPath: [{ path: ':id', element: <Account /> }],
		additionalPath: [],
	},
].map((item, index) => ({ ...item, id: `path_${index + 1}_${item.path}` }));

const Wrapper = () => {
	const { loading, isLogged } = useAppSelector(state => state.authorization);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(checkIfLogged());
	}, []);

	const bg = useColorModeValue('white', 'gray.800');
	const color = useColorModeValue('#1b91d6', '#976cbd');

	return (
		<Box minHeight="100vh" bg={bg} color={color}>
			<BrowserRouter>
				<Routes>
					{pages.map(({ path, element, id }) => (
						<Route path={path} element={element} key={id} />
					))}
					{privatePages.map(({ path, additionalPath, element, id }) => PrivateRoute({ path, key: id, additionalPath, isLogged, loading, element }))}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
};

export default Wrapper;
