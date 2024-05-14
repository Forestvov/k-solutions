import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CrowdfundingGoalsCard } from 'components/about-platform/crowdfunding-goals/crowdfunding-goals-card';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Title = styled.h2`
    font-size: 48px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin-bottom: 50px;

    @media (max-width: 770px) {
        font-size: 38px;
    }
`;

const cards = [
    {
        id: '1',
        title: '01',
        text: 'Раскрутка стартапов',
    },
    {
        id: '2',
        title: '02',
        text: 'Развитие малого бизнеса',
    },
    {
        id: '3',
        title: '03',
        text: 'Воплощение творческих проектов',
    },
    {
        id: '4',
        title: '04',
        text: 'Развитие новых технологий',
    },
    {
        id: '5',
        title: '05',
        text: 'Решение проблем экологии',
    },
    {
        id: '6',
        title: '06',
        text: 'Популяризация увлечений',
    },
    {
        id: '7',
        title: '07',
        text: 'Благотворительность',
    },
    {
        id: '8',
        title: '08',
        text: 'Развитие новых технологий',
    },
];

const CrowdfundingGoals: FC = () => {
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
                <Title>Цели Краудинвестинга</Title>
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
