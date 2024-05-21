import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ConditionCard } from 'components/buisnrss/conditions-business/condition-card';
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
    gap: 15px;
    margin-top: 40px;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 2rem;
    }
`;

const ConditionsBusiness: FC = () => {
    const { t } = useTranslation('business-page');

    const cards = [
        {
            id: '1',
            title: t('Моментальное решение'),
            text: t('Решение о финансировании по двум документам'),
            label: t('Решение 24/7 за'),
            count: t('3 минуты'),
        },
        {
            id: '2',
            title: t('Постоянно растущий лимит'),
            text: t('При соблюдении финансовой дисциплины и доступной кредитоемкости бизнеса'),
            label: t('Лимит до'),
            count: t('56,9 млн$'),
        },
        {
            id: '3',
            title: t('Ставка по займу на уровне или ниже, чем в банках'),
            text: t('Ставка 18,1% доступна для наиболее надежных компаний'),
            label: t('Ставка от'),
            count: t('18,1%'),
        },
        {
            id: '4',
            title: t('Возобновляемая линия займов'),
            text: t(
                'Неограниченное количество траншей в удобное время без дополнительного одобрения в пределах лимита'
            ),
            label: t('Количество траншей'),
            count: '∞',
        },
    ];

    return (
        <Box
            sx={{
                background: '#F6F7F8',
                paddingTop: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                paddingBottom: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>
                    {t('Лучшие условия на рынке')}
                    <br /> {t('финансирования бизнеса')}
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
