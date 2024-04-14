import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Navigation from '../navigation';
import Laggout from '../laggout';

const Wrapper = styled(Stack)`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 80px;
    z-index: 22;
    box-shadow: -1px -9px 34px -15px rgba(0, 0, 0, 0.1);
    border-radius: 20px 20px 0 0;
`;

const LaggoutBlock = styled.div`
    button {
        transform: translateY(2.5px);
        color: #595959;
    }
`;

const Mobile = () => {
    return (
        <Wrapper direction="row" justifyContent="center" alignItems="center" spacing={{ xs: '15px' }}>
            <Navigation />
            <LaggoutBlock>
                <Laggout />
            </LaggoutBlock>
        </Wrapper>
    );
};

export default Mobile;
