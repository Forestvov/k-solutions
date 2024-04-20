import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Logo from 'assets/pages/auth/logo.svg?react';
import Exit from 'assets/pages/auth/exit.svg?react';

const LogoLink = styled(NavLink)`
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        opacity: 0.8;
    }
`;

const ExitButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        opacity: 0.8;
    }
`;

const AuthHeader = () => {
    return (
        <Container sx={{ padding: '35px 24px 0' }}>
            <Stack component="header" direction="row" alignItems="center" justifyContent="space-between">
                <LogoLink to="/">
                    <Logo />
                </LogoLink>
                <ExitButton>
                    <Exit />
                </ExitButton>
            </Stack>
        </Container>
    );
};

export default AuthHeader;
