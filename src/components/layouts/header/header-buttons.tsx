import type { FC } from 'react';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

import { useRouter } from 'context/auth/hooks/useRouter';

import HeaderLocalization from './header-localization';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';

interface Prop {
    hideLocalization?: boolean;
}

const MyButton = styled(Button)`
    padding: 15px 45px;
`;

const HeaderButtons: FC<Prop> = ({ hideLocalization }) => {
    const router = useRouter();

    // @ts-ignore
    const { authenticated } = useAuthContext();

    return (
        <Stack
            spacing={{ lg: '30px', xs: '20px' }}
            justifyContent={{ xs: 'space-between', xl: 'flex-start' }}
            direction={{ sm: 'row' }}
            alignItems="center"
            sx={{ marginBottom: { xs: '30px', xl: '0' } }}
        >
            {!hideLocalization && <HeaderLocalization />}
            {authenticated ? (
                <Button
                    sx={{ width: { xs: '100%', xl: 'auto' }, padding: '0', background: 'transparent !important' }}
                    variant="gray"
                    onClick={() => router.push('/personal')}
                >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="#F6F7F8" />
                        <path
                            d="M33 34V32C33 30.9391 32.5786 29.9217 31.8284 29.1716C31.0783 28.4214 30.0609 28 29 28H21C19.9391 28 18.9217 28.4214 18.1716 29.1716C17.4214 29.9217 17 30.9391 17 32V34"
                            stroke="#494949"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M25 24C27.2091 24 29 22.2091 29 20C29 17.7909 27.2091 16 25 16C22.7909 16 21 17.7909 21 20C21 22.2091 22.7909 24 25 24Z"
                            stroke="#494949"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
            ) : (
                <>
                    <MyButton
                        sx={{ width: { xs: '100%', xl: 'auto' } }}
                        variant="gray"
                        onClick={() => router.push('/login')}
                    >
                        Войти
                    </MyButton>
                    <MyButton sx={{ width: { xs: '100%', xl: 'auto' } }} onClick={() => router.push('/register')}>
                        Начать
                    </MyButton>
                </>
            )}
        </Stack>
    );
};

export default HeaderButtons;
