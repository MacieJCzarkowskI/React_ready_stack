import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
	colors: {
		darkLink: {
			100: '#1a202c',
			500: '#1a202c',
			900: '#1a202c',
		},
	},
	components: {
		Switch: {
			baseStyle: {
				track: {
					_focus: {
						boxShadow: 'none',
					},
				},
			},
		},
	},
	fonts: {
		body: 'Montserrat,serif',
	},
	baseStyle: {
		body: {
			height: '100vh',
		},
	},
});
