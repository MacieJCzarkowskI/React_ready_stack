import { extendTheme } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';

const myColor = {
	50: '#a4bdcc',
	100: '#92b6cb',
	200: '#5fb2e2',
	300: '#4697c7',
	400: '#297aa9',
	500: '#1b79b0',
	600: '#1883c1',
	700: '#36789f',
	800: '#0f5883',
	900: '#0b4d73',
};

export const myTheme = extendTheme(
	{
		colors: {
			...theme.colors,
			brand: myColor,
		},
		components: {
			...theme.components,
		},
	},
	theme,
);
