import 'swiper/css';
import { Helmet } from 'react-helmet-async';

import AboutPlatformMainBanner from 'components/about-platform/main-banner';
import UsingSolution from 'components/about-platform/using-solution';
import CrowdlendingSection from 'components/about-platform/crowdlending';
import MechanicsWorkSection from 'components/about-platform/mechanics-work';
import CommandSection from 'components/about-platform/largest-command';
import CrowdfundingGoals from 'components/about-platform/crowdfunding-goals';
import HowItWorkSection from 'components/about-platform/how-it-work';
const AboutPlatformPage = () => {
    return (
        <>
            <Helmet>
                <title>О платформе</title>
            </Helmet>
            <AboutPlatformMainBanner />
            <UsingSolution />
            <CrowdlendingSection />
            <MechanicsWorkSection />
            <CommandSection />
            <CrowdfundingGoals />
            <HowItWorkSection />
        </>
    );
};

export default AboutPlatformPage;
