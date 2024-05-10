import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { BorrowerCard } from 'components/buisnrss/conditions-borrower/borrower-card';

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
    font-size: 48px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;
`;

const BottomCardTitle = styled.p`
    font-size: 24px;
    color: #373737;
    user-select: none;
    font-weight: 500;
    margin: 0;

    @media (max-width: 1280px) {
        font-size: 18px;
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

const cards = [
    {
        id: '1',
        title: 'Кому можем выдать',
        text: 'Индивидуальному предпринимателю, ООО и АО.',
        size: '150px',
    },
    {
        id: '2',
        title: 'Срок с даты регистрации компании',
        text: 'От 12 месяцев.',
        size: '150px',
    },
    {
        id: '3',
        title: 'Минимальный размер выручки',
        text: 'Среднемесячная выручка от $600 k.',
        size: '150px',
    },
];

const cardsTwo = [
    {
        id: '4',
        title: 'Наличие текущих исполнительных производств на юридическом лице либо бенефициарных владельцах',
        text: 'Не допускается.',
        size: '230px',
    },
    {
        id: '5',
        title: 'Наличие текущих арбитражных дел в качестве ответчика',
        text: 'Не более 1% от суммы выручки за последние 12 месяцев.',
        size: '230px',
    },
    {
        id: '6',
        title: 'Наличие текущих просрочек по юридическому лицу или бенефициарным владельцам',
        text: 'Наличие текущих просрочек по юридическому лицу или бенефициарным владельцам',
        size: '230px',
    },
];

const BorrowerBusiness: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '900px', xl: '900px', sm: '1000px', xs: '1500px' },
                background: '#F6F7F8',
                paddingTop: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Title>Условия и требования к заемщику</Title>
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
                        <BottomCardTitle>Резидентство</BottomCardTitle>
                        <Paragraph>
                            Для ИП — гражданство России. Для ООО — не менее половины уставного капитала принадлежит
                            гражданам России.
                        </Paragraph>
                    </BottomContent>
                </Content>
            </Inner>
        </Box>
    );
};

export default BorrowerBusiness;
