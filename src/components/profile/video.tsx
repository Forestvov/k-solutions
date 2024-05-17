import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';
import Player from 'components/shared/player';

const Wrapper = styled(WhiteWrapper)`
    margin-bottom: 30px;
`;

const Video = () => {
    return (
        <Wrapper>
            <Player desktop="/desktop-video.mp4" mobile="/mobile-video.mp4" />
        </Wrapper>
    );
};

export default Video;
