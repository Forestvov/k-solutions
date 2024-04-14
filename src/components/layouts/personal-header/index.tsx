import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import Logo from 'assets/header/logo-personal.svg?react';

import useDeviceSize from 'hooks/useDeviceSize';

import User from './user';
import Balance from './balance';
import Laggout from './laggout';

const HomeLink = styled(NavLink)`
    svg {
        height: auto;
        width: 200px;
        display: block;
    }
    @media (min-width: 1024px) {
        svg {
            width: 287px;
            height: 36px;
        }
    }
`;

const PersonalHeader = () => {
    const { xl } = useDeviceSize();

    return (
        <Stack
            component="header"
            direction={{ sm: 'row' }}
            alignItems={{ sm: 'center' }}
            justifyContent="space-between"
            spacing={{ xs: '30px', sm: '0' }}
            sx={{
                padding: { xl: '27px 30px 37px', xs: '27px 20px 37px' },
            }}
        >
            <HomeLink to="/">
                <Logo />
            </HomeLink>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <User />
                <Balance />
                {xl && <Laggout />}
            </Stack>
        </Stack>
    );
};

export default PersonalHeader;
