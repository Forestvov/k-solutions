import type { CardProps } from '@mui/material/Card';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Chart, { useChart } from '../../shared/chart';
import type { ApexOptions } from 'apexcharts';
import Scrollbar from 'components/shared/scrollbar';

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #212b36;
    margin-bottom: 4px;
`;

// ----------------------------------------------------------------------

interface Props extends CardProps {
    title?: string;
    chart: {
        labels: string[];
        colors?: string[];
        series: {
            name: string;
            type: string;
            fill?: string;
            color?: string;
            data: number[];
        }[];
        options?: ApexOptions;
    };
}

export default function ChartBlock({ title, chart, ...other }: Props) {
    const { labels, colors, series, options } = chart;

    const chartOptions = useChart({
        colors,
        plotOptions: {
            bar: {
                columnWidth: '20%',
            },
        },
        fill: {
            type: series.map((i) => i.fill) as string[],
        },
        labels,
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (value: number) => {
                    if (typeof value !== 'undefined') {
                        return `${value.toFixed(0)}`;
                    }
                    return value;
                },
            },
        },
        ...options,
    });

    return (
        <Box
            {...other}
            sx={{
                margin: {
                    xs: '0 -10px',
                    md: '0',
                },
            }}
        >
            <Box
                sx={{
                    paddingLeft: '15px',
                    marginBottom: {
                        xs: '30px',
                        sm: '0',
                    },
                }}
            >
                <Title>{title}</Title>
            </Box>

            <Scrollbar
                sx={{
                    overflowY: 'hidden',
                }}
            >
                <Box
                    sx={{
                        minWidth: '500px',
                    }}
                >
                    <Chart dir="ltr" type="line" series={series} options={chartOptions} width="100%" height={364} />
                </Box>
            </Scrollbar>
        </Box>
    );
}
