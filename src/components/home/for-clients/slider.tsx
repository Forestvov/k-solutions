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
    &:hover .for-client-navigation,
    &:hover .for-client-pagination {
        opacity: 1;
        pointer-events: auto;
    }
`;

const PaginationWrapper = styled.div`
    opacity: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    height: 17px;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

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
    }

    .for-client-pagination-button-active {
        transform: scale(1.9);
        background: #006838;
    }
`;

const paramsSlider: SwiperOptions = {
    loop: true,
    modules: [Navigation, Pagination],
    spaceBetween: 40,
    slidesPerView: 2,
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
    }, []);

    return (
        <Inner>
            <Container fixed sx={{ position: 'relative' }}>
                {swiperInstance && <CarouselButtonArrows instance={swiperInstance} />}
                <Swiper {...paramsSlider} onSwiper={(swiper) => setSwiperInstance(swiper)}>
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <Item {...slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <PaginationWrapper className="for-client-pagination" />
            </Container>
        </Inner>
    );
};

export default Slider;
