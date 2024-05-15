import type { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import type { ItemProp } from './types/types';

const Title = styled.h5`
    position: relative;
    font-size: 1.25rem;
    line-height: 30px;
    font-weight: 500;
    margin: 0 0 25px;
    max-width: 484px;

    @media (min-width: 768px) {
        font-size: 1.6rem;
        line-height: 35px;
    }

    @media (min-width: 1024px) {
        margin: 0 0 auto;
    }

    @media (min-width: 1280px) {
        font-size: 2rem;
        line-height: 39px;
    }

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

const Image = styled.img`
    width: 67px;
    height: 67px;
    order: -1;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
        order: 0;
        margin-bottom: 0;
    }

    @media (min-width: 1280px) {
        width: 87px;
        height: 87px;
    }
`;

const Item: FC<ItemProp> = ({ title, icon, text }) => {
    return (
        <Stack
            boxSizing="border-box"
            sx={{
                borderRadius: { xs: '25px', sm: '35px' },
                height: { xs: '460px', md: '350px' },
                background: '#F6F7F8',
                padding: { xs: '25px', sm: '35px', xl: '50px' },
            }}
        >
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
                <Title>{title}:</Title>
                <Image src={icon} alt={title} />
            </Stack>
            <Typography
                variant="body1"
                sx={{ marginTop: 'auto', fontSize: { xs: '.9rem', md: '1rem', xl: '1.125rem' } }}
            >
                {text}
            </Typography>
        </Stack>
    );
};

export default Item;
