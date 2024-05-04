import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Title from '../title';

import Assets from './assets';
import AreaAssets from './area-assets';

const TitleStyled = styled(Title)`
    margin: 0 0 54px;
`;

const Wrapper = styled(Stack)`
    flex-direction: column;

    > div + div {
        margin-top: 40px;
    }

    @media (min-width: 1800px) {
        flex-direction: row;

        > div + div {
            margin-left: 60px;
        }
    }
`;

const AssetsAndAnalytics = () => {
    return (
        <div>
            <TitleStyled>Активы и аналитика</TitleStyled>
            <Wrapper justifyContent="space-between">
                <Assets />
                <AreaAssets />
            </Wrapper>
        </div>
    );
};

export default AssetsAndAnalytics;
