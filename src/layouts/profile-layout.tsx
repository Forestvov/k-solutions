import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import PersonalHeader from 'components/layouts/personal-header';
import PersonalAside from 'components/layouts/personal-aside';
import { useScrollToTop } from 'helpers/useScrollToTop';

const Link = styled(NavLink)`
    position: fixed;
    right: 20px;
    bottom: 100px;
    font-size: 16px;
    text-decoration: none;
    color: #000;
    background: #fff;
    padding: 5px 10px;
    border-radius: 12px;
    box-shadow: 2px 1px 8px -3px rgba(0, 0, 0, 0.1);

    @media (min-width: 1280px) {
        bottom: 20px;
    }
`;

const ProfileLayout = () => {
    useScrollToTop();

    const { userId } = useParams();

    return (
        <Stack
            component="main"
            sx={{
                position: 'relative',
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
                {userId && <Link to="/admin/user">Обратно в админ панель</Link>}
            </Box>
        </Stack>
    );
};

export default ProfileLayout;
