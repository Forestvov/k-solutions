import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CrowdfundingGoalsCard } from 'components/about-platform/crowdfunding-goals/crowdfunding-goals-card';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin-bottom: 50px;

    @media (max-width: 770px) {
        font-size: 2.375rem;
    }
`;

const CrowdfundingGoals: FC = () => {
    const { t } = useTranslation('about-platform');

    const cards = [
        {
            id: '1',
            title: '01',
            text: t('croundFundingCardText'),
        },
        {
            id: '2',
            title: '02',
            text: t('croundFundingCardText1'),
        },
        {
            id: '3',
            title: '03',
            text: t('croundFundingCardText2'),
        },
        {
            id: '4',
            title: '04',
            text: t('croundFundingCardText3'),
        },
        {
            id: '5',
            title: '05',
            text: t('croundFundingCardText4'),
        },
        {
            id: '6',
            title: '06',
            text: t('croundFundingCardText5'),
        },
        {
            id: '7',
            title: '07',
            text: t('croundFundingCardText6'),
        },
        {
            id: '8',
            title: '08',
            text: t('croundFundingCardText7'),
        },
    ];

    return (
        <Box
            sx={{
                background: '#F6F7F8',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                paddingBottom: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>{t('croundFundingTitle')}</Title>
                <Box
                    sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' } }}
                    gap={{ xs: '30px', md: '40px 45px' }}
                >
                    {cards.map((row: any) => (
                        <CrowdfundingGoalsCard key={row.id} row={row} />
                    ))}
                </Box>
            </Inner>
        </Box>
    );
};

export default CrowdfundingGoals;
