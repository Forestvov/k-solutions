import { Outlet } from 'react-router';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const AdminLayout = () => {
    return (
        <Stack
            component="main"
            sx={{
                height: '100vh',
            }}
        >
            {/* header */}
            <Box sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            {/*  footer */}
        </Stack>
    );
};

export default AdminLayout;
