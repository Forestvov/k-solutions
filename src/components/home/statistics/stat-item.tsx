import type { FC } from 'react';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface StatItem {
    value: string;
    sub?: string;
    label: string;
}

const Value = styled.h4`
    font-weight: 500;
    font-size: 4rem;
    line-height: 77px;
`;

const Sub = styled.div`
    font-weight: 400;
    font-size: 3rem;
`;

const Label = styled(Typography)`
    margin-top: auto;
    max-width: 318px;
`;

const StatItem: FC<StatItem> = ({ label, value, sub }) => {
    return (
        <Stack
            sx={{
                padding: '35px',
                height: '280px',
                background: '#F6F7F8',
                borderRadius: '35px',
            }}
        >
            <Stack direction="row" alignItems="baseline" spacing="15px">
                <Value>{value}</Value>
                {sub && <Sub>{sub}</Sub>}
            </Stack>
            <Label variant="body1">{label}</Label>
        </Stack>
    );
};

export default StatItem;
