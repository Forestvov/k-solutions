import 'swiper/css';
import { Helmet } from 'react-helmet-async';

import MainBanner from 'components/investors/main-banner';
import InflationRate from 'components/investors/inflation-rate';
import Liquidity from 'components/investors/liquidity';
import InvestInFranchise from 'components/investors/investing-in-franchises';
import OnlineSection from 'components/investors/all-online';
import ShowcasesSection from 'components/investors/showcase';

const InvestorsPage = () => {
    return (
        <>
            <Helmet>
                <title>Инвесторам</title>
            </Helmet>
            <MainBanner />
            <ShowcasesSection />
            <InflationRate />
            <Liquidity />
            <InvestInFranchise />
            <OnlineSection />
        </>
    );
};

export default InvestorsPage;
