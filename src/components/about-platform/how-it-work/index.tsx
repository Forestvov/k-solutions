import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { HowItWorkCard } from 'components/about-platform/how-it-work/how-it-work-card';

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
        font-size: 38px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const cards = [
    {
        id: '1',
        title: 'Подать заявку на повышение',
        text: 'Расскажите нам о своем бизнесе и стратегии сбора средств. Мы поможем вам решить, является ли краудфандинг подходящим вариантом для вашего бизнеса.',
    },
    {
        id: '2',
        title: 'Подготовка кампании',
        text: 'Мы работаем вместе с вами над созданием привлекательной и соответствующей требованиям рекламной акции.',
    },
    {
        id: '3',
        title: 'Регистрация раннего доступа',
        text: 'Мы приглашаем ваше сообщество и нашу аудиторию предварительно зарегистрироваться для получения раннего доступа к вашему представлению, прежде чем оно станет общедоступным.',
    },
    {
        id: '1',
        title: 'Запуск кампании',
        text: 'Вот тут-то и начинается веселье! Мы нажимаем на курок, ваша презентация становится реальностью, и начинают поступать инвестиции!',
    },
    {
        id: '2',
        title: 'Сбор средств',
        text: 'Мы собираем средства, рассылаем сертификаты акций и выполняем всю юридическую работу, связанную с закрытием вашего раунда.',
    },
    {
        id: '3',
        title: 'Постфинансовая поддержка',
        text: 'Получив финансирование, вы присоединитесь к нашему финансируемому сообществу — группе совместных предприятий, ориентированных на миссию.',
    },
];

const HowItWorkSection: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '950px', xl: '1250px', md: '1270px', sm: '1350px', xs: '2270px' },
                background: 'trnsparent',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                    }}
                >
                    <Title>Как это работает?</Title>
                    <Paragraph>
                        Мы знаем, что проведение краудфандинговой кампании — непростая задача, поэтому давайте разберем
                        ее:
                    </Paragraph>
                </div>
                <Content>
                    {cards.map((row: any) => (
                        <HowItWorkCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default HowItWorkSection;
