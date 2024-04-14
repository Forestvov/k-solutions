import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Icon from 'assets/pages/personal/check-circle.svg?react';

const Label = styled.span`
    font-weight: 300;
    font-size: 0.9rem;
    letter-spacing: 0.015em;
    color: #000000;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const Value = styled.span`
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.015em;
    text-align: right;
    color: #006838;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`;

const InvestStat = () => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack
                direction="row"
                alignItems="center"
                spacing={{
                    sm: '7.63px',
                    xs: '5px',
                }}
            >
                <Icon />
                <Label>Сумма займа:</Label>
            </Stack>
            <Value>$50,000.00</Value>
        </Stack>
    );
};

export default InvestStat;
