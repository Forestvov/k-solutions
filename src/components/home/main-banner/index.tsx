import type { FC } from 'react';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Logo from 'assets/pages/home/banner-logo.svg?react';

import Form from './form';
import Image from './image';
import useMediaQuery from '@mui/material/useMediaQuery';

const Animation = lazy(() => import('./animation'));

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    height: 100%;
    @media (min-width: 1280px) {
        padding-right: 450px;
    }
`;

const Paragraph = styled.p`
    margin: 30px 0 45px;
    font-weight: 300;
    font-size: 1rem;
    line-height: 26px;

    @media (min-width: 768px) {
        font-size: 1.125rem;
        line-height: 30px;
        margin: 30px 0 76px;
    }

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }
`;

const LogoIcon = styled(Logo)`
    height: auto;
    width: 280px;
    flex: 0 0 auto;

    @media (min-width: 768px) {
        width: 600px;
    }

    @media (min-width: 1024px) {
        width: 767px;
        height: 94px;
    }
`;

const MainBanner: FC = () => {
    const isDesktop = useMediaQuery('(min-width:1280px)');

    const { t } = useTranslation('home-page');

    return (
        <Box
            sx={{
                height: { lg: 'min(100vh - 110px, 970px);', xs: 'auto' },
                minHeight: { lg: '787px' },
                background: '#F6F7F8',
                paddingTop: { lg: '229px', xl: '200px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '100px', sm: '130px', md: '150px' },
            }}
        >
            <Inner fixed>
                <Content>
                    <Stack sx={{ height: '100%' }}>
                        <LogoIcon />
                        <Paragraph>{t('bannerTitle')}</Paragraph>
                        <Stack sx={{ flex: '1', overflow: 'hidden' }}>
                            <Form />
                            <Animation />
                        </Stack>
                    </Stack>
                </Content>
                {isDesktop && <Image />}
            </Inner>
        </Box>
    );
};

export default MainBanner;
