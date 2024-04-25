import { Outlet } from 'react-router';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import PersonalHeader from 'components/layouts/personal-header';
import PersonalAside from 'components/layouts/personal-aside';

const ProfileLayout = () => {
    return (
        <Stack
            component="main"
            sx={{
                background: '#F6F7F8',
            }}
        >
            <Box sx={{ flex: 1, maxWidth: '1920px', overflow: 'hidden' }}>
                <PersonalHeader />
                <Stack direction="row" spacing={{ lg: '30px', xl: '20px', xs: '0' }}>
                    <PersonalAside />
                    <Stack
                        spacing="30px"
                        sx={{ flex: 1, overflow: 'hidden', padding: { xl: '0 30px 0 0', xs: '0 20px 80px' } }}
                    >
                        <Outlet />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
};

export default ProfileLayout;
