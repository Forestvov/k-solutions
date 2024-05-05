import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import type { CardProps } from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import Chart, { useChart } from '../../shared/chart';
import type { Dayjs } from 'dayjs';

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #212b36;
`;

const DatePickerStyled = styled(DatePicker)`
    background: #919eab14;
    border: none;
    border-radius: 6px;
    width: 100%;

    fieldset {
        border: none;
    }

    @media (min-width: 768px) {
        max-width: 200px;
    }
`;

// ----------------------------------------------------------------------

interface Props extends CardProps {
    title?: string;
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
    setFromDate: (fromDate: Dayjs | null) => void;
    setToDate: (toDate: Dayjs | null) => void;
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

export default function ProfilechartArea({ title, chart, toDate, setFromDate, fromDate, setToDate, ...other }: Props) {
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
                    sm: 'row',
                }}
                alignItems={{
                    sm: 'center',
                }}
                spacing={{
                    xs: '16px',
                    sm: 0,
                }}
                justifyContent="space-between"
            >
                <Title>{title}</Title>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        spacing={{
                            xs: '16px',
                        }}
                    >
                        <DatePickerStyled label="Дата от" value={fromDate} onChange={setFromDate} format="DD-MM-YYYY" />
                        <DatePickerStyled label="Дата до" value={toDate} onChange={setToDate} format="DD-MM-YYYY" />
                    </Stack>
                </LocalizationProvider>
            </Stack>

            {series.map((item, idx) => (
                <Box key={idx} sx={{ mt: 3, mx: 3 }}>
                    <Chart dir="ltr" type="line" series={item.data} options={chartOptions} width="100%" height={356} />
                </Box>
            ))}
        </Box>
    );
}
