import React from 'react';
import Stack from '@mui/material/Stack';

import HeaderLocalization from '../header-localization';
import { HeaderBurger } from '../header-burger';

const Mobile = () => {
    return (
        <Stack direction="row" alignItems="center" spacing="20px">
            <HeaderLocalization />
            <HeaderBurger />
        </Stack>
    );
};

export default Mobile;
