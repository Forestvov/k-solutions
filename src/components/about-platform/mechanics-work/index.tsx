import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { MechanicsWorkCard } from 'components/about-platform/mechanics-work/mechanics-work-card';

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
    gap: 20px;
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
        font-size: 34px;
        line-height: 50px;
    }
`;

const cards = [
    {
        id: '1',
        title: 'p2p',
        text: 'person to person, когда заемщик и инвесторы — физические лица',
    },
    {
        id: '2',
        title: 'p2b',
        text: 'person to business, когда юридическое лицо привлекает средства физических лиц',
    },
    {
        id: '3',
        title: 'b2b',
        text: 'business to business, когда заемщик и инвесторы — юридические лица',
    },
];

const MechanicsWorkSection: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '720px', xl: '920px', md: '1070px', sm: '1350px', xs: '1300px' },
                background: '#F6F7F8',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>Механика работы и разновидности краудлендинга </Title>
                <Content>
                    {cards.map((row: any) => (
                        <MechanicsWorkCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default MechanicsWorkSection;
