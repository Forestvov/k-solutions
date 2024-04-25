import { useCallback, useState } from 'react';
import type { CardProps } from '@mui/material/Card';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import Iconify from '../../shared/iconify';
import Chart, { useChart } from '../../shared/chart';
import CustomPopover, { usePopover } from '../../shared/custom-popover';

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
            year: string;
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

    const popover = usePopover();

    const [seriesData, setSeriesData] = useState('2019');

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

    const handleChangeSeries = useCallback(
        (newValue: string) => {
            popover.onClose();
            setSeriesData(newValue);
        },
        [popover]
    );

    return (
        <>
            <Box {...other}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Title>{title}</Title>
                    <ButtonBase
                        onClick={popover.onOpen}
                        sx={{
                            pl: 1,
                            py: 0.5,
                            pr: 0.5,
                            borderRadius: 1,
                            typography: 'subtitle2',
                            bgcolor: 'background.neutral',
                        }}
                    >
                        {seriesData}

                        <Iconify
                            width={16}
                            icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
                            sx={{ ml: 0.5 }}
                        />
                    </ButtonBase>
                </Stack>

                {series.map((item) => (
                    <Box key={item.year} sx={{ mt: 3, mx: 3 }}>
                        {item.year === seriesData && (
                            <Chart
                                dir="ltr"
                                type="line"
                                series={item.data}
                                options={chartOptions}
                                width="100%"
                                height={356}
                            />
                        )}
                    </Box>
                ))}
            </Box>

            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 140 }}>
                {series.map((option) => (
                    <MenuItem
                        key={option.year}
                        selected={option.year === seriesData}
                        onClick={() => handleChangeSeries(option.year)}
                    >
                        {option.year}
                    </MenuItem>
                ))}
            </CustomPopover>
        </>
    );
}
