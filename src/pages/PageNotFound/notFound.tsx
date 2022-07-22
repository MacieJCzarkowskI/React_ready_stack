import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
	return (
		<Flex flexDirection="column" height="100vh" justifyContent="center" alignItems="center">
			<Box fontSize="32px">EXAMPLE</Box>
			<Flex fontSize="42px" color="fuchsia">
				[404] - PAGE NOT FOUND
			</Flex>
			<Flex fontSize="20px">
				Click
				<Text m="0 5px" color="red" _hover={{ color: 'fuchsia' }}>
					<Link to="/">here</Link>
				</Text>
				to return to Homepage{' '}
			</Flex>
		</Flex>
	);
};
