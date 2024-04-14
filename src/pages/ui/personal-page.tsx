import Dashboard from 'components/profile/dashboard';
import Subscribers from 'components/profile/subscribers';
import FlexWrapper from 'components/profile/flex-wrapper';
import GeneralStatistics from 'components/profile/general-statistics';
import Events from 'components/profile/events';
import Video from 'components/profile/video';
import Presentations from 'components/profile/presentations';

const PersonalPage = () => {
    return (
        <div>
            <Dashboard />
            <Subscribers />
            <FlexWrapper>
                <GeneralStatistics />
                <Events />
            </FlexWrapper>
            <Video />
            <Presentations />
        </div>
    );
};

export default PersonalPage;
