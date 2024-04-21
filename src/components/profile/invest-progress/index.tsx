import styled from '@emotion/styled';

import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/system';
import type { FC } from 'react';

const Value = styled.span`
    color: #373737;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`;
const Label = styled.span`
    color: #616161;
    font-size: 0.8rem;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const InvestInfo = styled.span`
    color: #616161;
    font-size: 0.7rem;
    line-height: 17px;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
`;

const Progress = styled(LinearProgress)`
    border-radius: 13px;
    height: 6px;
    .MuiLinearProgress-bar1Buffer {
        border-radius: 13px;
        background: #006838;
    }
    .MuiLinearProgress-bar2Buffer {
        border-radius: 13px;
        background: #d9d9d9;
    }
`;

interface Prop {
    sx?: SxProps;
    close?: boolean;
    stoped?: boolean;
}

const InvestProgress: FC<Prop> = ({ sx, stoped = false, close }) => {
    if (close) {
        return (
            <Box sx={{ width: '100%', ...sx }}>
                <Value>Инвестиции </Value>
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', ...sx }}>
            <Stack marginBottom={!stoped ? '8px' : '12px'} alignItems="baseline" direction="row" spacing="12px">
                <Value>$367,612.00</Value>
                <Label>{stoped ? 'Проинвестировано' : 'Собрано'}</Label>
            </Stack>
            {!stoped && <Progress valueBuffer={100} variant="buffer" value={100} />}
            <Stack marginTop="6px" direction="row" justifyContent="space-between">
                <InvestInfo>142 инвестора</InvestInfo>
                {!stoped && <InvestInfo>132% от цели</InvestInfo>}
            </Stack>
        </Box>
    );
};

export default InvestProgress;
