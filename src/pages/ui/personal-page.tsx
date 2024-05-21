import 'swiper/css';
import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Stack from '@mui/material/Stack';

import Subscribers from 'components/profile/subscribers';
import GeneralStatistics from 'components/profile/general-statistics';
import Events from 'components/profile/events';

const Dashboard = lazy(() => import('components/profile/dashboard'));
const Video = lazy(() => import('components/profile/video'));
const Presentations = lazy(() => import('components/profile/presentations'));

const PersonalPage = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div>
                <Dashboard />
                <Subscribers />
                <Stack direction={{ xs: 'column', md: 'row' }} spacing="30px" marginBottom="30px">
                    <GeneralStatistics />
                    <Events />
                </Stack>
                <Video />
                <Presentations />
            </div>
        </>
    );
};

export default PersonalPage;
