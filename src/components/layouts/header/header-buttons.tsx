import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

import HeaderLocalization from './header-localization';

const MyButton = styled(Button)`
    padding: 15px 45px;
`;

const HeaderButtons = () => {
    return (
        <Stack spacing="30px" direction="row" alignItems="center">
            <HeaderLocalization />
            <MyButton variant="gray">Войти</MyButton>
            <MyButton>Начать</MyButton>
        </Stack>
    );
};

export default HeaderButtons;
