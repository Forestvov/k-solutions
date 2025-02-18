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
        padding-right: 350px;
        width: 85%;
    }
`;

const Paragraph = styled.p`
    margin: 30px 0 33px;
    font-weight: 300;
    font-size: 1rem;
    line-height: 26px;

    @media (min-width: 768px) {
        font-size: 1.125rem;
        line-height: 30px;
        margin: 50px 0 76px;
    }

    @media (min-width: 1024px) {
        font-size: 1.25rem;
        max-width: 500px;
    }
`;

const Span = styled.span`
    font-size: 56px;
    color: #373737;
    user-select: none;
    font-weight: 500;

    @media (max-width: 770px) {
        font-size: 42px;
    }
`;

const Title = styled.h2`
    font-size: 56px;
    color: #006838;
    line-height: 30px;
    user-select: none;
    font-weight: 500;
    margin: 10px 0 0 0;
    width: 700px;

    @media (max-width: 770px) {
        font-size: 38px;
    }
`;

const AboutPlatformMainBanner: FC = () => {
    const isDesktop = useMediaQuery('(min-width:1280px)');

    const { t } = useTranslation('about-platform');

    return (
        <Box
            sx={{
                height: { lg: 'min(100vh - 110px, 970px);', xl: '755px', sm: '600px', xs: '450px' },
                minHeight: { lg: '787px' },
                background: 'transparent',
                paddingTop: { lg: '120px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Content>
                    <Span>
                        {t('aboutPlatformTitle')}
                        <Title>{t('aboutPlatformTitle1')}</Title>
                    </Span>
                    <Paragraph>{t('aboutPlatformText')}</Paragraph>
                </Content>
                {isDesktop && <Image />}
            </Inner>
        </Box>
    );
};

export default AboutPlatformMainBanner;
