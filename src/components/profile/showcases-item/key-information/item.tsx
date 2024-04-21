import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

const Value = styled.div`
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 29px;
    letter-spacing: 0.015em;
    color: #006838;

    @media (min-width: 1280px) {
        font-size: 1.3rem;
    }

    @media (min-width: 1668px) {
        font-size: 1.5rem;
    }
`;

const Label = styled.div`
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 19px;
    letter-spacing: 0.015em;
    color: #5b5b5b;

    @media (min-width: 1668px) {
        font-size: 1rem;
    }
`;

const Item = () => {
    return (
        <Stack
            spacing={{
                lg: '7px',
                xs: '2px',
            }}
        >
            <Value>$560,000</Value>
            <Label>Сумма займа</Label>
        </Stack>
    );
};

export default Item;
