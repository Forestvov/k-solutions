import type { CardProps } from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import Chart, { useChart } from '../../shared/chart';

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #212b36;
`;

// ----------------------------------------------------------------------

interface Props extends CardProps {
    title?: string;
    chart: {
        categories?: string[];
        colors?: string[][];
        series: {
            data: {
                name: string;
                data: number[];
            }[];
        }[];
        options?: any;
    };
}

export default function ProfilechartArea({ title, chart, ...other }: Props) {
    const {
        colors = [
            ['#5BE49B', '#00A76F'],
            ['#FFD666', '#FFAB00'],
        ],
        categories,
        series,
        options,
    } = chart;

    const chartOptions = useChart({
        colors: colors.map((colr) => colr[1]),
        fill: {
            type: 'gradient',
            gradient: {
                colorStops: colors.map((colr) => [
                    { offset: 0, color: colr[0], opacity: 1 },
                    { offset: 100, color: colr[1], opacity: 1 },
                ]),
            },
        },
        xaxis: {
            categories,
        },
        ...options,
    });

    return (
        <Box {...other}>
            <Stack
                direction={{
                    lg: 'row',
                }}
                alignItems={{
                    lg: 'center',
                }}
                spacing={{
                    xs: '16px',
                    lg: 0,
                }}
                justifyContent="space-between"
            >
                <Title>{title}</Title>
            </Stack>

            {series.map((item, idx) => (
                <Box key={idx} sx={{ mt: 3, mx: 3 }}>
                    <Chart dir="ltr" type="line" series={item.data} options={chartOptions} width="100%" height={356} />
                </Box>
            ))}
        </Box>
    );
}
