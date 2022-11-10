import { Button, Container, Input, Stack, Heading, Flex, Text, InputGroup, Box, FormControl, FormErrorMessage, Image } from '@chakra-ui/react';
import { CSSTransition } from 'react-transition-group';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/reduxUtils';
import { login } from '../../features/authorization/actions';

const Login = () => {
	const [loginData, handleLoginData] = useState({ user: '', password: '' });

	const isInvalidToken = false;
	const { loading } = useAppSelector(state => state.authorization);
	const dispatch = useAppDispatch();

	const opacityTime = '1s';

	return (
		<>
			<Box
				w="100%"
				position="absolute"
				h="100%"
				sx={{
					'.login_transition-appear': {
						opacity: 0.01,
					},
					'.login_transition-appear-done': {
						opacity: 1,
						transition: `opacity ${opacityTime} ease-in`,
					},
				}}
			>
				<CSSTransition in={true} classNames="login_transition" timeout={{ appear: 50 }} appear>
					<Flex
						pos="absolute"
						alignItems="center"
						justifyContent="center"
						minW="100%"
						minH="100vh"
						bgGradient={{ sm: 'linear(to-r, #1b91d6, #976cbd)' }}
						bg="gray.100"
					/>
				</CSSTransition>
			</Box>

			<Box w="100%" h="100%">
				<Flex alignItems="center" justifyContent="center" minW="100%" minH="100vh" py={{ base: '0', md: '24' }}>
					<Container
						maxW="md"
						zIndex="10"
						py={{ base: '4', sm: '8' }}
						px={{ base: '4', sm: '10' }}
						bg="white"
						boxShadow={{ base: 'none', sm: 'xl' }}
						borderRadius={{ base: 'none', sm: 'xl' }}
						sx={{
							'.login_transition-appear': {
								opacity: 0.01,
							},
							'.login_transition-appear-done': {
								opacity: 1,
								transition: `opacity ${opacityTime} ease-in`,
							},
						}}
					>
						<Stack spacing="8">
							<Stack spacing="6" align="center">
								<Flex alignItems="center" justifyContent="center">
									<Image w="5.5rem" src="/images/logo.png" />
								</Flex>
								<CSSTransition in={true} classNames="login_transition" timeout={{ appear: 50 }} appear>
									<Stack spacing="3" textAlign="center">
										<Heading size="xs">Welcome to app</Heading>
									</Stack>
								</CSSTransition>
							</Stack>
							<CSSTransition in={true} classNames="login_transition" timeout={{ appear: 50 }} appear>
								<Stack spacing="6">
									<Stack spacing="6">
										<FormControl isInvalid={isInvalidToken} mb="15px">
											<InputGroup display="flex" flexDirection="column" gap="5">
												<Input
													isDisabled={loading}
													type="text"
													isInvalid={isInvalidToken}
													errorBorderColor="red.300"
													onChange={ev => {
														handleLoginData({ ...loginData, user: ev.target.value });
													}}
													bg="white"
													placeholder="Login"
												/>
												<Input
													isDisabled={loading}
													type="password"
													isInvalid={isInvalidToken}
													errorBorderColor="red.300"
													onChange={ev => {
														handleLoginData({ ...loginData, password: ev.target.value });
													}}
													bg="white"
													placeholder="Password"
												/>
											</InputGroup>
											<FormErrorMessage pos="absolute">Invalid password or login</FormErrorMessage>
										</FormControl>
										<Button
											isDisabled={loading || !loginData.user || !loginData.password}
											isLoading={loading}
											type="submit"
											onClick={() => {
												dispatch(login(loginData));
											}}
											variant="primary"
										>
											Login
										</Button>
									</Stack>
								</Stack>
							</CSSTransition>
							<CSSTransition in={true} classNames="login_transition" timeout={{ appear: 50 }} appear>
								<Text fontSize="xs" color="subtle" textAlign="center">
									By logging in you agree to our terms of service
								</Text>
							</CSSTransition>
						</Stack>
					</Container>
				</Flex>
			</Box>
		</>
	);
};
export default Login;
