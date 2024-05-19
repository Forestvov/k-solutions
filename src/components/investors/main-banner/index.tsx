import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Form from './form';
import Image from './image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    @media (min-width: 1280px) {
        padding-right: 100px;
        width: 65%;
    }
`;

const Paragraph = styled.p`
    margin: 30px 0 33px;
    font-weight: 300;
    font-size: 14px;
    max-width: 719px;
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
    font-size: 96px;
    color: #373737;
    user-select: none;
    font-weight: 500;

    @media (max-width: 770px) {
        font-size: 47px;
    }
`;

const Title = styled.h2`
    font-size: 96px;
    color: #006838;
    line-height: 90px;
    user-select: none;
    font-weight: 500;

    @media (max-width: 770px) {
        font-size: 47px;
        line-height: 50px;
    }
`;

const MainBanner: FC = () => {
    const isDesktop = useMediaQuery('(min-width:1280px)');

    const { t } = useTranslation('investor-page');

    return (
        <Box
            sx={{
                height: { lg: 'min(110vh - 110px, 970px);', xl: '915px', sm: '800px', xs: '650px' },
                minHeight: { lg: '787px' },
                background: 'transparent',
                paddingTop: { lg: '80px', xl: '50px', sm: '50px', xs: '50px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Content>
                    <Title>
                        {t('Инвестиции')}
                        <br />
                        <Span>{t('в бизнес')}</Span>
                    </Title>
                    <Paragraph>{t('Начните инвестировать')}</Paragraph>
                    <Form />
                </Content>
                {isDesktop && <Image />}
            </Inner>
        </Box>
    );
};

export default MainBanner;
