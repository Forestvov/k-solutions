import type { FC } from 'react';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface Item {
    title: string;
    description: string;
    label: string;
    value: string;
}

const Title = styled.h4`
    margin: 0 0 20px;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 38px;
    color: #000000;

    @media (min-width: 1024px) {
        font-size: 2.21rem;
        line-height: 44px;
        max-width: 364px;
    }

    @media (min-width: 1280px) {
        font-size: 2.225rem;
        max-width: 366px;
    }

    @media (min-width: 1668px) {
        font-size: 2.625rem;
        max-width: 428px;
    }
`;

const Description = styled(Typography)`
    max-width: 303px;
    margin: 0;
`;

const Label = styled(Typography)`
    margin: auto 0 5px;

    @media (min-width: 768px) {
        margin: auto 0 14px;
    }
`;

const Value = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 90px;
    line-height: 100px;
    color: #006838;

    @media (min-width: 768px) {
        font-size: 100px;
        line-height: 120px;
    }

    @media (min-width: 1280px) {
        font-size: 120px;
        line-height: 140px;
    }

    @media (min-width: 1668px) {
        font-size: 128px;
        line-height: 155px;
    }
`;

const Item: FC<Item> = ({ title, description, label, value }) => {
    return (
        <Stack
            sx={{
                background: '#F6F7F8',
                borderRadius: { xs: '25px', sm: '35px' },
                height: { xs: '450px', sm: '600px' },
                padding: { xs: '25px', sm: '35px', xl: '50px 50px 40px 50.5px' },
            }}
        >
            <Title>{title}</Title>
            <Description variant="body1">{description}</Description>
            <Label variant="body1">{label}</Label>
            <Value>{value}</Value>
        </Stack>
    );
};

export default Item;
