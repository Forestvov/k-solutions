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
    line-height: 77px;
    font-size: 2rem;

    @media (min-width: 1668px) {
        font-size: 4rem;
    }

    @media (min-width: 1280px) {
        font-size: 3rem;
    }

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Sub = styled.div`
    font-weight: 400;
    font-size: 1.4rem;

    @media (min-width: 1280px) {
        font-size: 3rem;
    }

    @media (min-width: 1024px) {
        font-size: 2.1rem;
    }

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

const Label = styled(Typography)`
    margin-top: auto;
    max-width: 290px;
    font-size: 1rem;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`;

const StatItem: FC<StatItem> = ({ label, value, sub }) => {
    return (
        <Stack
            sx={{
                padding: { xs: '25px', sm: '35px' },
                height: { xs: '250px', sm: '280px' },
                background: '#F6F7F8',
                borderRadius: { xs: '25px', sm: '35px' },
            }}
        >
            <Stack direction="row" alignItems="baseline" spacing={{ xs: '5px', sm: '15px' }}>
                <Value>{value}</Value>
                {sub && <Sub>{sub}</Sub>}
            </Stack>
            <Label variant="body1">{label}</Label>
        </Stack>
    );
};

export default StatItem;
