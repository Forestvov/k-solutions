import type { FC } from 'react';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

import HeaderLocalization from './header-localization';

interface Prop {
    hideLocalization?: boolean;
}

const MyButton = styled(Button)`
    padding: 15px 45px;
`;

const HeaderButtons: FC<Prop> = ({ hideLocalization }) => {
    return (
        <Stack
            spacing={{ lg: '30px', xs: '20px' }}
            justifyContent={{ xs: 'space-between', xl: 'flex-start' }}
            direction={{ sm: 'row' }}
            alignItems="center"
            sx={{ marginBottom: { xs: '30px', xl: '0' } }}
        >
            {!hideLocalization && <HeaderLocalization />}
            <MyButton sx={{ width: { xs: '100%', xl: 'auto' } }} variant="gray">
                Войти
            </MyButton>
            <MyButton sx={{ width: { xs: '100%', xl: 'auto' } }}>Начать</MyButton>
        </Stack>
    );
};

export default HeaderButtons;
