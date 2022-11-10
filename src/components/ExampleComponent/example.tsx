import * as React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface IExample {
	name: string;
	lastName: string;
}
const Example = ({ name, lastName }: IExample) => {
	return (
		<Flex w="100%" h="100%" alignSelf="flex-start">
			<Box
				borderRadius="var(--chakra-radii-lg)"
				boxShadow="var(--chakra-shadows-sm)"
				bg="whiteAlpha.900"
				border="1px solid var(--chakra-colors-brand-500)"
				p="15px"
			>
				<Flex>
					<Text fontWeight="semibold" fontSize="md">
						Name:
					</Text>
					{name}
				</Flex>

				<Flex>
					<Text fontWeight="semibold" fontSize="md">
						Last Name:
					</Text>
					{lastName}
				</Flex>
			</Box>
		</Flex>
	);
};

export default Example;
