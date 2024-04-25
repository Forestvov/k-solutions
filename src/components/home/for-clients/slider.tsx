import { useEffect, useState } from 'react';
import type { SwiperOptions } from 'swiper/types';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Container from '@mui/material/Container';
import styled from '@emotion/styled';

import { slides } from './data/slides';

import Item from './item';
import CarouselButtonArrows from './carousel-button-arrows';

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

    @media (min-width: 1024px) {
        overflow: hidden;
    }
`;

const Slide = styled(SwiperSlide)`
    min-width: 288px;
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
    modules: [Navigation, Pagination],
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
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

const Slider = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);

    useEffect(() => {
        return () => {
            if (swiperInstance) {
                swiperInstance.destroy();
            }
        };
    }, [swiperInstance]);

    return (
        <Inner>
            <Container fixed sx={{ position: 'relative' }}>
                {swiperInstance && <CarouselButtonArrows instance={swiperInstance} />}
                <SliderWrapper {...paramsSlider} onSwiper={(swiper) => setSwiperInstance(swiper)}>
                    {slides.map((slide, idx) => (
                        <Slide key={idx}>
                            <Item {...slide} />
                        </Slide>
                    ))}
                </SliderWrapper>
                <PaginationWrapper className="for-client-pagination" />
            </Container>
        </Inner>
    );
};

export default Slider;
