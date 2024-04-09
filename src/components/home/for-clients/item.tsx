import type { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import type { ItemProp } from './types/types';

const Title = styled.h5`
    position: relative;
    font-size: 2rem;
    font-weight: 500;
    line-height: 39px;
    margin: 0 0 auto;
    max-width: 484px;

    &::after {
        display: block;
        content: '';
        width: 90px;
        height: 6px;
        border-radius: 29px;
        margin-top: 15px;
        background: #006838;
    }
`;

const Item: FC<ItemProp> = ({ title, icon, text }) => {
    return (
        <Stack sx={{ borderRadius: '35px', height: '350px', background: '#F6F7F8', padding: '50px' }}>
            <Stack direction="row" justifyContent="space-between">
                <Title>{title}</Title>
                <img src={icon} alt={title} />
            </Stack>
            <Typography variant="body1" sx={{ marginTop: 'auto' }}>
                {text}
            </Typography>
        </Stack>
    );
};

export default Item;
