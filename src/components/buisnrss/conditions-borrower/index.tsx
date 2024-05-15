import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { BorrowerCard } from 'components/buisnrss/conditions-borrower/borrower-card';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 70px;
`;

const TopContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 170px;
    gap: 10px;

    @media (max-width: 770px) {
        height: 10%;
        flex-wrap: wrap;
    }
`;

const CenterContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 250px;
    gap: 10px;

    @media (max-width: 770px) {
        height: 10%;
        flex-wrap: wrap;
    }
`;

const BottomContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    background: white;
    padding: 25px;
    border-radius: 25px;
    height: 150px;
    gap: 10px;
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 2rem;
    }
`;

const BottomCardTitle = styled.p`
    font-size: 1.5rem;
    color: #373737;
    user-select: none;
    font-weight: 500;
    margin: 0;

    @media (max-width: 1280px) {
        font-size: 1.125rem;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #747474;
    margin: 7px 0 0 0;

    @media (max-width: 1280px) {
        font-size: 12px;
    }
`;

const BorrowerBusiness: FC = () => {
    const { t } = useTranslation('business-page');

    const cards = [
        {
            id: '1',
            title: t('condCardTitle'),
            text: t('condCardText'),
            size: '150px',
        },
        {
            id: '2',
            title: t('condCardTitle1'),
            text: t('condCardText1'),
            size: '150px',
        },
        {
            id: '3',
            title: t('condCardTitle2'),
            text: t('condCardText2'),
            size: '150px',
        },
    ];

    const cardsTwo = [
        {
            id: '4',
            title: t('condCardTitle3'),
            text: t('condCardText3'),
            size: '230px',
        },
        {
            id: '5',
            title: t('condCardTitle4'),
            text: t('condCardText4'),
            size: '230px',
        },
        {
            id: '6',
            title: t('condCardTitle5'),
            text: t('condCardText5'),
            size: '230px',
        },
    ];

    return (
        <Box
            sx={{
                background: '#F6F7F8',
                paddingTop: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                paddingBottom: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Title>{t('condTitle')}</Title>
                <Content>
                    <TopContent>
                        {cards.map((row: any) => (
                            <BorrowerCard key={row.id} row={row} />
                        ))}
                    </TopContent>
                    <CenterContent>
                        {cardsTwo.map((row: any) => (
                            <BorrowerCard key={row.id} row={row} />
                        ))}
                    </CenterContent>
                    <BottomContent>
                        <BottomCardTitle>{t('condBottomCardTitle')}</BottomCardTitle>
                        <Paragraph>{t('condBottomCardText')}</Paragraph>
                    </BottomContent>
                </Content>
            </Inner>
        </Box>
    );
};

export default BorrowerBusiness;
