import type { FC, PropsWithChildren } from 'react';

import Stack from '@mui/material/Stack';

const FlexWrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing="30px" marginBottom="30px">
            {children}
        </Stack>
    );
};

export default FlexWrapper;
