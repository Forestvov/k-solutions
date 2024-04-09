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
    max-width: 428px;
    margin: 0 0 20px;
    font-size: 2.625rem;
    font-weight: 500;
    line-height: 51px;
    color: #000000;
`;

const Description = styled(Typography)`
    max-width: 303px;
    margin: 0;
`;

const Label = styled(Typography)`
    margin: auto 0 14px;
`;

const Value = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 128px;
    line-height: 155px;
    color: #006838;
`;

const Item: FC<Item> = ({ title, description, label, value }) => {
    return (
        <Stack sx={{ background: '#F6F7F8', borderRadius: '35px', height: '600px', padding: '50px 50px 40px 50.5px' }}>
            <Title>{title}</Title>
            <Description variant="body1">{description}</Description>
            <Label variant="body1">{label}</Label>
            <Value>{value}</Value>
        </Stack>
    );
};

export default Item;
