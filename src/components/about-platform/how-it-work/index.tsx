import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { HowItWorkCard } from 'components/about-platform/how-it-work/how-it-work-card';
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

    @media (max-width: 1280px) {
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 770px) {
        display: none;
    }
`;

const Title = styled.h2`
    font-size: 38px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 28px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

/// ////////////////////

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

const HowItWorkSection: FC = () => {
    const { t } = useTranslation('about-platform');

    const cards = [
        {
            id: '1',
            title: t('HowItWorkCardTitle'),
            text: t('HowItWorkCardText'),
        },
        {
            id: '2',
            title: t('HowItWorkCardTitle1'),
            text: t('HowItWorkCardText1'),
        },
        {
            id: '3',
            title: t('HowItWorkCardTitle2'),
            text: t('HowItWorkCardText2'),
        },
        {
            id: '1',
            title: t('HowItWorkCardTitle3'),
            text: t('HowItWorkCardText3'),
        },
        {
            id: '2',
            title: t('HowItWorkCardTitle4'),
            text: t('HowItWorkCardText4'),
        },
        {
            id: '3',
            title: t('HowItWorkCardTitle5'),
            text: t('HowItWorkCardText5'),
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
                background: 'trnsparent',
                paddingTop: { lg: '100px', xl: '90px', sm: '80px', xs: '70px' },
                paddingBottom: { lg: '100px', xl: '90px', sm: '80px', xs: '70px' },
                overflow: 'hidden',
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
                    <Title>{t('HowItWorkTitle')}</Title>
                    <Paragraph>{t('HowItWorkText')}</Paragraph>
                </div>
                <Content>
                    {cards.map((row: any) => (
                        <HowItWorkCard key={row.id} row={row} />
                    ))}
                </Content>
                <SliderWrapper {...paramsSlider} onSwiper={(swiper) => setSwiperInstance(swiper)}>
                    {cards.map((row: any) => (
                        <Slide key={row.id}>
                            <HowItWorkCard key={row.id} row={row} />
                        </Slide>
                    ))}
                </SliderWrapper>
                <PaginationWrapper className="for-client-pagination" />
            </Inner>
        </Box>
    );
};

export default HowItWorkSection;
