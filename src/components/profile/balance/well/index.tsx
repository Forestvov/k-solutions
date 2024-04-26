import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import UsdIcon from 'assets/pages/personal/currency/usd.png';
import EurIcon from 'assets/pages/personal/currency/eur.png';
import GbrIcon from 'assets/pages/personal/currency/gbr.png';
import JpyIcon from 'assets/pages/personal/currency/jpy.png';
import CnyIcon from 'assets/pages/personal/currency/cny.png';

import Title from '../../title';

import GrayWrapper from '../gray-wrapper';

const TitleStyled = styled(Title)`
    margin: 0 0 37px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
`;

const Label = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #373737;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
    }
`;

const Type = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #737373;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

interface ItemProp {
    image: string;
}

const Item = ({ image }: ItemProp) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack
                direction={{
                    sm: 'row',
                }}
                spacing={{
                    sm: '16px',
                    xs: '10px',
                }}
                alignItems={{
                    sm: 'center',
                }}
            >
                <Image src={image} alt="" />
                <Stack spacing="10px">
                    <Label>Доллар США</Label>
                    <Type>USD</Type>
                </Stack>
            </Stack>
            <Stack spacing="10px">
                <Type>Курс</Type>
                <Label>94,32 ₽</Label>
            </Stack>
        </Stack>
    );
};

const Well = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { lg: '560px' },
            }}
        >
            <GrayWrapper>
                <TitleStyled>Курс валют</TitleStyled>
                <Stack spacing="26px">
                    <Item image={UsdIcon} />
                    <Item image={EurIcon} />
                    <Item image={GbrIcon} />
                    <Item image={JpyIcon} />
                    <Item image={CnyIcon} />
                </Stack>
            </GrayWrapper>
        </Box>
    );
};

export default Well;
