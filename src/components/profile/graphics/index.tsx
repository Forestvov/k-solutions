import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';

import Title from '../title';
import List from './list';
import Carousel from './carousel';
import ChartBlock from './chart-block';
import Stack from '@mui/material/Stack';

const TitleStyled = styled(Title)`
    margin: 20px 0 73px;
`;

const Graphics = () => {
    return (
        <WhiteWrapper>
            <TitleStyled>Рынки</TitleStyled>
            <List />
            <Carousel />
            <Stack spacing="60px">
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
            </Stack>
        </WhiteWrapper>
    );
};

export default Graphics;
