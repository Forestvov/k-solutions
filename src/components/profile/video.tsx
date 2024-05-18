import { Player } from 'video-react';

import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';

const Wrapper = styled(WhiteWrapper)`
    margin-bottom: 30px;
`;

const Inner = styled.div`
    width: 100%;

    video {
        border-radius: 15px;
    }

    @media (min-width: 1024px) {
        width: 80%;
    }

    @media (min-width: 1668px) {
        video {
            border-radius: 35px;
        }
    }
`;

const Video = () => {
    return (
        <Wrapper>
            <Inner>
                <Player>
                    <source src="/personal-video.mp4" />
                </Player>
            </Inner>
        </Wrapper>
    );
};

export default Video;
