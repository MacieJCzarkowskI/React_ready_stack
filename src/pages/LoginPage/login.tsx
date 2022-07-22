import * as React from 'react';
import { Box, Button, Flex, Text, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/reduxUtils';
import { login } from '../../features/authorization/actions';
import { useTranslation } from 'react-i18next';

const Login = () => {
	const [loginData, handleLoginData] = useState({ user: '', password: '' });

	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const { loading } = useAppSelector(state => state.authorization);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	return (
		<Flex w="100%" h="100vh" alignItems="center" flexDir="column" justifyContent="center">
			<Box border="1px solid black" p="15px">
				<Text mb="8px">{t('login.userHeader')}</Text>
				<Input placeholder={t('login.userPlaceholder')} onChange={({ target: { value } }) => handleLoginData({ ...loginData, user: value })} />
				<Text mt="20px" mb="8px">
					{t('login.passwordHeader')}
				</Text>
				<InputGroup size="md">
					<Input
						pr="4.5rem"
						type={show ? 'text' : 'password'}
						placeholder={t('login.passwordPlaceholder')}
						onChange={({ target: { value } }) => handleLoginData({ ...loginData, password: value })}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{t(`login.${show ? 'hide' : 'show'}`)}
						</Button>
					</InputRightElement>
				</InputGroup>
				<Button
					isLoading={loading}
					colorScheme="blue"
					onClick={() => {
						dispatch(login(loginData));
					}}
					mt="20px"
					w="100%"
				>
					{t('login.login')}
				</Button>
			</Box>
		</Flex>
	);
};

export default Login;
