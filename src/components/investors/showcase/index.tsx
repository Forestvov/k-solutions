import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// img
import ShowCasesImg from 'assets/pages/investors/showcaseImg.png';
import ShowCasesImg2 from 'assets/pages/investors/ShowCasesImg22.png';
import ShowCasesImg3 from 'assets/pages/investors/ShowCasesImg33.png';
import ShowCasesImg4 from 'assets/pages/investors/ShowCasesImg44.png';

import 'swiper/css';
import 'swiper/css/pagination';

import ShowCasesCard from 'components/investors/showcase/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

const Inner = styled(Container)`
    height: 100%;
`;

const SliderContainer = styled(Swiper)`
    width: 100%;
    padding-left: 20%;

    @media (max-width: 500px) {
        padding-left: 10%;
    }

    @media (max-width: 420px) {
        padding-left: 5%;
    }

    @media (max-width: 380px) {
        padding-left: 2%;
    }
`;

const ShowcaseList = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
`;

const Title = styled.h2`
    margin: 0 auto;
    font-size: 48px;
    color: #373737;
    user-select: none;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 38px;
    }
`;

const cardsItems = [
    {
        id: '1',
        sum2: '35 500 000$',
        invSum: '1.70$',
        sum: '642,440.00',
        sum3: '748',
        title: 'Gravitricity',
        img: ShowCasesImg,
        label: 'Новаторский разработчик инновационных, долговечных подземных накопителей энергии, которые помогут поддержать переход на 100% возобновляемую энергию. Они разрабатывают технологии для надежного хранения энергии и водорода и сейчас занимаются строительством двух демонстрационных проектов.',
    },
    {
        id: '2',
        sum2: '20 000 000$',
        invSum: '12.37$',
        sum: '1 234 188$',
        sum3: '667',
        title: 'QPT',
        img: ShowCasesImg2,
        label: 'Электродвигатели потребляют до 45% мировой энергии. Решение QPT призвано снизить этот показатель на 10%, а также снизить потребление энергии и выбросы CO2. Использование транзисторов из нитрида галлия (GaN) является ключевым моментом. В QPT считают, что они первыми решили проблемы.\n',
    },
    {
        id: '3',
        sum2: '84 000 000$',
        invSum: '4,35$',
        sum: '6 402 908$',
        sum3: '905',
        title: 'Metaview',
        img: ShowCasesImg3,
        label: 'ИИ-помощник, который помогает командам избавиться от администрирования и тяжкой работы в процессе найма Финансирование использовано для ускорения разработки продукта и роста команды, включая утроение команды инженеров в течение следующих 18 месяцев.',
    },
    {
        id: '4',
        sum2: '10 566 200$',
        invSum: '1,59$',
        sum: '238 070$',
        sum3: '311',
        title: 'CELL',
        img: ShowCasesImg4,
        label: 'Белковые препараты хорошо действуют при некоторых видах рака. Но они большие и могут с трудом прорвать защиту рака и достичь опасных опухолевых углублений. Мы тестируем проникающие в опухоль иммунные клетки, чтобы активно доставлять лекарства глубоко в опухоли, стремясь радикально улучшить прогноз для большего числа онкологических больных.',
    },
];

const ShowcasesSection: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '1065px', md: '965px', xl: '1065px', sm: '965px', xs: '905px' },
                background: 'transparent',
                paddingTop: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
                overflow: 'hidden',
            }}
        >
            <Inner>
                <Title>Витрина</Title>
                <ShowcaseList>
                    <SliderContainer
                        spaceBetween={50}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination]}
                    >
                        {cardsItems.map((row: any) => (
                            <SwiperSlide key={row.id}>
                                <ShowCasesCard row={row} />
                            </SwiperSlide>
                        ))}
                    </SliderContainer>
                </ShowcaseList>
            </Inner>
        </Box>
    );
};

export default ShowcasesSection;
