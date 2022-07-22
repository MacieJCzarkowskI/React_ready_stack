import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';

interface IExample {
	name: string;
	lastName: string;
}
const Example = ({ name, lastName }: IExample) => {
	return (
		<Flex w="100%" h="100vh" alignItems="center" flexDir="column" justifyContent="center">
			<Box border="1px solid red" p="15px">
				<Box>Name: {name}</Box>
				<Box>Last Name: {lastName}</Box>
			</Box>
		</Flex>
	);
};

export default Example;
