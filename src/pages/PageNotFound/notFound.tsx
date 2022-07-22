import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PageNotFound = () => {
	const { t } = useTranslation();

	return (
		<Flex flexDirection="column" height="100vh" justifyContent="center" alignItems="center">
			<Box fontSize="32px">{t('pageNotFound.header')}</Box>
			<Flex fontSize="42px" color="fuchsia">
				{t('pageNotFound.subheader')}
			</Flex>
			<Flex fontSize="20px">
				{t('pageNotFound.click')}
				<Text m="0 5px" color="red" _hover={{ color: 'fuchsia' }}>
					<Link to="/">here</Link>
				</Text>
				{t('pageNotFound.return')}
			</Flex>
		</Flex>
	);
};
