import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { HowItWorkCard } from 'components/about-platform/how-it-work/how-it-work-card';
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

    @media (max-width: 1280px) {
        width: 100%;
        justify-content: center;
    }
`;

const Title = styled.h2`
    font-size: 48px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 38px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const HowItWorkSection: FC = () => {
    const { t } = useTranslation('about-platform');

    const cards = [
        {
            id: '1',
            title: t('HowItWorkCardTitle'),
            text: t('HowItWorkCardText'),
        },
        {
            id: '2',
            title: t('HowItWorkCardTitle1'),
            text: t('HowItWorkCardText1'),
        },
        {
            id: '3',
            title: t('HowItWorkCardTitle2'),
            text: t('HowItWorkCardText2'),
        },
        {
            id: '1',
            title: t('HowItWorkCardTitle3'),
            text: t('HowItWorkCardText3'),
        },
        {
            id: '2',
            title: t('HowItWorkCardTitle4'),
            text: t('HowItWorkCardText4'),
        },
        {
            id: '3',
            title: t('HowItWorkCardTitle5'),
            text: t('HowItWorkCardText5'),
        },
    ];

    return (
        <Box
            sx={{
                height: { lg: '950px', xl: '1250px', md: '1270px', sm: '1350px', xs: '2270px' },
                background: 'trnsparent',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                    }}
                >
                    <Title>{t('HowItWorkTitle')}</Title>
                    <Paragraph>{t('HowItWorkText')}</Paragraph>
                </div>
                <Content>
                    {cards.map((row: any) => (
                        <HowItWorkCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default HowItWorkSection;
