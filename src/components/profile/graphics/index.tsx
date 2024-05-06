import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import WhiteWrapper from 'components/profile/white-wrapper';

import Title from '../title';
import ChartBlock from './chart-block';

const TitleStyled = styled(Title)`
    margin: 20px 0 73px;
`;

const Graphics = () => {
    return (
        <WhiteWrapper>
            <TitleStyled>Рынки</TitleStyled>
            <Box
                sx={{
                    display: 'grid',
                    gridGap: '90px 68px',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
                <ChartBlock
                    title="Финтех"
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
                                name: 'Exit value (B)',
                                type: 'column',
                                fill: 'solid',
                                color: '#00A76F',
                                data: [450, 280, 290, 130, 110, 90, 250, 580, 380, 900, 490, 570, 790],
                            },
                            {
                                name: 'Exit count',
                                type: 'line',
                                fill: 'solid',
                                data: [300, 320, 380, 385, 330, 350, 410, 430, 410, 620, 400, 400, 400],
                            },
                        ],
                    }}
                />
                <ChartBlock
                    title="Здравоохранение"
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
                                name: 'Exit value (B)',
                                type: 'column',
                                fill: 'solid',
                                color: '#00A76F',
                                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                            },
                            {
                                name: 'Exit count',
                                type: 'line',
                                fill: 'solid',
                                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                            },
                        ],
                    }}
                />
                <ChartBlock
                    title="Продовольствие и сел. хозяйство"
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
                                name: 'Exit value (B)',
                                type: 'column',
                                fill: 'solid',
                                color: '#00A76F',
                                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                            },
                            {
                                name: 'Exit count',
                                type: 'line',
                                fill: 'solid',
                                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                            },
                        ],
                    }}
                />
                <ChartBlock
                    title="Энергетика и экология"
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
                                name: 'Exit value (B)',
                                type: 'column',
                                fill: 'solid',
                                color: '#00A76F',
                                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                            },
                            {
                                name: 'Exit count',
                                type: 'line',
                                fill: 'solid',
                                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                            },
                        ],
                    }}
                />
            </Box>
        </WhiteWrapper>
    );
};

export default Graphics;
