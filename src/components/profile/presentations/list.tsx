import Item from './item';
import type { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const paramsSlider: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    modules: [Navigation, Pagination],
    pagination: { clickable: true },
    breakpoints: {
        1668: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
    },
};

const Wrapper = styled.div`
    .swiper-pagination {
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 15px;
        margin: 40px 0 10px;
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

    .swiper-slide {
        height: auto;
    }

    .swiper-pagination-lock {
        display: none;
    }

    .swiper-pagination-bullet-active {
        transform: scale(1.3);
        background: rgb(0, 167, 111);
    }
`;

const List = () => {
    const { t } = useTranslation('personal');

    const slides = [
        {
            title: t('Финтех - распределение'),
            text: t(
                'В данной презентации, вы узнаете, о способе получения займов через онлайн-платформы, связывающий заемщиков с инвесторами.'
            ),
            date: t('Апрель 13, 2023'),
            file: '/presentations/Финтех распределение K SOLUTIONS.pdf',
            image: '/presentations/fin.jpg',
        },
        {
            title: t('Дорожная карта KSOLUTIONS'),
            text: t(
                'Дорожная карта — это стратегический план, который определяет цели, задачи и ключевые этапы проекта, а также сроки их выполнения.'
            ),
            date: t('Май 10, 2023'),
            file: '/presentations/ДОРОЖНАЯ КАРТА K SOLUTIONS.pptx',
            image: '/presentations/rot.jpg',
        },
        {
            title: t('Краудленлинг KSOLUTIONS'),
            text: t(
                'Финтех-распределение — это применение финтех-технологий для оптимизации управления финансами, повышая эффективность и прозрачность транзакций.'
            ),
            date: t('Март 21, 2024'),
            file: '/presentations/Краудлендинг K SOLUTIONS.pdf',
            image: '/presentations/k-solution.jpg',
        },
    ];

    return (
        <Wrapper>
            <Swiper {...paramsSlider}>
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <Item
                            file={slide.file}
                            text={slide.text}
                            date={slide.date}
                            image={slide.image}
                            title={slide.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default List;
