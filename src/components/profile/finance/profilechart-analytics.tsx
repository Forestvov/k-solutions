import type { ApexOptions } from 'apexcharts';
import type { CardProps } from '@mui/material/Card';
import Chart, { useChart } from 'components/shared/chart';
import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;

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

// ----------------------------------------------------------------------

interface Props extends CardProps {
    title?: string;
    chart: {
        colors?: string[];
        series: {
            label: string;
            value: number;
        }[];
        options?: ApexOptions;
    };
}

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #212b36;
    margin-bottom: 30px;

    @media (min-width: 1024px) {
        padding: 24px;
    }
`;

const ProfilechartAnalytics: FC<Props> = ({ title, chart }) => {
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
        stroke: {
            colors: '#ffffff',
        },
        legend: {
            floating: true,
            position: 'bottom',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            },
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
                    labels: {
                        show: false,
                    },
                },
            },
        },
        ...options,
    });

    return (
        <Box
            sx={{
                maxWidth: {
                    md: '344px',
                    xs: '100%',
                },
                flex: '0 0 auto',
                width: '100%',
            }}
        >
            <Title>{title}</Title>

            <StyledChart dir="ltr" type="pie" series={chartSeries} options={chartOptions} width="100%" height={257} />
        </Box>
    );
};

export default ProfilechartAnalytics;
