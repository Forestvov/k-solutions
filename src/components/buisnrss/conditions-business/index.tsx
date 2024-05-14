import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ConditionCard } from 'components/buisnrss/conditions-business/condition-card';

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
        font-size: 2.125rem;
    }
`;

const cards = [
    {
        id: '1',
        title: 'Моментальное решение',
        text: 'Решение о финансировании по двум документам',
        label: 'Решение 24/7 за',
        count: '3 минуты',
    },
    {
        id: '2',
        title: 'Постоянно растущий лимит',
        text: 'При соблюдении финансовой дисциплины и доступной кредитоемкости бизнеса',
        label: 'Лимит до',
        count: '56,9 млн$',
    },
    {
        id: '3',
        title: 'Ставка по займу на уровне или ниже, чем в банках',
        text: 'Ставка 18,1% доступна для наиболее надежных компаний',
        label: 'Ставка от',
        count: '18,1%',
    },
    {
        id: '4',
        title: 'Возобновляемая линия займов',
        text: 'Неограниченное количество траншей в удобное время без дополнительного одобрения в пределах лимита.',
        label: 'Количество траншей',
        count: '∞',
    },
];

const ConditionsBusiness: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '1450px', xl: '1400px', sm: '1400px', xs: '2200px' },
                background: '#F6F7F8',
                paddingTop: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>
                    Лучшие условия на рынке
                    <br /> финансирования бизнеса
                </Title>
                <Content>
                    {cards.map((row: any) => (
                        <ConditionCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default ConditionsBusiness;
