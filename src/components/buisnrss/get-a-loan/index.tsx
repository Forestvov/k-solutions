import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { GetLoanCard } from 'components/buisnrss/get-a-loan/get-loan-card';

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

const cards = [
    {
        id: '1',
        title: 'ШАГ 1',
        text: 'Зарегистрируйтесь на платформе и оформите заявку',
    },
    {
        id: '2',
        title: 'ШАГ 2',
        text: 'После одобрения заявки начните сбор средств',
    },
    {
        id: '3',
        title: 'ШАГ 3',
        text: 'Получите займ на свой банковский счёт по окончании сбора',
    },
    {
        id: '4',
        title: 'ШАГ 4',
        text: 'Договор займа и график платежей будут оформлены онлайн и станут доступны в личном кабинете',
    },
    {
        id: '5',
        title: 'ШАГ 5',
        text: 'Рассчитайтесь с инвесторами и продолжайте развивать ваш бизнес',
    },
];

const GetLoanBusiness: FC = () => {
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
                <Title>Как получить займ?</Title>
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
