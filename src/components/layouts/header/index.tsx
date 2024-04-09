import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Logo from 'assets/header/logo.svg?react';

import HeaderButtons from './header-buttons';
import HeaderNavigation from './header-navigation';

const Header = () => {
    return (
        <Box component="header" sx={{ padding: '30px 0' }}>
            <Container fixed>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                    <HeaderNavigation />
                    <HeaderButtons />
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;
