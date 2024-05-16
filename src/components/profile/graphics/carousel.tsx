import Chart from 'react-apexcharts';
import React from 'react';
import styled from '@emotion/styled';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import { useTranslation } from 'react-i18next';

const config = {
    chart: {
        type: 'area',
        stacked: false,
        zoom: {
            type: 'x',
            enabled: false,
            autoScaleYaxis: false,
        },
        toolbar: {
            autoSelected: 'zoom',
        },
    },
    stroke: {
        curve: 'smooth',
    },
    markers: {
        size: 0,
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
};

const paramsSlider: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 3000,
    },
    modules: [Navigation, Pagination, Autoplay],
    pagination: { clickable: true },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
};

const Wrapepr = styled.div`
    position: relative;

    .apexcharts-xaxis,
    .apexcharts-toolbar {
        display: none;
    }
    a {
        color: #000;
        text-decoration: none;
    }
    p {
        text-align: center;
        margin: -30px 0 0;
        font-size: 14px;
        font-weight: 700;
    }

    .swiper-pagination {
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 15px;
        margin: 30px 0 60px;
    }

    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #555555;
        cursor: pointer;
        transition:
            background 400ms,
            transform 400ms;
    }

    .swiper-pagination-bullet-active {
        transform: scale(1.3);
        background: rgb(0, 167, 111);
    }
`;

const Slide = styled(SwiperSlide)`
    width: 100% !important;

    @media (min-width: 768px) {
        width: calc(50% - 5px) !important;
    }

    @media (min-width: 1280px) {
        width: calc(33.33% - 5px) !important;
    }
`;

const HEIGHT_CHART = 200;

const Carousel = () => {
    const { t } = useTranslation('personal');

    return (
        <Wrapepr>
            <Swiper {...paramsSlider}>
                <Slide>
                    <a href="https://quote.rbc.ru/news/article/6448caf09a79474fc4a59a5d" target="_blank">
                        <Chart
                            // @ts-ignore
                            options={config}
                            series={[
                                {
                                    data: [
                                        25, 35, 37, 33, 33, 32.5, 32.1, 32, 31.8, 28.8, 30, 31, 28.5, 32.5, 32, 32.2,
                                        31.8, 32.1, 32.2, 34, 32.2, 35, 33, 32.8, 33, 32.9, 32.4, 32, 32.5, 32, 32.4,
                                        32.2, 32.3, 34, 35, 32.5, 33, 32, 34, 32.3, 37, 38, 51, 49, 52, 43.9, 51, 45,
                                        53, 54, 51.8, 60, 61, 64, 60.8, 60.9, 60, 52.3, 58,
                                    ],
                                },
                            ]}
                            type="area"
                            height={HEIGHT_CHART}
                        />
                        <p>{t('Акции Genetico взлетели на 40% в первый день торгов после IPO')}</p>
                    </a>
                </Slide>

                <Slide>
                    <a href="https://quote.rbc.ru/news/article/6448caf09a79474fc4a59a5d" target="_blank">
                        <Chart
                            // @ts-ignore
                            options={config}
                            series={[
                                {
                                    data: [
                                        55, 54, 49, 51.8, 49, 48.5, 48.8, 44.6, 47, 46.5, 47.5, 48.2, 49.5, 49, 51,
                                        50.5, 49.5, 51.8, 50.5, 51.5, 46, 47, 46.2, 47.5, 51.5, 51, 51.5, 50.5, 51,
                                        49.5, 50.5, 53, 54, 54.1, 53, 52.5, 52.8, 54.2, 56, 54.5, 54.8, 54.5, 59, 60,
                                        61.9, 60, 65, 74, 67, 68, 67, 69, 67, 67.6, 64.2, 66, 65.5, 66.7, 66.1, 66.6,
                                        65.8, 67.8, 67.3, 69.8, 66.9, 66.5, 66.9, 66.5, 66.9, 68,
                                    ],
                                },
                            ]}
                            type="area"
                            height={HEIGHT_CHART}
                        />
                        <p>{t('Акции Reddit выросли почти на 48% в первый день торгов')}</p>
                    </a>
                </Slide>

                <Slide>
                    <a
                        href="https://www.reuters.com/markets/deals/astera-labs-shares-jump-46-strong-nasdaq-debut-2024-03-20/"
                        target="_blank"
                    >
                        <Chart
                            // @ts-ignore
                            options={config}
                            series={[
                                {
                                    data: [
                                        52.95, 58.8, 56.5, 63.5, 60.1, 59.8, 61, 59.9, 72, 72.2, 72.4, 71.3, 69.9, 72.2,
                                        71, 79, 76.5, 70, 72, 64.2, 69.55, 69.92, 68, 69.8, 68.5, 64.5, 64.8, 68, 71,
                                        78.8, 78.5, 82, 76.7, 79.6, 83, 82.5, 80.5, 85, 84.5, 86, 95.5, 88.5, 88, 88.9,
                                        82, 78, 81, 79, 78, 82, 81, 84, 83.35, 83, 84,
                                    ],
                                },
                            ]}
                            type="area"
                            height={HEIGHT_CHART}
                        />
                        <p>{t('Astera Labs подскочили более чем на 70% во время звездного дебюта на Nasdaq')}</p>
                    </a>
                </Slide>

                <Slide>
                    <a
                        href="https://www.forbes.ru/investicii/504573-akcionery-kazahstanskogo-banka-kaspi-kz-privlekli-bolee-1-mlrd-v-hode-ipo-v-ssa"
                        target="_blank"
                    >
                        <Chart
                            // @ts-ignore
                            options={config}
                            series={[
                                {
                                    data: [
                                        92, 91.9, 92, 92.1, 91.8, 91.3, 91.8, 91.3, 91.4, 91.2, 91, 91.5, 91, 90.9,
                                        91.9, 90.8, 91.8, 91.5, 91.8, 89, 92.1, 92, 92.1, 91.9, 91, 91.8, 91, 91.9,
                                        92.1, 91.9, 92, 92.1, 91.8, 92, 92.2, 92, 91.8, 92, 91.5, 91.7, 91, 91.7, 91.6,
                                        91.9, 91.8, 90, 88.9, 90.5, 87.8, 89, 89.5, 89.2, 86, 87, 86.5, 86.4, 86.7, 88,
                                        91, 90, 91.8, 91.4, 94, 93.5, 95.5, 95.8, 94, 98, 96, 101, 99.9, 100, 100.4,
                                        103, 104, 106, 103.8, 104.6, 104, 103.8, 103.4, 104, 103.8, 104.5, 104, 107.6,
                                        107, 107.9, 108, 105, 107.5, 104.5, 110, 104.5, 107.9, 106.8, 108, 107.5, 105,
                                        110, 109.5, 110, 109.5, 114, 115, 112, 113, 115, 116.1, 120, 123, 120, 123, 121,
                                        123.5, 123, 123.5, 122, 123.5, 125, 124, 125, 128.5, 128, 128.5, 130, 129.5,
                                        130, 129.5, 129, 129.5, 134, 133.5, 135.8, 135, 135.6, 134.5, 135.5, 131.8, 132,
                                        134, 132.5, 123.5, 122.5, 123.5,
                                    ],
                                },
                            ]}
                            type="area"
                            height={HEIGHT_CHART}
                        />
                        <p>{t('Акционеры казахстанского банка Kaspi.kz привлекли более $1 млрд в ходе IPO в США')}</p>
                    </a>
                </Slide>
            </Swiper>
        </Wrapepr>
    );
};

export default Carousel;
