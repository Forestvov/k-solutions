import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Header from 'components/layouts/header';
import Footer from 'components/layouts/footer';
import { useScrollToTop } from 'helpers/useScrollToTop';

const MainLayout: FC = () => {
    useScrollToTop();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="The activities of are conducted within the obtained permits and are in full compliance with the obtained certificates."
                />
            </Helmet>
            <meta
                name="description"
                content="The activities of are conducted within the obtained permits and are in full compliance with the obtained certificates."
            />
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
        </>
    );
};

export default MainLayout;
