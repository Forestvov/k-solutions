import { Player } from 'video-react';

import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';

const Wrapper = styled(WhiteWrapper)`
    margin-bottom: 30px;
`;

const Video = () => {
    return (
        <Wrapper>
            <Player>
                <source src="/personal-video.mp4" />
            </Player>
        </Wrapper>
    );
};

export default Video;
