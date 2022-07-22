import React from 'react';
import { Provider } from 'react-redux';

import store from './appConfig/store';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './theme';
import Wrapper from './AppWrapper';
import './i18n';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={customTheme} resetCSS>
				<Wrapper />
			</ChakraProvider>
		</Provider>
	);
};

export default App;
