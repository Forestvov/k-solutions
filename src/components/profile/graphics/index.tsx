import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';

import Title from '../title';
import News from './news';

const List = lazy(() => import('./list'));
const Carousel = lazy(() => import('./carousel'));
const TotalCharts = lazy(() => import('./total-charts'));

const TitleStyled = styled(Title)`
    margin: 20px 0;
`;

const SubTitleStyled = styled(Title)`
    margin: 0 0 73px;
    font-size: 19px;
    line-height: 26px;

    @media (min-width: 768px) {
        font-size: 20px;
    }

    @media (min-width: 1024px) {
        font-size: 22px;
    }

    @media (min-width: 1280px) {
        font-size: 26px;
    }

    @media (min-width: 1668px) {
        font-size: 28px;
    }
`;

const Graphics = () => {
    const { t } = useTranslation('personal');

    return (
        <WhiteWrapper>
            <TitleStyled>{t('Рынки')}</TitleStyled>
            <SubTitleStyled>{t('Объёмы венчурных инвестиций по отраслям')}</SubTitleStyled>
            <List />
            <Carousel />
            <TotalCharts />
            <News />
        </WhiteWrapper>
    );
};

export default Graphics;
