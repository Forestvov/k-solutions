import type { FC } from 'react';
import type { PropsWitchChildren } from 'global';

import Stack from '@mui/material/Stack';

const FlexWrapper: FC<PropsWitchChildren> = ({ children }) => {
    return (
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing="30px" marginBottom="30px">
            {children}
        </Stack>
    );
};

export default FlexWrapper;
