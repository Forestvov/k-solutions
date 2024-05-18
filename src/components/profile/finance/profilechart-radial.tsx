import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import Chart, { useChart } from 'components/shared/chart';
import { fCurrency } from 'helpers/number-format';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 380;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
    height: CHART_HEIGHT,
    '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
        height: `100% !important`,
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        marginBottom: theme.spacing(3),
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
                hollow: {
                    size: '68%',
                },
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
                            return fCurrency(total);
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

            <Box sx={{ marginTop: '-12px' }}>
                <StyledChart
                    dir="ltr"
                    type="radialBar"
                    series={chartSeries}
                    options={chartOptions}
                    sx={{
                        width: {
                            lg: '340px',
                            xl: '300px',
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
