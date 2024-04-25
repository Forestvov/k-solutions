import type { CardProps } from '@mui/material/Card';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Chart, { useChart } from '../../shared/chart';

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #212b36;
    margin-bottom: 4px;
`;

const SubTitle = styled.div`
    color: #637381;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
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

const Area = styled(Box)`
    @media (max-width: 768px) {
        margin: 0 -20px !important;
    }
`;

export default function ProfilechartDynamicsArea({ title, chart, ...other }: Props) {
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
            <Box
                sx={{
                    paddingLeft: {
                        md: '35px',
                    },
                    marginBottom: {
                        xs: '30px',
                        sm: '0',
                    },
                }}
            >
                <Title>{title}</Title>
                <SubTitle>(+43%) than last year</SubTitle>
            </Box>

            {series.map((item, idx) => (
                <Area key={idx} sx={{ mt: 3, mx: 3 }}>
                    <Chart dir="ltr" type="line" series={item.data} options={chartOptions} width="100%" height={336} />
                </Area>
            ))}
        </Box>
    );
}
