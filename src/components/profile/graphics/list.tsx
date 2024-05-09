import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import ChartBlock from './chart-block';

const List = () => {
    const { t } = useTranslation('personal');
    return (
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
                title={t('Финтех')}
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
                            data: [450, 280, 290, 130, 110, 90, 250, 580, 380, 900, 490, 570, 790],
                        },
                        {
                            name: 'Exit count',
                            type: 'line',
                            fill: 'solid',
                            data: [300, 320, 380, 385, 330, 350, 410, 430, 410, 620, 400, 450, 500],
                        },
                    ],
                }}
            />
            <ChartBlock
                title={t('Здравоохранение')}
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
                            data: [110, 90, 90, 100, 80, 190, 150, 160, 810, 950, 190, 110, 390],
                        },
                        {
                            name: 'Exit count',
                            type: 'line',
                            fill: 'solid',
                            data: [300, 320, 390, 390, 340, 380, 410, 420, 405, 650, 410, 420, 440],
                        },
                    ],
                }}
            />
            <ChartBlock
                title={t('Продовольствие и сел. хозяйство')}
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
                            data: [470, 220, 260, 190, 220, 190, 190, 160, 150, 610, 310, 380, 420],
                        },
                        {
                            name: 'Exit count',
                            type: 'line',
                            fill: 'solid',
                            data: [300, 310, 380, 370, 340, 360, 410, 430, 400, 630, 410, 420, 440],
                        },
                    ],
                }}
            />
            <ChartBlock
                title={t('Энергетика и экология')}
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
                            data: [90, 90, 120, 280, 250, 490, 390, 290, 610, 680, 320, 790, 430],
                        },
                        {
                            name: 'Exit count',
                            type: 'line',
                            fill: 'solid',
                            data: [300, 320, 390, 380, 350, 380, 410, 450, 410, 610, 400, 500, 590],
                        },
                    ],
                }}
            />
        </Box>
    );
};

export default List;
