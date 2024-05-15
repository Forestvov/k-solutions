import { useEffect, useState } from 'react';
import type { SwiperOptions } from 'swiper/types';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import styled from '@emotion/styled';

import Item from './item';
import CarouselButtonArrows from './carousel-button-arrows';

import type { ItemProp } from './types/types';

import ForClient1 from 'assets/pages/home/for-client-1.svg';
import ForClient2 from 'assets/pages/home/for-client-2.svg';
import ForClient3 from 'assets/pages/home/for-client-3.svg';
import ForClient4 from 'assets/pages/home/for-client-4.svg';
import ForClient5 from 'assets/pages/home/for-client-5.svg';
import ForClient6 from 'assets/pages/home/for-client-6.svg';
import ForClient7 from 'assets/pages/home/for-client-7.svg';
import ForClient8 from 'assets/pages/home/for-client-8.svg';
import ForClient9 from 'assets/pages/home/for-client-9.svg';
import ForClient10 from 'assets/pages/home/for-client-10.svg';

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

    const { t } = useTranslation('home-page');

    const slides: ItemProp[] = [
        {
            title: t('Доступность'),
            icon: ForClient1,
            text: t(
                'K SOLUTIONS делает инвестирование доступным для широкого круга людей, поскольку минимальные суммы вложений обычно невысоки, что позволяет даже малым инвесторам участвовать в проектах.'
            ),
        },
        {
            title: t('Диверсификация портфеля'),
            icon: ForClient2,
            text: t(
                'Сотрудничество с K SOLUTIONS помогает диверсифицировать портфель инвестора, снижая риски путем распределения средств между различными видами активов и проектами.'
            ),
        },
        {
            title: t('Доступ к новым рынкам'),
            icon: ForClient3,
            text: t(
                'K SOLUTIONS открывает доступ к инвестиционным возможностям, которые ранее были недоступны для широкой публики, таким как стартапы и инновационные проекты.'
            ),
        },
        {
            title: t('Поддержка предпринимательства'),
            icon: ForClient4,
            text: t(
                'Некоторые модели предоставляют инвесторам долю в компании, что может привести к потенциально высоким доходам в случае успеха бизнеса.'
            ),
        },
        {
            title: t('Возможность получить долю в компании'),
            icon: ForClient5,
            text: t(
                'Некоторые модели предоставляют инвесторам долю в компании, что может привести к потенциально высоким доходам в случае успеха бизнеса.'
            ),
        },
        {
            title: t('Прозрачность'),
            icon: ForClient6,
            text: t(
                'Обеспечиваем полное сопровождение со стороны экспертов, взаимодействие с командой. Помимо базового анализа, эксперты проводят дополнительные исследования по различным аспектам компании, включая ее репутацию, клиентские отзывы, индустриальные стандарты и законодательство.'
            ),
        },
        {
            title: t('Оценка рисков'),
            icon: ForClient7,
            text: t(
                'Эксперты идентифицируют и анализируют различные виды рисков, связанных с бизнесом компании, такие как операционные риски, финансовые риски, риски рынка и юридические риски, и разрабатывают стратегии их управления.'
            ),
        },
        {
            title: t('Оценка бизнес-модели'),
            icon: ForClient8,
            text: t(
                'Эксперты проводят тщательный анализ бизнес-модели компании, оценивая ее конкурентные преимущества, потенциал роста и устойчивость к рискам и изменениям на рынке.'
            ),
        },
        {
            title: t('Социальная и экологическая ценность'),
            icon: ForClient9,
            text: t(
                'Мы исследуем социальную и экологическую направленность, что позволяет инвесторам вкладывать в компании, которые приносят общественную пользу.'
            ),
        },
        {
            title: t('Возможность раннего доступа'),
            icon: ForClient10,
            text: t(
                ' K SOLUTIONS может предоставить инвесторам ранний доступ к перспективным проектам или продуктам, которые могут стать популярными в будущем.'
            ),
        },
    ];

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
