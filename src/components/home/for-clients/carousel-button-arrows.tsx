import type { FC } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

import PrevArrow from 'assets/arrows/default-left.svg?react';
import NextArrow from 'assets/arrows/default-right.svg?react';

import DefaultButtonNav from './default-button-nav';

interface Props {
    instance: SwiperInstance;
}

const ButtonPrev = styled(DefaultButtonNav)`
    left: -67px;
`;

const ButtonNext = styled(DefaultButtonNav)`
    right: -67px;
`;

const CarouselButtonArrows: FC<Props> = ({ instance }) => {
    return (
        <Box
            sx={{ opacity: 0, pointerEvents: 'none', transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}
            className="for-client-navigation"
        >
            <ButtonPrev onClick={() => instance.slidePrev()}>
                <PrevArrow />
            </ButtonPrev>
            <ButtonNext onClick={() => instance.slideNext()}>
                <NextArrow />
            </ButtonNext>
        </Box>
    );
};

export default CarouselButtonArrows;
