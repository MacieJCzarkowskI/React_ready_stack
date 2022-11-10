import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import { loader } from './AppWrapper';
import { Navbar } from './components/Navbar/navbar';

enum ELEMENT_OPTIONS {
	LOADED,
	LOADING,
}

const ElementWithNavbar = ({ children, isLogged }: { isLogged: boolean } & PropsWithChildren) => {
	const [isMobile] = useMediaQuery('(min-width: 580px)');
	const [isLoadingView, setIsLoadingView] = useState(true);
	useEffect(() => {
		setIsLoadingView(false);
	}, []);
	const elementOptions = {
		[ELEMENT_OPTIONS.LOADED]: () => (
			<Flex
				direction="column"
				justifyContent="space-between"
				h="100%"
				minH="100vh"
				css={{
					'.chakra-offset-slide': {
						height: '100%',
						flex: 1,
						'align-self': 'stretch',
					},
				}}
			>
				<Navbar />
				<Container p="5" flex="1" maxW="full" display="flex" alignItems="center" bg="var(--chakra-colors-bg-canvas)">
					{children}
				</Container>
			</Flex>
		),
		[ELEMENT_OPTIONS.LOADING]: () => (
			<Flex alignItems="center" h="100%">
				{loader}
			</Flex>
		),
	};

	const elementType = useMemo(() => {
		if (isLoadingView) {
			return ELEMENT_OPTIONS.LOADING;
		}
		return ELEMENT_OPTIONS.LOADED;
	}, [isMobile, isLoadingView]);

	return elementOptions[elementType]();
};

const PrivateRoute = ({ isLogged, loading, path, element, additionalPath, key }: any) => {
	return loading ? (
		<Route key={key} path={path} element={loader}>
			{additionalPath.map((el: any) => (
				<Route key={`additional_path_${el.path}_loading_${key}`} path={el.path} element={loader} />
			))}
		</Route>
	) : (
		isLogged && (
			<Route key={key} path={path} element={<ElementWithNavbar isLogged={isLogged}>{element}</ElementWithNavbar>}>
				{additionalPath.map((el: any) => (
					<Route
						key={`additional_path_${el.path}_loaded_${key}`}
						path={el.path}
						element={<ElementWithNavbar isLogged={isLogged}>{el.element}</ElementWithNavbar>}
					/>
				))}
			</Route>
		)
	);
};

export default PrivateRoute;
