import type { FC } from 'react';
import styled from '@emotion/styled';
import Chart, { useChart } from 'components/shared/chart';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 365;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
    height: CHART_HEIGHT,
    '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
        height: `100% !important`,
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        borderTop: `dashed 1px ${theme.palette.divider}`,
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
            y: {
                formatter: (value: number) => value,
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
                            formatter: (value: number | string) => `$${value}`,
                        },
                        total: {
                            formatter: (w: { globals: { seriesTotals: number[] } }) => {
                                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                return `$${sum}`;
                            },
                        },
                    },
                },
            },
        },
        ...options,
    });

    return (
        <Box sx={{ paddingLeft: { md: '25px' } }}>
            <Title>{title}</Title>

            <StyledChart
                dir="ltr"
                type="donut"
                series={chartSeries}
                options={chartOptions}
                sx={{
                    width: {
                        md: '340px',
                        xs: '100%',
                    },
                }}
                height="260"
            />
        </Box>
    );
};

export default ProfilechartDonut;
