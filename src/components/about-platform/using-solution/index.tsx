import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { UsingSolutionCard } from 'components/about-platform/using-solution/usingSolution-card';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 70px;
`;

const Title = styled.h2`
    font-size: 38px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 28px;
    }
`;

const Span = styled.span`
    font-size: 38px;
    color: #006838;
    user-select: none;
    font-weight: 600;

    @media (max-width: 770px) {
        font-size: 28px;
    }
`;

const UsingSolution: FC = () => {
    const { t } = useTranslation('about-platform');
    const cards = [
        {
            id: '1',
            title: t('usingSolutionCardTitle'),
            text: t('usingSolutionCardtext'),
            label: t('usingSolutionCardlabel'),
        },
        {
            id: '2',
            title: t('usingSolutionCardTitle1'),
            text: t('usingSolutionCardtext1'),
            label: t('usingSolutionCardlabel1'),
        },
    ];

    return (
        <Box
            sx={{
                background: '#F6F7F8',
                paddingTop: { lg: '120px', xl: '90px', sm: '90px', xs: '70px' },
                paddingBottom: { lg: '120px', xl: '90px', sm: '90px', xs: '70px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>
                    {t('usingSolutionTitle')} <Span>{t('usingSolutionTitle1')}</Span> {t('usingSolutionTitle2')}
                </Title>
                <Content>
                    {cards.map((row: any) => (
                        <UsingSolutionCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default UsingSolution;
