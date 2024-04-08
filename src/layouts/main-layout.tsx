import type { FC } from 'react';
import { Outlet } from 'react-router';
import Box from '@mui/material/Box';

import Header from 'components/layouts/header';
import Footer from 'components/layouts/footer';
import Stack from '@mui/material/Stack';

const MainLayout: FC = () => {
    return (
        <Stack
            component="main"
            sx={{
                height: '100vh',
            }}
        >
            <Header />
            <Box sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            <Footer />
        </Stack>
    );
};

export default MainLayout;
