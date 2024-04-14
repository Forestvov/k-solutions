import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';
import Player from 'components/shared/player';

const Wrapper = styled(WhiteWrapper)`
    margin-bottom: 30px;
`;

const Video = () => {
    return (
        <Wrapper>
            <Player />
        </Wrapper>
    );
};

export default Video;
