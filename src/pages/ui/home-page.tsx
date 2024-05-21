import 'swiper/css';
import { lazy } from 'react';

import { Helmet } from 'react-helmet-async';

import Statistics from 'components/home/statistics';
import Financing from 'components/home/financing';

const MainBanner = lazy(() => import('components/home/main-banner'));
const Video = lazy(() => import('components/home/video'));
const ForClients = lazy(() => import('components/home/for-clients'));
const Partners = lazy(() => import('components/home/partners'));

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>KSOLUTION</title>
            </Helmet>
            <MainBanner />
            <Statistics />
            <Video />
            <Financing />
            <ForClients />
            <Partners />
        </>
    );
};

export default HomePage;
