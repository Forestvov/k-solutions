import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Logo from 'assets/header/logo.svg?react';

import Desktop from './view/desktop';
import Mobile from './view/mobile';

const Link = styled(NavLink)`
    position: relative;
    z-index: 101;
    transition: opacity 0.185s ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    svg {
        height: auto;
        width: 145px;

        @media (min-width: 768px) {
            width: 160px;
            height: 21px;
        }
    }
`;

const Header = () => {
    const isDesktop = useMediaQuery('(min-width:1280px)');

    return (
        <Box component="header" sx={{ padding: { xl: '30px 0', xs: '10px 0' } }}>
            <Container fixed>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Link to="/">
                        <Logo />
                    </Link>
                    {isDesktop ? <Desktop /> : <Mobile />}
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;
