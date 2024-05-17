import React, { useState } from 'react';
import styled from '@emotion/styled';

import type { SwiperOptions } from 'swiper/types';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconArrowLeft from 'assets/arrows/big-arrow-left.svg?react';
import IconArrowRight from 'assets/arrows/big-arrow-right.svg?react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useGetCompanySlider } from 'api/company';
import { useSearchParams } from 'hooks/use-search-params';

const paramsSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    modules: [Navigation, Thumbs],
    breakpoints: {
        1668: {
            spaceBetween: 30,
        },
        320: {
            spaceBetween: 20,
        },
    },
};

const paramsThumbSlider: SwiperOptions = {
    spaceBetween: 20,
    slidesPerView: 'auto',
    breakpoints: {
        1280: {
            spaceBetween: 20,
        },
        1668: {
            spaceBetween: 30,
        },
    },
};

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
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    max-width: 150px;

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
    width: 100%;
    height: 90px;
    object-fit: cover;
    border-radius: 7px;
    cursor: pointer;

    @media (min-width: 1668px) {
        height: 100px;
    }
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

const Slider = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const searchParams = useSearchParams();

    const { slides, slidesEmpty } = useGetCompanySlider(String(searchParams.get('companyId')));

    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

    if ((!slides && slidesEmpty) || slides.length === 0) return null;

    return (
        <>
            <BigSliderWrapper>
                <Button navigate="prev" onClick={() => swiperInstance?.slidePrev()}>
                    <IconArrowLeft />
                </Button>
                <Swiper
                    thumbs={{ swiper: thumbsSwiper }}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    {...paramsSlider}
                >
                    {slides.map((img, key) => (
                        <MainSlide key={key}>
                            <MainImage src={img.file} alt="" />
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
                        {slides.map((file, key) => (
                            <ThumbSlide key={key}>
                                <ThumbImage src={file.file} alt="" />
                            </ThumbSlide>
                        ))}
                    </Swiper>
                </Background>
            )}
        </>
    );
};

export default Slider;
