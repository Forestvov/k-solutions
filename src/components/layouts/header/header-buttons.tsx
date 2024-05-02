import type { FC } from 'react';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

import { useRouter } from 'context/auth/hooks/useRouter';

import HeaderLocalization from './header-localization';

interface Prop {
    hideLocalization?: boolean;
}

const MyButton = styled(Button)`
    padding: 15px 45px;
`;

const HeaderButtons: FC<Prop> = ({ hideLocalization }) => {
    const router = useRouter();

    return (
        <Stack
            spacing={{ lg: '30px', xs: '20px' }}
            justifyContent={{ xs: 'space-between', xl: 'flex-start' }}
            direction={{ sm: 'row' }}
            alignItems="center"
            sx={{ marginBottom: { xs: '30px', xl: '0' } }}
        >
            {!hideLocalization && <HeaderLocalization />}
            <MyButton sx={{ width: { xs: '100%', xl: 'auto' } }} variant="gray" onClick={() => router.push('/login')}>
                Войти
            </MyButton>
            <MyButton sx={{ width: { xs: '100%', xl: 'auto' } }} onClick={() => router.push('/register')}>
                Начать
            </MyButton>
        </Stack>
    );
};

export default HeaderButtons;
