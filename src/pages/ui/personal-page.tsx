import { Helmet } from 'react-helmet-async';
import Stack from '@mui/material/Stack';

import Dashboard from 'components/profile/dashboard';
import Subscribers from 'components/profile/subscribers';
import GeneralStatistics from 'components/profile/general-statistics';
import Events from 'components/profile/events';
import Video from 'components/profile/video';
import Presentations from 'components/profile/presentations';

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
