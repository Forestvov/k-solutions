import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { GetLoanCard } from 'components/buisnrss/get-a-loan/get-loan-card';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Pagination } from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    gap: 10px;
    margin-top: 70px;

    @media (max-width: 770px) {
        display: none;
    }
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

/// //////////////////////////

const SliderWrapper = styled(Swiper)`
    display: none;

    @media (max-width: 770px) {
        display: block;
        overflow: visible;
        margin-top: 50px;
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

const GetLoanBusiness: FC = () => {
    const { t } = useTranslation('business-page');

    const cards = [
        {
            id: '1',
            title: t('getAloanCardTitle'),
            text: t('getAloanCardText'),
        },
        {
            id: '2',
            title: t('getAloanCardTitle1'),
            text: t('getAloanCardText1'),
        },
        {
            id: '3',
            title: t('getAloanCardTitle2'),
            text: t('getAloanCardText2'),
        },
        {
            id: '4',
            title: t('getAloanCardTitle3'),
            text: t('getAloanCardText3'),
        },
        {
            id: '5',
            title: t('getAloanCardTitle4'),
            text: t('getAloanCardText4'),
        },
    ];

    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);

    useEffect(() => {
        return () => {
            if (swiperInstance) {
                swiperInstance.destroy();
            }
        };
    }, [swiperInstance]);

    return (
        <Box
            sx={{
                background: 'transparent',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                paddingBottom: { lg: '140px', xl: '120px', sm: '90px', xs: '70px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>{t('getAloanTitle')}</Title>
                <Content>
                    {cards.map((row: any) => (
                        <GetLoanCard key={row.id} row={row} />
                    ))}
                </Content>
                <SliderWrapper {...paramsSlider} onSwiper={(swiper) => setSwiperInstance(swiper)}>
                    {cards.map((row: any) => (
                        <Slide key={row.id}>
                            <GetLoanCard key={row.id} row={row} />
                        </Slide>
                    ))}
                </SliderWrapper>
                <PaginationWrapper className="for-client-pagination" />
            </Inner>
        </Box>
    );
};

export default GetLoanBusiness;
