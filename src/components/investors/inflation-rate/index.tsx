import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import inflationTarget from 'assets/pages/investors/inflationTarget.png';
import inflationMap from 'assets/pages/investors/inflationMap.png';

const Inner = styled(Container)`
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 766px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const Paragraph = styled.p`
    margin: 5px 0 5px 0;
    font-weight: 300;
    font-size: 20px;
    max-width: 819px;
    line-height: 26px;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
`;

const Span = styled.span`
    font-size: 20px;
    color: #006838;
    user-select: none;
    font-weight: 500;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
`;

const Title = styled.h2`
    margin: 0 auto;
    font-size: 48px;
    color: #373737;
    user-select: none;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 38px;
    }
`;

const Img = styled.img`
    margin-left: -5px;
    width: 9%;

    @media (max-width: 1024px) {
        width: 12%;
    }

    @media (max-width: 766px) {
        width: 33%;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InflationMap = styled.img`
    padding-top: 74px;
    width: 70%;

    @media (max-width: 1024px) {
        width: 85%;
    }

    @media (max-width: 766px) {
        width: 120%;
    }
`;

const InflationRate: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '950px', xl: '915px', sm: '800px', xs: '650px' },
                background: '#F6F7F8',
                paddingTop: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
                overflow: 'hidden',
                marginBottom: { xs: '100px', sm: '130px', md: '150px' },
            }}
        >
            <Inner fixed>
                <Content>
                    <div>
                        <Title>Уровень инфляции</Title>
                        <Paragraph>
                            <Span>97%</Span> инвесторов <Span>получают</Span> доходность инвестиций <Span>выше</Span>{' '}
                            инфляции
                        </Paragraph>
                    </div>
                    <Img className="inflationTarget" src={inflationTarget} />
                </Content>
                <ImageWrapper>
                    <InflationMap src={inflationMap} />
                </ImageWrapper>
            </Inner>
        </Box>
    );
};

export default InflationRate;
