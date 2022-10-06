import React from 'react';
import { Provider } from 'react-redux';

import store from './appConfig/store';
import { ChakraProvider } from '@chakra-ui/react';
import Wrapper from './AppWrapper';
import './i18n';

import { extendTheme } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import '@fontsource/inter/variable.css';

const myColor = {
	50: '#00B8E4',
	100: '#00B7FF',
	200: '#42A6ED',
	300: '#1b91d6',
	400: '#1b91d6',
	500: '#0074B6',
	600: '#005897',
	700: '#003E79',
	800: '#00255C',
	900: '#00255C',
};

const App: React.FC = () => {
	const myTheme = extendTheme(
		{
			colors: {
				...theme.colors,
				brand: myColor,
			},
		},
		theme,
	);
	return (
		<Provider store={store}>
			<ChakraProvider resetCSS theme={myTheme}>
				<Wrapper />
			</ChakraProvider>
		</Provider>
	);
};

export default App;
