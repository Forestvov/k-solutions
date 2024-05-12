import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Form from './form';
import Image from './image';
import useMediaQuery from '@mui/material/useMediaQuery';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    @media (min-width: 1280px) {
        padding-right: 450px;
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

    return (
        <Box
            sx={{
                height: { lg: 'min(100vh - 110px, 970px);', xl: '915px', sm: '800px', xs: '650px' },
                minHeight: { lg: '787px' },
                background: 'transparent',
                paddingTop: { lg: '180px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Content>
                    <Title>
                        Инвестиции
                        <br />
                        <Span>в бизнес</Span>
                    </Title>
                    <Paragraph>
                        Начните инвестировать деньги в компании малого и среднего бизнеса. Получайте доходность
                        инвестиций значительно выше депозита в банке, акций и облигаций.
                    </Paragraph>
                    <Form />
                </Content>
                {isDesktop && <Image />}
            </Inner>
        </Box>
    );
};

export default MainBanner;
