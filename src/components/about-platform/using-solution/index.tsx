import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { UsingSolutionCard } from 'components/about-platform/using-solution/usingSolution-card';

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

const Span = styled.span`
    font-size: 3rem;
    color: #006838;
    user-select: none;
    font-weight: 600;

    @media (max-width: 770px) {
        font-size: 2.625rem;
    }
`;

const cards = [
    {
        id: '1',
        title: 'Инвесторы',
        text: 'Смогут получить привлекательную доходность на свой капитал',
        label: 'Стать инвестором',
    },
    {
        id: '2',
        title: 'Бизнес',
        text: 'Получает доступ к быстрому, удобному и прозрачному финансированию',
        label: 'Подать заявку',
    },
];

const UsingSolution: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '720px', xl: '720px', md: '1000px', sm: '1050px', xs: '1050px' },
                background: '#F6F7F8',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>
                    Используя <Span>KSOLUTIONS</Span> как платформу
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
