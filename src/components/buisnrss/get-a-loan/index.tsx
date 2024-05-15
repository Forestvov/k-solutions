import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { GetLoanCard } from 'components/buisnrss/get-a-loan/get-loan-card';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 70px;
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 2.375rem;
    }
`;

const GetLoanBusiness: FC = () => {
    const { t } = useTranslation('business-page');

    const cards = [
        {
            id: '1',
            title: t('getAloanCardTitle'),
            text: t('getAloanCardText'),
        },
        {
            id: '2',
            title: t('getAloanCardTitle1'),
            text: t('getAloanCardText1'),
        },
        {
            id: '3',
            title: t('getAloanCardTitle2'),
            text: t('getAloanCardText2'),
        },
        {
            id: '4',
            title: t('getAloanCardTitle3'),
            text: t('getAloanCardText3'),
        },
        {
            id: '5',
            title: t('getAloanCardTitle4'),
            text: t('getAloanCardText4'),
        },
    ];

    return (
        <Box
            sx={{
                height: { lg: '1050px', xl: '1300px', md: '1300px', sm: '2000px', xs: '2000px' },
                background: 'transparent',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>{t('getAloanTitle')}</Title>
                <Content>
                    {cards.map((row: any) => (
                        <GetLoanCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default GetLoanBusiness;
