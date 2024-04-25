import type { FC } from 'react';
import styled from '@emotion/styled';
import Chart, { useChart } from 'components/shared/chart';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 377;

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
    total: number;
    chart: {
        colors?: string[];
        series: {
            label: string;
            value: number;
        }[];
        options?: any;
    };
}

const ProfilechartRadial: FC<Props> = ({ title, chart, total }) => {
    const {
        colors = [
            ['#5BE49B', '#00A76F'],
            ['#FFD666', '#FFAB00'],
        ],
        series,
        options,
    } = chart;

    const chartSeries = series.map((i) => i.value);

    const chartOptions = useChart({
        colors: colors.map((colr) => colr[1]),
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        labels: series.map((i) => i.label),
        legend: {
            offsetY: 0,
            floating: true,
            position: 'bottom',
            horizontalAlign: 'center',
        },
        fill: {
            type: 'gradient',
            gradient: {
                colorStops: colors.map((colr) => [
                    { offset: 0, color: colr[0], opacity: 1 },
                    { offset: 100, color: colr[1], opacity: 1 },
                ]),
            },
        },
        plotOptions: {
            radialBar: {
                hollow: { size: '65%' },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        fontSize: '14px',
                        fontWeight: '600',
                    },
                    value: {
                        offsetY: 8,
                        fontSize: '32px',
                        fontWeight: '700',
                    },
                    total: {
                        show: true,
                        label: 'Всего',
                        formatter: function () {
                            return total;
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

            <Box sx={{ marginTop: '-12px' }}>
                <StyledChart
                    dir="ltr"
                    type="radialBar"
                    series={chartSeries}
                    options={chartOptions}
                    sx={{
                        width: {
                            md: '340px',
                            xs: '100%',
                        },
                    }}
                    height="282"
                />
            </Box>
        </Box>
    );
};

export default ProfilechartRadial;
