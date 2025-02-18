import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Image from './image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    @media (min-width: 1280px) {
        padding-right: 220px;
        width: 75%;
    }
`;

const Paragraph = styled.p`
    margin: 30px 0 33px;
    font-weight: 300;
    font-size: 1rem;
    max-width: 819px;
    line-height: 26px;

    @media (min-width: 768px) {
        font-size: 1.125rem;
        line-height: 30px;
        margin: 30px 0 76px;
    }

    @media (min-width: 1024px) {
        font-size: 1.25rem;
        max-width: 800px;
    }
`;

const Span = styled.span`
    font-size: 3.5rem;
    color: #006838;
    user-select: none;
    font-weight: 400;

    @media (max-width: 770px) {
        font-size: 2.938rem;
    }
`;

const Title = styled.h2`
    font-size: 3.5rem;
    color: #373737;
    line-height: 70px;
    user-select: none;
    font-weight: 400;
    margin: 0;

    @media (max-width: 770px) {
        display: none;
    }
`;

const BusinessMainBanner: FC = () => {
    const isDesktop = useMediaQuery('(min-width:1280px)');

    const { t } = useTranslation('business-page');

    return (
        <Box
            sx={{
                height: { lg: 'min(100vh - 110px, 970px);', xl: '900px', sm: '600px', xs: '500px' },
                minHeight: { lg: '787px' },
                background: 'transparent',
                paddingTop: { lg: '180px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Content>
                    <Title>{t('Финансирование для развития вашего бизнеса')}</Title>
                    <Span>{t('Займы компаниям и ИП')}</Span>
                    <Paragraph>{t('Решение за 3 минуты')}</Paragraph>
                </Content>
                {isDesktop && <Image />}
            </Inner>
        </Box>
    );
};

export default BusinessMainBanner;
