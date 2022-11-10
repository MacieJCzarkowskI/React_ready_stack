import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	HStack,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Portal,
	useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useAppSelector, useAppDispatch } from '../../utils/reduxUtils';
import avatarImage from './avatar.png';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { logout } from '../../features/authorization/actions';

export const Navbar = () => {
	const { user } = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	const { pathname } = useLocation();

	return (
		<Box as="section">
			<Box id="navbar" as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
				<Container p="4" maxW="full">
					<Flex justify="space-between">
						<HStack spacing="4">
							<Image src="/images/logo.png" w="4.5em" />
							<ButtonGroup variant="ghost" spacing="1">
								<Button as={ReactLink} aria-current={pathname === '/' ? 'page' : undefined} to="/">
									Dashboard
								</Button>
								<Button as={ReactLink} to="/">
									Dashboard
								</Button>
								<Button as={ReactLink} to="/">
									Not found
								</Button>
							</ButtonGroup>
						</HStack>
						<HStack spacing="4">
							<ButtonGroup variant="ghost" spacing="1">
								<IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
							</ButtonGroup>
							<Menu>
								<MenuButton>
									<Avatar cursor="pointer" src={avatarImage} boxSize="10" name={user} />
								</MenuButton>
								<Portal>
									<MenuList p="0">
										<MenuItem onClick={handleLogout}>Logout</MenuItem>
									</MenuList>
								</Portal>
							</Menu>
						</HStack>
					</Flex>
				</Container>
			</Box>
		</Box>
	);
};
