import React, { useState } from 'react';
import styled from '@emotion/styled';

import type { SwiperOptions } from 'swiper/types';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from 'assets/moc/slide-1.jpg';
import img2 from 'assets/moc/slide-2.jpg';
import img3 from 'assets/moc/3.jpg';

import IconArrowLeft from 'assets/arrows/big-arrow-left.svg?react';
import IconArrowRight from 'assets/arrows/big-arrow-right.svg?react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const paramsSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    modules: [Navigation, Thumbs],
};

const paramsThumbSlider: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
        1668: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
};

const items = [img1, img2, img3];

const Wrapper = styled.div`
    display: grid;
`;

const BigSliderWrapper = styled.div`
    position: relative;

    &:hover button {
        opacity: 1;
    }
`;

const MainSlide = styled(SwiperSlide)`
    width: 100% !important;
`;

const ThumbSlide = styled(SwiperSlide)`
    width: 150px !important;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &.swiper-slide-thumb-active {
        opacity: 0.6;
    }
`;

const MainImage = styled.img`
    display: block;
    height: 340px;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;

    @media (min-width: 768px) {
        border-radius: 33px 33px 0 0;
    }

    @media (min-width: 1668px) {
        height: 492px;
    }
`;

const ThumbImage = styled.img`
    display: block;
    height: 98px;
    width: 100%;
    object-fit: cover;
    border-radius: 7px;
    cursor: pointer;
`;

const Background = styled.div`
    background: #f6f7f8;
    border-radius: 0 0 33px 33px;
    padding: 20px;

    @media (min-width: 1668px) {
        padding: 30px;
    }
`;

type ButtonProp = 'next' | 'prev';

const Button = styled.button<{ navigate: ButtonProp }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: transparent;
    border: none;
    cursor: pointer;
    transition:
        background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    ${({ navigate }) =>
        navigate === 'next' &&
        `
        right: 10px;
  `}
    ${({ navigate }) =>
        navigate === 'prev' &&
        `
    left: 10px;`}
  

    @media (min-width: 768px) {
        opacity: 0;
        background: #006838;

        ${({ navigate }) =>
            navigate === 'next' &&
            `
        right: 21px;
  `}
        ${({ navigate }) =>
            navigate === 'prev' &&
            `
    left: 21px;`}

        &:hover {
            background: #20836d;
        }
    }
`;

const isImage = (file: string) => file.split('.').pop() === 'jpg';

const Slider = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

    return (
        <Wrapper>
            <BigSliderWrapper>
                <Button navigate="prev" onClick={() => swiperInstance?.slidePrev()}>
                    <IconArrowLeft />
                </Button>
                <Swiper
                    thumbs={{ swiper: thumbsSwiper }}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    {...paramsSlider}
                >
                    {items.map((img, key) => (
                        <MainSlide key={key}>
                            <MainImage src={img} alt="" />
                        </MainSlide>
                    ))}
                </Swiper>
                <Button navigate="next" onClick={() => swiperInstance?.slideNext()}>
                    <IconArrowRight />
                </Button>
            </BigSliderWrapper>
            {!matches && (
                <Background>
                    <Swiper modules={[Thumbs]} {...paramsThumbSlider} watchSlidesProgress onSwiper={setThumbsSwiper}>
                        {items.map((file, key) => (
                            <ThumbSlide key={key}>{isImage(file) ? <ThumbImage src={file} alt="" /> : null}</ThumbSlide>
                        ))}
                    </Swiper>
                </Background>
            )}
        </Wrapper>
    );
};

export default Slider;
