import type { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Chart, { useChart } from 'components/shared/chart';
import { fCurrency } from 'helpers/number-format';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 420;

const LEGEND_HEIGHT = 102;

const StyledChart = styled(Chart)(() => ({
    height: CHART_HEIGHT,
    '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
        height: `100% !important`,
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
    },
}));

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #212b36;
    margin-bottom: 55px;
`;

// ----------------------------------------------------------------------

interface Props {
    title?: string;
    chart: {
        colors?: string[];
        series: {
            label: string;
            value: number;
        }[];
        options?: any;
    };
}

const ProfilechartDonut: FC<Props> = ({ title, chart }) => {
    const theme = useTheme();

    const { colors, series, options } = chart;

    const chartSeries = series.map((i) => i.value);

    const chartOptions = useChart({
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        colors,
        labels: series.map((i) => i.label),
        stroke: { colors: [theme.palette.background.paper] },
        legend: {
            offsetY: 0,
            floating: true,
            position: 'bottom',
            horizontalAlign: 'center',
        },
        tooltip: {
            fillSeriesColor: false,
            background: '#fff',
            y: {
                formatter: (value: number) => fCurrency(value),
                title: {
                    formatter: (seriesName: string) => `${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '88%',
                    labels: {
                        value: {
                            formatter: (value: number | string) => fCurrency(value),
                        },
                        total: {
                            formatter: (w: { globals: { seriesTotals: number[] } }) => {
                                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                return fCurrency(sum);
                            },
                        },
                    },
                },
            },
        },
        ...options,
    });

    return (
        <Box sx={{ paddingLeft: { lg: '25px' } }}>
            <Title>{title}</Title>

            <StyledChart
                dir="ltr"
                type="donut"
                series={chartSeries}
                options={chartOptions}
                sx={{
                    width: {
                        lg: '340px',
                        xl: '300px',
                        xs: '100%',
                    },
                }}
                height="260"
            />
        </Box>
    );
};

export default ProfilechartDonut;
