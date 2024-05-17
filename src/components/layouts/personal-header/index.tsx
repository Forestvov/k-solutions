import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import Logo from 'assets/header/logo-personal.svg?react';
import HeaderLocalization from 'components/layouts/header/header-localization';

import useDeviceSize from 'hooks/useDeviceSize';

import User from './user';
import Balance from './balance';
import Laggout from './laggout';
import React from 'react';
import Box from '@mui/material/Box';

const HomeLink = styled(NavLink)`
    position: relative;
    z-index: 11;

    svg {
        height: auto;
        width: 200px;
        display: block;
    }

    @media (min-width: 1024px) {
        svg {
            width: 240px;
            height: 30px;
        }
    }

    @media (min-width: 1668px) {
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
                <Box
                    sx={{
                        marginLeft: {
                            md: '30px',
                            xs: '10px',
                        },
                    }}
                >
                    <HeaderLocalization />
                </Box>
                {xl && <Laggout />}
            </Stack>
        </Stack>
    );
};

export default PersonalHeader;
