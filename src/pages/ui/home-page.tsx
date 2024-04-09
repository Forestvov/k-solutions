import 'swiper/css';

import MainBanner from 'components/home/main-banner';
import Statistics from 'components/home/statistics';
import Video from 'components/home/video';
import Financing from 'components/home/financing';
import ForClients from 'components/home/for-clients';
import Partners from 'components/home/partners';

const HomePage = () => {
    return (
        <>
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
