import type { FC } from 'react';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

interface Prop {
    label: string;
    value: string;
}

const Label = styled.span`
    color: #747474;
    font-size: 1rem;
    line-height: 27px;

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1280px) {
        font-size: 1.3rem;
    }

    @media (min-width: 1668px) {
        font-size: 1.375rem;
    }
`;

const Value = styled.span`
    color: #006838;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 51px;

    @media (min-width: 768px) {
        font-size: 2.1rem;
    }

    @media (min-width: 1280px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1668px) {
        font-size: 2.625rem;
    }
`;

const Item: FC<Prop> = ({ label, value }) => {
    return (
        <Stack
            direction={{ sm: 'row' }}
            alignItems={{ sm: 'center' }}
            justifyContent="space-between"
            sx={{
                padding: { sm: '31px 42px 30px 42px', xs: '20px' },
                background: '#F6F7F8',
                borderRadius: '20px',
            }}
        >
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Stack>
    );
};

export default Item;
