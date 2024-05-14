import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { LargestCommandCard } from 'components/about-platform/largest-command/largest-command-card';

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
        font-size: 2rem;
    }
`;

const cards = [
    {
        id: '1',
        title: 'Собранно средств',
        text: 'Мы собрали средства для более чем 1300 европейских предприятий и СНГ, управляемых сообществом.\n',
        label: '≥1300',
    },
    {
        id: '2',
        title: 'Собранно для компаний',
        text: 'В среднем мы собрали 450 000$ для каждой кампании на нашей платформе в первом полугодии 2023 года.',
        label: '≈$450 тыс.',
    },
    {
        id: '3',
        title: 'Поддерживаем',
        text: 'Мы поддерживаем 28 из 30 самых популярных краудфандинговых кампаний в Европе.',
        label: '28 из 30',
    },
    {
        id: '4',
        title: 'Инвестировала',
        text: 'Наша команда инвестировала более 1 миллиарда долларов в социально-ориентированный бизнес.\n',
        label: '≥$1 млрд.',
    },
];

const CommandSection: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '1050px', xl: '1050px', md: '1770px', sm: '1770px', xs: '1950px' },
                background: 'transparent',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>Мы — наиболее успешная Краудлендинговая платформа</Title>
                <Content>
                    {cards.map((row: any) => (
                        <LargestCommandCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default CommandSection;
