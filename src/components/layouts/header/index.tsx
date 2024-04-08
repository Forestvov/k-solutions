import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

import Container from 'components/shared/container';
import Logo from 'assets/header/logo.svg?react';

import HeaderButtons from './header-buttons';
import HeaderNavigation from './header-navigation';
import Stack from '@mui/material/Stack';

const Index = () => {
    return (
        <Box component="header" sx={{ padding: '30px 0' }}>
            <Container>
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
export default Index;
