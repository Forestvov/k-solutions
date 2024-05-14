import { Outlet } from 'react-router';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import PersonalHeader from 'components/layouts/personal-header';
import PersonalAside from 'components/layouts/personal-aside';
import { useScrollToTop } from 'helpers/useScrollToTop';
import { useLocation } from 'react-router-dom';

const ProfileLayout = () => {
    useScrollToTop();

    const location = useLocation();

    return (
        <Stack
            component="main"
            sx={{
                position: 'relative',
                background: '#F6F7F8',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    overflow: location.pathname.includes('/showcases') ? 'visible' : 'hidden',
                    maxWidth: '1920px',
                }}
            >
                <PersonalHeader />
                <Stack direction="row" spacing={{ lg: '30px', xl: '20px', xs: '0' }}>
                    <PersonalAside />
                    <Stack
                        spacing="30px"
                        sx={{
                            flex: 1,
                            overflow: location.pathname.includes('/showcases') ? 'visible' : 'hidden',
                            padding: { xl: '0 30px 0 0', xs: '0 20px 80px' },
                        }}
                    >
                        <Outlet />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
};

export default ProfileLayout;
