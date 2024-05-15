import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// img
import ShowCasesImg from 'assets/pages/investors/ShowCasesIm.png';
import ShowCasesImg2 from 'assets/pages/investors/ShowCasesIm2.png';
import ShowCasesImg3 from 'assets/pages/investors/ShowCasesIm3.png';
import ShowCasesImg4 from 'assets/pages/investors/ShowCasesIm4.png';

import 'swiper/css';
import 'swiper/css/pagination';

import ShowCasesCard from 'components/investors/showcase/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Pagination } from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { useEffect, useState } from 'react';
import CarouselButtonArrows from 'components/home/for-clients/carousel-button-arrows';
import { useTranslation } from 'react-i18next';

const Title = styled.h2`
    font-size: 48px;
    color: #373737;
    user-select: none;
    font-weight: 600;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
        font-size: 38px;
    }
`;

const Inner = styled.div`
    overflow: hidden;

    .for-client-navigation,
    .for-client-pagination {
        display: none;
    }

    &:hover .for-client-navigation,
    &:hover .for-client-pagination {
        opacity: 1;
        pointer-events: auto;
    }

    @media (min-width: 1042px) {
        .for-client-navigation {
            display: block;
        }
        .for-client-pagination {
            display: flex;
        }
    }
`;

const SliderWrapper = styled(Swiper)`
    overflow: visible;

    @media (min-width: 770px) {
        overflow: hidden;
    }
`;

const Slide = styled(SwiperSlide)`
    min-width: 288px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PaginationWrapper = styled.div`
    opacity: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: 17px;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    @media (min-width: 1280px) {
        margin-top: 45px;
    }

    .for-client-pagination-button {
        width: 9px;
        height: 9px;
        padding: 0;
        border: none;
        margin: 0 5px;
        display: block;
        border-radius: 50%;
        background: #d9d9d9;
        cursor: pointer;
        transition:
            background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &:hover {
            background: #006838;
        }
    }

    .for-client-pagination-button-active {
        transform: scale(1.9);
        background: #006838;
    }
`;

const paramsSlider: SwiperOptions = {
    loop: true,
    centeredSlides: true,
    modules: [Navigation, Pagination],
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1670: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    pagination: {
        el: '.for-client-pagination',
        bulletClass: 'for-client-pagination-button',
        bulletActiveClass: 'for-client-pagination-button-active',
        clickable: true,
        renderBullet: function () {
            return `<button class="for-client-pagination-button"/>`;
        },
    },
};

const ShowcasesSection: FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);

    useEffect(() => {
        return () => {
            if (swiperInstance) {
                swiperInstance.destroy();
            }
        };
    }, [swiperInstance]);

    const { t } = useTranslation('investor-page');

    const cardsItems = [
        {
            id: '1',
            sum2: '35 500 000$',
            invSum: '1.70$',
            sum: '642,440.00',
            sum3: '748',
            title: 'Gravitricity',
            img: ShowCasesImg,
            label: t('Новаторский разработчик'),
        },
        {
            id: '2',
            sum2: '20 000 000$',
            invSum: '12.37$',
            sum: '1 234 188$',
            sum3: '667',
            title: 'QPT',
            img: ShowCasesImg2,
            label: t('Электродвигатели потребляют'),
        },
        {
            id: '3',
            sum2: '84 000 000$',
            invSum: '4,35$',
            sum: '6 402 908$',
            sum3: '905',
            title: 'Metaview',
            img: ShowCasesImg3,
            label: t('ИИ-помощник'),
        },
        {
            id: '4',
            sum2: '10 566 200$',
            invSum: '1,59$',
            sum: '238 070$',
            sum3: '311',
            title: 'CELL',
            img: ShowCasesImg4,
            label: t('Белковые препараты'),
        },
    ];

    return (
        <Box
            sx={{
                height: { lg: '1065px', md: '965px', xl: '1065px', sm: '965px', xs: '865px' },
                background: 'transparent',
                paddingTop: { lg: '50px', xl: '30px', sm: '20px', xs: '10px' },
                overflow: 'hidden',
            }}
        >
            <Inner>
                <Container fixed sx={{ position: 'relative' }}>
                    <Title>{t('Витрина')}</Title>
                    {swiperInstance && <CarouselButtonArrows instance={swiperInstance} />}
                    <SliderWrapper {...paramsSlider} onSwiper={(swiper) => setSwiperInstance(swiper)}>
                        {cardsItems.map((row: any) => (
                            <Slide key={row.id}>
                                <ShowCasesCard row={row} />
                            </Slide>
                        ))}
                    </SliderWrapper>
                    <PaginationWrapper className="for-client-pagination" />
                </Container>
            </Inner>
        </Box>
    );
};

export default ShowcasesSection;
