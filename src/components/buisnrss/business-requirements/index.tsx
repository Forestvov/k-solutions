import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { RequirementsCard } from 'components/buisnrss/business-requirements/requirements-card';

import reqImg from '../../../assets/pages/businessPage/Sloj.png';

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

const BottomCard = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 25px 30px;
    border-radius: 20px;
    background: white;
    align-items: center;
    gap: 10px;
    margin-top: 50px;

    @media (max-width: 1024px) {
        display: none;
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
        font-size: 38px;
    }
`;

const BottomCardTitle = styled.p`
    font-size: 38px;
    color: #373737;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    margin: 0;

    @media (max-width: 1280px) {
        font-size: 28px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Label = styled.p`
    font-size: 40px;
    color: #006838;
    user-select: none;
    font-weight: 500;
    margin-bottom: 250px;

    @media (max-width: 770px) {
        display: none;
    }
`;

const Image = styled.img`
    position: absolute;
    left: 39%;
    bottom: 0;
    right: 50%;
`;

const Line = styled.div`
    width: 70px;
    height: 3px;
    background: #006838;
    border-radius: 10px;
`;

const cards = [
    {
        id: '1',
        title: 'Среднемесячная выручка',
        text: 'Среднемесячная безналичная выручка за последние 12 месяцев больше 600 тыс ₽',
        label: '≥$600 тыс.',
    },
    {
        id: '2',
        title: 'Регистрация компании',
        text: 'Срок регистрации юридического лица более 12 месяцев.',
        label: '≥12 месяцев',
    },
];

const RequirementsBusiness: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '1200px', xl: '1200px', md: '1500px', sm: '1000px', xs: '1000px' },
                background: '#F6F7F8',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>Требования к бизнесу</Title>
                <Content>
                    {cards.map((row: any) => (
                        <RequirementsCard key={row.id} row={row} />
                    ))}
                    <BottomCard>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '450px',
                                flexDirection: 'column',
                            }}
                        >
                            <BottomCardTitle>Кредитная история бизнеса</BottomCardTitle>
                            <Line />
                            <Paragraph>
                                Отсутствуют текущие просрочки, арбитражи в качестве ответчика и непогашенные
                                исполнительные листы
                            </Paragraph>
                        </div>
                        <Image src={reqImg} />
                        <div>
                            <Label>≥Нейтральная</Label>
                        </div>
                    </BottomCard>
                </Content>
            </Inner>
        </Box>
    );
};

export default RequirementsBusiness;
