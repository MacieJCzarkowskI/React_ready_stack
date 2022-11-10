import React, { useEffect, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { PageNotFound } from './pages/PageNotFound/notFound';
import HomePage from './pages/HomePage/home';
import Login from './pages/LoginPage/login';
import { useAppDispatch, useAppSelector } from './utils/reduxUtils';
import { checkIfLogged } from './features/authorization/actions';
import { Box, Flex, Spinner, useColorModeValue } from '@chakra-ui/react';

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

export const loader = (
	<Flex justifyContent="center" w="100%" h="100vh" alignItems="center">
		<Spinner size="xl" />
	</Flex>
);

const Wrapper = () => {
	const { loading, isLogged } = useAppSelector(state => state.authorization);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(checkIfLogged());
	}, []);

	const bg = useColorModeValue('white', 'gray.800');

	return (
		<Box height="100%" bg={bg} pb="auto" display={loading ? 'flex' : 'block'} alignItems="center">
			<BrowserRouter>
				<Suspense fallback={loader}>
					<Routes>
						{pages.map(({ path, element, id }) => (
							<Route path={path} element={loading && window.location.pathname !== '/login' ? loader : element} key={id} />
						))}
						{privatePages.map(({ path, additionalPath, element, id }) =>
							PrivateRoute({
								path,
								key: `private_route_${path}_${id}_${additionalPath.length}`,
								additionalPath,
								isLogged,
								loading,
								element,
							}),
						)}
						{!loading && isLogged && <Route path="*" element={<PageNotFound />} />}
					</Routes>
				</Suspense>
			</BrowserRouter>
		</Box>
	);
};

export default Wrapper;
