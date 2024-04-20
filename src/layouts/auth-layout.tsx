import { Outlet } from 'react-router';
import Box from '@mui/material/Box';

import BgImage from 'assets/pages/auth/bg-image.jpg';

import AuthHeader from 'components/layouts/auth-header';

const AuthLayout = () => {
    return (
        <Box
            component="main"
            sx={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center, center',
                backgroundSize: 'cover',
                minHeight: '100%',
            }}
        >
            <AuthHeader />
            <Box sx={{ flex: 1, padding: '155px 0 100px' }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default AuthLayout;
