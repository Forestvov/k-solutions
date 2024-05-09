import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import WhiteWrapper from 'components/profile/white-wrapper';

import Title from '../title';
import List from './list';
import Carousel from './carousel';
import ChartBlock from './chart-block';

const TitleStyled = styled(Title)`
    margin: 20px 0;
`;

const SubTitleStyled = styled(Title)`
    margin: 0 0 73px;
    font-size: 19px;
    line-height: 26px;

    @media (min-width: 768px) {
        font-size: 20px;
    }

    @media (min-width: 1024px) {
        font-size: 22px;
    }

    @media (min-width: 1280px) {
        font-size: 26px;
    }

    @media (min-width: 1668px) {
        font-size: 28px;
    }
`;

const Graphics = () => {
    return (
        <WhiteWrapper>
            <TitleStyled>Рынки</TitleStyled>
            <SubTitleStyled>Объёмы венчурных инвестиций по отраслям</SubTitleStyled>
            <List />
            <Carousel />
            <Box
                sx={{
                    display: 'grid',
                    gridGap: '90px 48px',
                    gridTemplateColumns: {
                        lg: 'repeat(2, 1fr)',
                    },
                }}
            >
                <ChartBlock
                    title="Общий объём венчурных инвестиций"
                    chart={{
                        labels: [
                            '2012',
                            '2013',
                            '2014',
                            '2015',
                            '2016',
                            '2017',
                            '2018',
                            '2019',
                            '2020',
                            '2021',
                            '2022',
                            '2023',
                            '2024',
                        ],
                        series: [
                            {
                                name: 'Exit value ($B)',
                                type: 'column',
                                fill: 'solid',
                                color: '#00A76F',
                                data: [150, 90, 120, 90, 110, 90, 80, 85, 120, 290, 320, 780, 790],
                            },
                            {
                                name: 'Exit count',
                                type: 'line',
                                fill: 'solid',
                                data: [300, 310, 380, 375, 330, 380, 410, 420, 410, 620, 400, 450, 500],
                            },
                        ],
                    }}
                />
                <ChartBlock
                    prefixAfter=""
                    prefixBefore="мл. р."
                    title="Ожидаемая доходность"
                    chart={{
                        labels: ['2020', '2021', '2022', '2023', '2024'],
                        series: [
                            {
                                name: 'KSOLUTIONS',
                                type: 'line',
                                fill: 'solid',
                                data: [0, 15, 20, 30, 55],
                            },
                            {
                                name: 'Акции',
                                type: 'line',
                                fill: 'solid',
                                data: [0, 5, 15, 20, 31],
                            },
                            {
                                name: 'Облигации',
                                type: 'line',
                                fill: 'solid',
                                data: [0, 5, 10, 15, 18],
                            },
                            {
                                name: 'Депозит',
                                type: 'line',
                                fill: 'solid',
                                data: [0, 5, 10, 12, 15],
                            },
                            {
                                name: 'Жилая недвижимость',
                                type: 'line',
                                fill: 'solid',
                                data: [0, 5, 8, 10, 11],
                            },
                        ],
                    }}
                />
            </Box>
        </WhiteWrapper>
    );
};

export default Graphics;
