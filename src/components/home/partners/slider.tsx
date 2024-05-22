import type { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

import { slides } from './data/slides';

const paramsSlider: SwiperOptions = {
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    modules: [Autoplay],
    spaceBetween: 73,
    slidesPerView: 'auto',
    allowTouchMove: false,
    speed: 9000,
    touchMoveStopPropagation: false,
    grabCursor: false,

    breakpoints: {
        320: {
            spaceBetween: 40,
        },
        768: {
            spaceBetween: 50,
        },
        1024: {
            spaceBetween: 73,
        },
    },
};

const SliderWrapper = styled(Swiper)`
    .swiper-wrapper {
        align-items: center;
        transition-timing-function: linear;
    }
`;

const Slide = styled(SwiperSlide)`
    width: fit-content !important;
`;

const Slider = () => {
    return (
        <SliderWrapper {...paramsSlider}>
            {slides.map((slide, idx) => (
                <Slide key={idx}>
                    <img src={slide} alt="partner" />
                </Slide>
            ))}
        </SliderWrapper>
    );
};

export default Slider;
