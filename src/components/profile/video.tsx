import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';
import Player from 'components/shared/player';

import VideoDesktop from 'assets/desktop-video.mp4';
import VideoMobile from 'assets/mobile-video.mp4';

const Wrapper = styled(WhiteWrapper)`
    margin-bottom: 30px;
`;

const Video = () => {
    return (
        <Wrapper>
            <Player desktop={VideoDesktop} mobile={VideoMobile} />
        </Wrapper>
    );
};

export default Video;
