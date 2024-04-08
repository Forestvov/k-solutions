import type { FC } from 'react';
import Box from '@mui/material/Box';

import Logo from 'assets/pages/home/banner-logo.svg?react';

import Container from 'components/shared/container';

const MainBanner: FC = () => {
    return (
        <Box
            sx={{
                height: 950,
                background: '#F6F7F8',
                paddingTop: '229px',
            }}
        >
            <Container>
                <Logo />
            </Container>
        </Box>
    );
};

export default MainBanner;
