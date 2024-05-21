import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CrowdfundingGoalsCard } from 'components/about-platform/crowdfunding-goals/crowdfunding-goals-card';
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

const Title = styled.h2`
    font-size: 38px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin-bottom: 50px;

    @media (max-width: 770px) {
        font-size: 28px;
    }
`;

const Content = styled(Box)`
    @media (max-width: 770px) {
        display: none;
    }
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

const CrowdfundingGoals: FC = () => {
    const { t } = useTranslation('about-platform');

    const cards = [
        {
            id: '1',
            title: '01',
            text: t('croundFundingCardText'),
        },
        {
            id: '2',
            title: '02',
            text: t('croundFundingCardText1'),
        },
        {
            id: '3',
            title: '03',
            text: t('croundFundingCardText2'),
        },
        {
            id: '4',
            title: '04',
            text: t('croundFundingCardText3'),
        },
        {
            id: '5',
            title: '05',
            text: t('croundFundingCardText4'),
        },
        {
            id: '6',
            title: '06',
            text: t('croundFundingCardText5'),
        },
        {
            id: '7',
            title: '07',
            text: t('croundFundingCardText6'),
        },
        {
            id: '8',
            title: '08',
            text: t('croundFundingCardText7'),
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
                background: '#F6F7F8',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                paddingBottom: { lg: '140px', xl: '120px', sm: '90px', xs: '70px' },
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Title>{t('croundFundingTitle')}</Title>
                <Content
                    sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' } }}
                    gap={{ xs: '30px', md: '40px 45px' }}
                >
                    {cards.map((row: any) => (
                        <CrowdfundingGoalsCard key={row.id} row={row} />
                    ))}
                </Content>
                <SliderWrapper {...paramsSlider} onSwiper={(swiper) => setSwiperInstance(swiper)}>
                    {cards.map((row: any) => (
                        <Slide key={row.id}>
                            <CrowdfundingGoalsCard key={row.id} row={row} />
                        </Slide>
                    ))}
                </SliderWrapper>
                <PaginationWrapper className="for-client-pagination" />
            </Inner>
        </Box>
    );
};

export default CrowdfundingGoals;
