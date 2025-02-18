import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Title from '../title';

import Assets from './assets';
import AreaAssets from './area-assets';

const TitleStyled = styled(Title)`
    margin: 0 0 54px;
`;

const Wrapper = styled(Stack)`
    > div + div {
        margin-top: 20px;
    }

    @media (min-width: 1800px) {
        > div + div {
            margin-top: -15px;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;

        > div + div {
            margin-top: 0;
        }
    }
`;

const AssetsAndAnalytics = () => {
    const { t } = useTranslation('personal');

    return (
        <div>
            <TitleStyled>{t('Активы и аналитика')}</TitleStyled>
            <Wrapper justifyContent="space-between">
                <Assets />
                <AreaAssets />
            </Wrapper>
        </div>
    );
};

export default AssetsAndAnalytics;
